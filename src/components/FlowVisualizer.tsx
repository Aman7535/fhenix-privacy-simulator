"use client";

import { motion } from "framer-motion";
import { StageNode } from "./StageNode";

interface FlowVisualizerProps {
    mode: "PUBLIC" | "FHE";
    status: "IDLE" | "ANIMATING" | "COMPLETED";
    stage: number;
}

// Simple icons as components
const UserIcon = () => (
    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
const TxIcon = () => (
    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);
const ExecIcon = () => (
    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
);
const StateIcon = () => (
    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

export function FlowVisualizer({ mode, status, stage }: FlowVisualizerProps) {
    // Define stage text based on mode
    const getStageInfo = (index: number) => {
        if (mode === "PUBLIC") {
            switch (index) {
                case 0: return { label: "Plaintext input", sub: "value = 42" };
                case 1: return { label: "Transaction", sub: "Public payload" };
                case 2: return { label: "Execution", sub: "Contract reads plaintext" };
                case 3: return { label: "On-chain Storage", sub: "Public state" };
            }
        } else {
            switch (index) {
                case 0: return { label: "Encrypted client-side", sub: "0x1a9f..." };
                case 1: return { label: "Transaction", sub: "Ciphertext payload" };
                case 2: return { label: "Computation", sub: "Over encrypted data" };
                case 3: return { label: "Encrypted Storage", sub: "Encrypted state" };
            }
        }
        return { label: "", sub: "" };
    };

    const icons = [<UserIcon key="0" />, <TxIcon key="1" />, <ExecIcon key="2" />, <StateIcon key="3" />];

    return (
        <div className="relative w-full max-w-5xl mx-auto py-10 lg:py-20 px-4 lg:px-8">

            {/* --- DESKTOP LINES (Horizontal) --- */}
            <div className="hidden lg:block">
                <div className="absolute top-[120px] left-0 right-0 h-1 bg-border-soft -z-10 rounded-full mx-24 transition-colors duration-300" />
                <motion.div
                    className="absolute top-[120px] left-24 h-1 bg-accent-primary -z-0 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(stage / 3) * (100 - 20) + (stage > 0 ? 5 : 0)}%` }}
                    transition={{ duration: 0.5 }}
                />
                {(status === "ANIMATING" || status === "COMPLETED") && (
                    <motion.div
                        className="absolute top-[48px] w-12 h-12 bg-accent-primary rounded-full z-20 shadow-[0_0_20px_var(--glow-accent)] flex items-center justify-center font-bold text-white text-xs"
                        initial={{ left: "48px" }}
                        animate={{
                            left: `calc(${(Math.min(stage, 3) / 3) * 84}% + 32px)`
                        }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
                    >
                        {mode === "FHE" ? "🔒" : "📄"}
                    </motion.div>
                )}
            </div>

            {/* --- MOBILE LINES (Vertical) --- */}
            <div className="block lg:hidden">
                {/* Track Line */}
                <div className="absolute top-12 bottom-20 left-[31px] w-1 bg-border-soft -z-10 rounded-full transition-colors duration-300" />

                {/* Progress Line */}
                <motion.div
                    className="absolute top-12 left-[31px] w-1 bg-accent-primary -z-0 rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: `${(Math.min(stage, 3) / 3) * 82}%` }}
                    transition={{ duration: 0.5 }}
                    style={{ maxHeight: "calc(100% - 5rem)" }}
                />

                {/* Moving Pip */}
                {(status === "ANIMATING" || status === "COMPLETED") && (
                    <motion.div
                        className="absolute left-[8px] w-12 h-12 bg-accent-primary rounded-full z-20 shadow-[0_0_20px_var(--glow-accent)] flex items-center justify-center font-bold text-white text-xs"
                        initial={{ top: "48px" }}
                        animate={{
                            top: `calc(${(Math.min(stage, 3) / 3) * 82}% + 48px)`
                        }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
                    >
                        {mode === "FHE" ? "🔒" : "📄"}
                    </motion.div>
                )}
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start relative gap-10 lg:gap-0">
                {[0, 1, 2, 3].map((index) => {
                    const info = getStageInfo(index);
                    return (
                        <StageNode
                            key={index}
                            label={info.label}
                            subLabel={status === "IDLE" && index !== 0 ? "" : info.sub}
                            isActive={status === "ANIMATING" && stage === index}
                            isCompleted={stage > index || (status === "COMPLETED" && index === 3)}
                            icon={icons[index]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
