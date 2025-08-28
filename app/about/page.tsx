import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { PersonalValues } from "@/components/personal-values"

export const metadata = {
  title: "About - Felix Orina",
  description:
    "Learn more about Felix Orina, a Full-Stack Software Engineer based in Nairobi with 4+ years of experience in modern web technologies.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <AboutHero />
        <ExperienceTimeline />
        <PersonalValues />
      </main>
      <Footer />
    </div>
  )
}
