"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeToggle } from "../components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Basic local storage check
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Tailwind 'dark' class strategy fallback
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Pass theme down via context or just exposing it if I could, but children are opaque.
  // I will render the ThemeToggle HERE so it has access to state.

  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "var(--bg-main)", color: "var(--text-primary)" }}>
        {/* Global Toggle Positioning */}
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        {children}
      </body>
    </html>
  );
}
