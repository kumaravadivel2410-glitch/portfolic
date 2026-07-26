"use client";

import { useState, useEffect } from "react";

export function useEditableSection<T>(storageKey: string, initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);
  const [draftData, setDraftData] = useState<T[]>(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData(parsed);
        setDraftData(parsed);
      }
    } catch (e) {
      console.warn(`Failed to read ${storageKey} from localStorage:`, e);
    }
  }, [storageKey]);

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
