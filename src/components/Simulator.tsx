"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { FlowVisualizer } from "./FlowVisualizer";
import { motion, AnimatePresence } from "framer-motion";

export function Simulator() {
    const [mode, setMode] = useState<"PUBLIC" | "FHE">("FHE"); // Default to FHE for demo
    const [status, setStatus] = useState<"IDLE" | "ANIMATING" | "COMPLETED">("IDLE");
    const [stage, setStage] = useState(0);
    const [permitRevealed, setPermitRevealed] = useState(false);

    // Reset state on mode switch
    useEffect(() => {
        setStatus("IDLE");
        setStage(0);
        setPermitRevealed(false);
    }, [mode]);

    const handleSendInput = () => {
        setStatus("ANIMATING");
        setPermitRevealed(false);
        setStage(0);

        // Animation sequence
        const stepDuration = 1500; // ms per step

        // Step 0 -> 1
        setTimeout(() => setStage(1), stepDuration);
        // Step 1 -> 2
        setTimeout(() => setStage(2), stepDuration * 2);
        // Step 2 -> 3
        setTimeout(() => {
            setStage(3);
            setStatus("COMPLETED");
        }, stepDuration * 3);
    };

    return (
        <div className="relative w-[90%] md:w-[85%] max-w-6xl mx-auto min-h-fit lg:min-h-[600px] h-full rounded-3xl overflow-hidden p-[4px] shadow-2xl z-0">
            {/* Animated Border Gradient */}
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#00d1e8_40%,#00d1e8_60%,#000000_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#0a1022_0%,#00d1e8_40%,#00d1e8_60%,#0a1022_100%)] opacity-100 will-change-transform" />

            {/* Content Container */}
            <div className="relative flex flex-col items-center justify-between h-full w-full rounded-[calc(1.5rem-2px)] bg-bg-card p-8 lg:p-12 text-center lg:text-left">

                {/* Top Control */}
                <div className="space-y-6 text-center z-20">
                    <ModeToggle mode={mode} setMode={setMode} disabled={status === "ANIMATING"} />

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={mode}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-text-secondary max-w-lg mx-auto h-12 transition-colors duration-300"
                        >
                            {mode === "PUBLIC"
                                ? "In a public blockchain, data is visible to everyone at every step."
                                : "With Fhenix, data remains encrypted throughout execution and can be selectively revealed using a permit."}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Main Visualizer */}
                <div className="flex-grow flex flex-col items-center justify-center w-full max-w-full">
                    <FlowVisualizer mode={mode} status={status} stage={stage} />
                    <p className="text-xs text-text-secondary mt-12 mb-8 font-medium tracking-wide transition-colors duration-300">
                        Visualization only — no real blockchain interaction.
                    </p>
                </div>

                {/* Bottom Actions */}
                <div className="pb-12 min-h-[6rem] flex flex-col lg:flex-row items-center justify-center gap-4 lg:space-x-4 w-full px-4">
                    {status !== "ANIMATING" && !permitRevealed && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSendInput}
                            className="w-full lg:w-auto bg-button-bg hover:bg-accent-secondary text-button-text font-bold py-3 px-8 rounded-full shadow-lg shadow-button-bg/30 transition-all flex items-center justify-center gap-2"
                        >
                            <span>▶</span> Send Input
                        </motion.button>
                    )}

                    {status === "COMPLETED" && mode === "FHE" && !permitRevealed && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPermitRevealed(true)}
                            className="w-full lg:w-auto bg-bg-panel hover:bg-border-soft text-accent-primary font-semibold py-3 px-8 rounded-full border border-border-soft transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                            🔓 Request Permit & Reveal
                        </motion.button>
                    )}

                    {permitRevealed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-bg-panel text-accent-primary px-6 py-3 rounded-xl border border-border-soft w-full lg:w-auto text-center transition-colors duration-300 shadow-sm"
                        >
                            Permit simulation: Encrypted value is revealed to the authorized user.
                        </motion.div>
                    )}
                </div>

            </div>
        </div>
    );
}
