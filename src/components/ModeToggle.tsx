"use client";

import { motion } from "framer-motion";

interface ModeToggleProps {
  mode: "PUBLIC" | "FHE";
  setMode: (mode: "PUBLIC" | "FHE") => void;
  disabled?: boolean;
}

export function ModeToggle({ mode, setMode, disabled }: ModeToggleProps) {
  return (
    <div
      className="bg-black dark:bg-bg-panel p-1 rounded-full flex gap-1 border border-gray-800 dark:border-border-soft relative w-fit mx-auto transition-colors duration-300 shadow-inner"
      style={{ backgroundColor: "var(--toggle-bg)" }}
    >
      {/* Active Background Pill */}
      <motion.div
        className="absolute top-1 bottom-1 bg-[#4F46E5] dark:bg-accent-primary rounded-full z-0 shadow-md"
        initial={false}
        animate={{
          left: mode === "PUBLIC" ? "4px" : "50%",
          width: "calc(50% - 6px)",
          x: mode === "PUBLIC" ? 0 : 2
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      <button
        onClick={() => setMode("PUBLIC")}
        disabled={disabled}
        className={`relative z-10 px-4 py-2 md:px-6 rounded-full text-xs md:text-sm font-bold transition-colors duration-200 ${mode === "PUBLIC" ? "text-white dark:text-button-text" : "text-gray-400 dark:text-text-secondary hover:text-white dark:hover:text-text-primary"
          }`}
      >
        Public Blockchain
      </button>

      <button
        onClick={() => setMode("FHE")}
        disabled={disabled}
        className={`relative z-10 px-4 py-2 md:px-6 rounded-full text-xs md:text-sm font-bold transition-colors duration-200 ${mode === "FHE" ? "text-white dark:text-button-text" : "text-gray-400 dark:text-text-secondary hover:text-white dark:hover:text-text-primary"
          }`}
      >
        Fhenix FHE
      </button>
    </div>
  );
}
