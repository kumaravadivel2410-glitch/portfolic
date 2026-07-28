"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code, Cpu, Play, CheckCircle2, Copy, Check } from "lucide-react";

export default function DevTerminal() {
  const [activeTab, setActiveTab] = useState<"engineer.ts" | "algorithm.py" | "terminal.sh">("engineer.ts");
  const [commandOutput, setCommandOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    "engineer.ts": `/**
 * @profile Kumara Vadivel
 * @role Software Engineering Undergrad (3rd Year, 2024)
 * @institution JP College of Engineering
 */

export interface SoftwareEngineer {
  name: string;
  year: "3rd Year (2024 - Present)";
  coreFocus: ["Data Structures & Algorithms", "Full-Stack Web Systems", "OOP & Design Patterns"];
  primaryLanguages: ["Python", "TypeScript", "Java", "C"];
  databases: ["MySQL", "Relational Schemas", "Firebase"];
  status: "Open for Software Engineering Internships";
}

const engineer: SoftwareEngineer = {
  name: "Kumara Vadivel",
  year: "3rd Year (2024 - Present)",
  coreFocus: ["Data Structures & Algorithms", "Full-Stack Web Systems", "OOP & Design Patterns"],
  primaryLanguages: ["Python", "TypeScript", "Java", "C"],
  databases: ["MySQL", "Relational Schemas", "Firebase"],
  status: "Open for Software Engineering Internships"
};`,
    "algorithm.py": `# Voice AI Engine & Algorithm Pipeline
import speech_recognition as sr
from nlp_engine import ProcessQuery

class SoftwareEngineeringAssistant:
    def __init__(self, owner="Kumara Vadivel"):
        self.owner = owner
        self.status = "Active"
        self.modules = ["Speech-to-Text", "REST-API Fetcher", "Computer Vision"]

    def execute_pipeline(self, user_command: str) -> dict:
        """Parses speech input and dispatches asynchronous tasks"""
        print(f"[{self.owner}] Executing intent: {user_command}")
        result = ProcessQuery(user_command).parse()
        return {"status": 200, "response": result, "latency_ms": 14}

# Test execution:
assistant = SoftwareEngineeringAssistant()
assistant.execute_pipeline("Fetch real-time system metrics")`,
    "terminal.sh": `$ git status
On branch main
Your branch is up to date with 'origin/main'.

$ npm run build
> kv-portfolio@0.1.0 build
> next build

✓ Compiled successfully in 1.4s
✓ 0 errors, 0 warnings
✓ Static assets generated for 3rd Year SWE Profile (2024)

$ python -m unittest test_suite.py
Ran 12 tests in 0.084s ... OK (100% Passed)
$ echo "Ready for Software Engineering Internships!"`,
  };

  const handleRunCommand = (cmd: string) => {
    setIsRunning(true);
    setCommandOutput(`Executing: ${cmd}...`);
    setTimeout(() => {
      setIsRunning(false);
      if (cmd === "compile") {
        setCommandOutput("✓ [SUCCESS] Code compiled with 0 errors. All test assertions passed!");
      } else if (cmd === "git") {
        setCommandOutput("✓ [GIT] Working tree clean. 3rd Year (2024) SWE updates committed.");
      } else {
        setCommandOutput("✓ [SYSTEM] All software engineering modules ready.");
      }
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto glass-card rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl overflow-hidden text-slate-200">
      {/* IDE Window Top Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        {/* Mac OS Window Controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400 font-semibold hidden sm:inline">
            KV-IDE v2.4 (SWE Workstation)
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab("engineer.ts")}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-1.5 transition-all ${
              activeTab === "engineer.ts"
                ? "bg-sky-500 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Code className="w-3 h-3" />
            <span>engineer.ts</span>
          </button>

          <button
            onClick={() => setActiveTab("algorithm.py")}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-1.5 transition-all ${
              activeTab === "algorithm.py"
                ? "bg-sky-500 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>algorithm.py</span>
          </button>

          <button
            onClick={() => setActiveTab("terminal.sh")}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono flex items-center space-x-1.5 transition-all ${
              activeTab === "terminal.sh"
                ? "bg-sky-500 text-white font-semibold shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>terminal.sh</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto min-h-[220px] max-h-[280px] bg-slate-900/95 text-sky-200 selection:bg-sky-500/30">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="whitespace-pre font-mono text-slate-300"
          >
            <code>{codeSnippets[activeTab]}</code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Command Output Box */}
      {commandOutput && (
        <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center space-x-2">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          <span>{commandOutput}</span>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleRunCommand("compile")}
            disabled={isRunning}
            className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center space-x-1 transition-all active:scale-95 cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{isRunning ? "Running..." : "Run Test"}</span>
          </button>

          <button
            onClick={() => handleRunCommand("git")}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-all cursor-pointer"
          >
            $ git status
          </button>
        </div>

        <button
          onClick={handleCopyCode}
          className="text-slate-400 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}
