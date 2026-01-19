"use client";

import { motion } from "framer-motion";

// Icons matching the simulator style (Thin outline, rounded, stroke-based)
const InputIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const StateIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const KeyIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
);

const LogicIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const DevIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const patterns = [
    {
        icon: <InputIcon />,
        title: "Confidential User Inputs",
        description: "Applications can accept sensitive inputs without exposing values on-chain.",
        details: "Inputs are encrypted client-side and processed by smart contracts without revealing the underlying data. This pattern is useful for scenarios where user-submitted values should remain private during execution."
    },
    {
        icon: <StateIcon />,
        title: "Private On-Chain State",
        description: "Smart contracts can store encrypted values as persistent state.",
        details: "Although the data is stored on-chain, it appears as ciphertext and cannot be interpreted without authorization. This allows applications to maintain confidential state while remaining fully on-chain."
    },
    {
        icon: <KeyIcon />,
        title: "Selective Data Disclosure",
        description: "Using permits, encrypted values can be selectively revealed to authorized parties.",
        details: "Different users may be granted access to different pieces of information without exposing global state. This enables fine-grained visibility control at the protocol level."
    },
    {
        icon: <LogicIcon />,
        title: "Privacy-Preserving Logic Execution",
        description: "Smart contracts can perform comparisons and arithmetic directly on encrypted values.",
        details: "Execution logic operates without accessing plaintext data at any point. This enables conditional logic while preserving confidentiality."
    },
    {
        icon: <DevIcon />,
        title: "Developer-Controlled Privacy",
        description: "Developers define which values remain encrypted and which values may be revealed.",
        details: "Privacy behavior is enforced through encrypted types and permit-based access, rather than application-level workarounds."
    }
];

export function ApplicationPatterns() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-20 md:py-32">
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-transparent dark:bg-gradient-to-b dark:from-indigo-200 dark:to-slate-400 dark:bg-clip-text transition-colors duration-300"
                >
                    Real-World Application Patterns
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300"
                >
                    Encrypted computation enables new application patterns that are difficult to implement using plaintext smart contracts alone.
                    <br className="hidden md:block" />
                    <span className="text-sm opacity-70 mt-2 block">These examples are conceptual and intended to illustrate how Fhenix primitives can be composed.</span>
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {patterns.map((pattern, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-bg-card border border-border-soft rounded-2xl p-6 hover:border-accent-primary/50 transition-colors shadow-sm"
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-border-soft bg-bg-panel text-text-secondary group-hover:border-accent-primary group-hover:text-accent-primary group-hover:shadow-[0_0_15px_var(--glow-accent)] transition-all duration-300">
                                {pattern.icon}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-text-primary mb-3 transition-colors duration-300">{pattern.title}</h3>
                        <p className="text-text-secondary font-medium mb-3 transition-colors duration-300">{pattern.description}</p>
                        <p className="text-text-secondary text-sm leading-relaxed transition-colors duration-300 opacity-80">{pattern.details}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-20 pt-10 border-t border-border-soft text-center space-y-4"
            >
                <p className="text-text-secondary text-xs max-w-3xl mx-auto leading-relaxed">
                    <strong>Disclaimer:</strong> These examples illustrate conceptual application patterns based on encrypted computation primitives described in the Fhenix documentation. They do not represent specific products, guarantees, or performance characteristics.
                </p>
            </motion.div>
        </section>
    );
}
