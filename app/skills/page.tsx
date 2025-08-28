import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillsHero } from "@/components/skills-hero"
import { TechnicalSkills } from "@/components/technical-skills"
import { SkillsChart } from "@/components/skills-chart"

export const metadata = {
  title: "Skills - Felix Orina",
  description:
    "Explore Felix Orina's technical skills and expertise in Full-Stack development, including React, Next.js, Django, and modern web technologies.",
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <SkillsHero />
        <TechnicalSkills />
        <SkillsChart />
      </main>
      <Footer />
    </div>
  )
}
