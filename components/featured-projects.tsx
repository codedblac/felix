import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const featuredProjects = [
  {
    title: "School ERP System",
    description:
      "Comprehensive school management system with student enrollment, grade tracking, and administrative tools.",
    image: "/school-management-dashboard-interface.png",
    technologies: ["Django", "React", "PostgreSQL", "REST API"],
    liveUrl: "https://eduos-front.vercel.app/",
    githubUrl: "https://github.com/codedblac/eduos-front",
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce application with payment integration, inventory management, and responsive design.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
    liveUrl: "https://adfinitum-trails.vercel.app/",
    githubUrl: "https://github.com/codedblac/adfinitum-trails",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing projects and skills with dark/light mode support.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://felix-portfolio-ruddy.vercel.app/",
    githubUrl: "https://github.com/codedblac/felix",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-responsive">
            Featured Projects
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground text-responsive">
            A selection of my recent work showcasing different technologies and approaches
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 img-responsive"
                />
              </div>

              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-responsive">{project.title}</CardTitle>
                <CardDescription className="text-pretty text-responsive text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs text-responsive">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-2 p-4 sm:p-6 pt-0">
                <Button size="sm" asChild className="w-full sm:flex-1">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Live Demo</span>
                  </Link>
                </Button>

                <Button variant="outline" size="sm" asChild className="w-full sm:flex-1 bg-transparent">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Code</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="/projects">
              <span className="truncate">View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
