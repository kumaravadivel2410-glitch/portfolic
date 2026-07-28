"use client";

import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function getSavedData<T>(storageKey: string, initialData: T[]): T[] {
  if (typeof window === "undefined") return initialData;
  try {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : initialData;
  } catch {
    return initialData;
  }
}

export function useEditableSection<T>(storageKey: string, initialData: T[]) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [data, setData] = useState<T[]>(() => getSavedData(storageKey, initialData));
  const [draftData, setDraftData] = useState<T[]>(() => getSavedData(storageKey, initialData));
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    setDraftData([...data]);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraftData([...data]);
    setIsEditing(false);
  };

  const saveEdit = () => {
    setData([...draftData]);
    setIsEditing(false);
    try {
      localStorage.setItem(storageKey, JSON.stringify(draftData));
    } catch (e) {
      console.warn(`Failed to save ${storageKey} to localStorage:`, e);
    }
  };

  const resetToDefault = () => {
    setData(initialData);
    setDraftData(initialData);
    setIsEditing(false);
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      console.warn(`Failed to remove ${storageKey} from localStorage:`, e);
    }
  };

  const exportJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(draftData, null, 2)
    )}`;
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `${storageKey}_export.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return {
    data: isClient ? data : initialData,
    draftData,
    setDraftData,
    isEditing,
    startEdit,
    cancelEdit,
    saveEdit,
    resetToDefault,
    exportJson,
  };
}
