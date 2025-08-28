import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export function ProjectsHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">My Projects</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl text-pretty">
            A collection of web applications and digital solutions I've built using modern technologies. Each project
            represents a unique challenge and learning opportunity.
          </p>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/felixorina" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
