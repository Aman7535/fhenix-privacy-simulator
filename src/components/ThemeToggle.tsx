"use client";

export function ThemeToggle({
    theme,
    setTheme,
}: {
    theme: "dark" | "light";
    setTheme: (t: "dark" | "light") => void;
}) {
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`relative p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary ${theme === "dark" ? "bg-bg-panel hover:bg-border-soft" : "bg-bg-panel hover:bg-border-soft"
                } border border-border-soft shadow-sm text-accent-primary`}
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6">
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                        }`}
                >
                    {/* Moon Icon */}
                    <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>

                <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                        }`}
                >
                    {/* Sun Icon */}
                    <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </div>
        </button>
    );
}
