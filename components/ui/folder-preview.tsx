"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileCode, Check, Copy, Terminal, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FolderFile {
  name: string;
  language: string;
  code: string;
  desc?: string;
}

export interface FolderPreviewProps {
  folderName: string;
  files: FolderFile[];
  className?: string;
}

export function FolderPreview({ folderName, files, className }: FolderPreviewProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeFile = files[activeIdx] || files[0];

  const handleCopy = () => {
    if (!activeFile) return;
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-3xl border border-slate-800 bg-slate-950/95 overflow-hidden shadow-2xl font-mono text-xs text-slate-300", className)}>
      {/* Folder Header Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <Folder className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-white text-xs">{folderName}</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied!" : "Copy Code"}</span>
        </button>
      </div>

      {/* File Tabs */}
      <div className="flex items-center space-x-1 px-2 pt-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto">
        {files.map((file, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-t-xl transition-all cursor-pointer text-[11px]",
              activeIdx === idx
                ? "bg-slate-950 text-white font-bold border-t-2 border-blue-500 shadow-sm"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            )}
          >
            <FileCode className="w-3.5 h-3.5 text-indigo-400" />
            <span>{file.name}</span>
          </button>
        ))}
      </div>

      {/* Code Display Area */}
      <div className="p-4 bg-slate-950 overflow-x-auto min-h-[180px]">
        {activeFile?.desc && (
          <div className="mb-3 p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-300 text-[11px] flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>{activeFile.desc}</span>
          </div>
        )}

        <pre className="text-slate-200 font-mono text-[11px] leading-relaxed">
          <code>{activeFile?.code}</code>
        </pre>
      </div>
    </div>
  );
}
