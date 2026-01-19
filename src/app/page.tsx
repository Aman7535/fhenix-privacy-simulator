import { Simulator } from "@/components/Simulator";
import { ApplicationPatterns } from "@/components/ApplicationPatterns";


export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-bg-main relative overflow-x-hidden transition-colors duration-300">

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="pt-8 md:pt-12 text-center space-y-2 z-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-text-primary transition-colors duration-300">
            Fhenix Privacy Simulator
          </h1>
          <p className="text-text-secondary font-light transition-colors duration-300">
            Native encrypted computation using Fully Homomorphic Encryption (FHE)
          </p>
        </header>

        {/* Simulator Area */}
        <div className="flex-1 flex items-center justify-center p-6">
          <Simulator />
        </div>

        {/* Patterns Section */}
        <ApplicationPatterns />

        <footer className="pb-6 text-center z-10 space-y-2">
          <p className="text-text-secondary text-sm font-medium transition-colors duration-300">
            “This is an educational visualization based on concepts described in the Fhenix documentation.”
          </p>
          <a
            href="https://cofhe-docs.fhenix.zone/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:text-accent-secondary text-sm font-medium transition-colors duration-300 inline-block"
          >
            Visit Official Docs
          </a>


        </footer>
      </div>

      {/* Subtle Background Elements (Dark Mode Only or Adjusted) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-secondary blur-[120px] rounded-full transition-colors duration-300 opacity-20" />
      </div>
    </main >
  );
}
