import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsFilter } from "@/components/projects-filter"

export const metadata = {
  title: "Projects - Felix Orina",
  description:
    "Explore Felix Orina's portfolio of web applications, including school management systems, e-commerce platforms, and modern web solutions built with React, Next.js, and Django.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <ProjectsHero />
        <ProjectsFilter />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}
