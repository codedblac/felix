import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TechStackMarquee } from "@/components/tech-stack-marquee"
import { AboutPreview } from "@/components/about-preview"
import { FeaturedProjects } from "@/components/featured-projects"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <TechStackMarquee />
        <AboutPreview />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}
