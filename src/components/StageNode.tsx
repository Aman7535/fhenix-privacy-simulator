"use client";

import { motion } from "framer-motion";

interface StageNodeProps {
    label: string;
    subLabel?: string;
    isActive: boolean;
    isCompleted: boolean;
    icon: React.ReactNode;
}

export function StageNode({ label, subLabel, isActive, isCompleted, icon }: StageNodeProps) {
    return (
        <div className="flex flex-row lg:flex-col items-center gap-4 relative z-10 w-full lg:w-48 text-left lg:text-center bg-bg-card backdrop-blur-sm p-4 rounded-xl border border-border-soft dark:border-transparent transition-colors duration-500 shadow-sm">
            <motion.div
                className={`w-12 h-12 lg:w-16 lg:h-16 shrink-0 rounded-2xl flex items-center justify-center shadow-xl border-2 transition-all duration-500 ${isActive || isCompleted
                    ? "border-accent-primary bg-accent-primary/20 text-text-primary shadow-[0_0_15px_var(--glow-accent)]"
                    : "border-border-soft bg-bg-panel text-text-secondary shadow-sm"
                    }`}
                animate={{
                    scale: isActive ? 1.15 : 1,
                    borderColor: isActive ? "var(--accent-primary)" : isCompleted ? "var(--accent-secondary)" : "var(--border-soft)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {icon}
            </motion.div>

            <div className="space-y-1">
                <p className={`text-sm font-semibold transition-colors duration-300 ${isActive || isCompleted ? "text-accent-primary" : "text-text-secondary"
                    }`}>
                    {label}
                </p>
                <p className="text-xs text-text-secondary h-4 transition-colors duration-300 opacity-80">
                    {subLabel}
                </p>
            </div>
        </div>
    );
}
