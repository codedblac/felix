import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Eye } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden container-responsive">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('/hero-background.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 prevent-overflow">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="hidden sm:inline">Available for new opportunities</span>
              <span className="sm:hidden">Available</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-balance leading-tight text-responsive">
              Hi, I'm <span className="text-primary">Felix Orina</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-200 text-pretty max-w-3xl mx-auto text-responsive px-2 sm:px-0">
              Full-Stack Software Engineer specializing in <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Next.js</span>, and{" "}
              <span className="text-white font-semibold">Django</span>
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-300 text-responsive px-2 sm:px-0">
              <span className="hidden sm:inline">Based in Nairobi, Kenya • </span>
              4+ years of experience building scalable applications
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-0">
            <Button size="lg" asChild className="group w-full sm:w-auto min-w-0">
              <Link href="/projects">
                <Eye className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 flex-shrink-0" />
                <span className="truncate">View My Work</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-full sm:w-auto min-w-0"
            >
              <Link href="/resume">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 flex-shrink-0" />
                <span className="hidden sm:inline truncate">Download Resume</span>
                <span className="sm:hidden truncate">Resume</span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 animate-bounce hidden sm:block">
            <ArrowDown className="mx-auto h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
