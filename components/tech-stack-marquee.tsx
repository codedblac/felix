"use client"

import { Badge } from "@/components/ui/badge"

const techStack = [
  { name: "React", icon: "/tech-icons/react.png" },
  { name: "Next.js", icon: "/tech-icons/nextjs.png" },
  { name: "Vue.js", icon: "/tech-icons/vue.png" },
  { name: "Django", icon: "/tech-icons/django.png" },
  { name: "TypeScript", icon: "/tech-icons/typescript.png" },
  { name: "JavaScript", icon: "/tech-icons/javascript.png" },
  { name: "Tailwind CSS", icon: "/tech-icons/tailwind.png" },
  { name: "PostgreSQL", icon: "/tech-icons/postgresql.png" },
  { name: "Git", icon: "/tech-icons/git.png" },
  { name: "Python", icon: "/tech-icons/python.png" },
  { name: "Node.js", icon: "/tech-icons/nodejs.png" },
  { name: "REST APIs", icon: "/tech-icons/api.png" },
]

export function TechStackMarquee() {
  return (
    <section className="py-8 sm:py-12 bg-muted/30 border-y overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-8">
          <h2 className="text-sm sm:text-base font-semibold text-foreground/80 uppercase tracking-wide">
            Technologies I Work With
          </h2>
        </div>

        <div className="relative overflow-hidden mask-gradient">
          <div className="flex animate-marquee space-x-3 sm:space-x-4">
            {[...techStack, ...techStack].map((tech, index) => (
              <Badge
                key={`${tech.name}-${index}`}
                variant="secondary"
                className="whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium bg-background border border-border/50 hover:bg-muted transition-colors flex items-center gap-2 flex-shrink-0 text-foreground"
              >
                <img
                  src={tech.icon || "/placeholder.svg"}
                  alt={`${tech.name} icon`}
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 object-contain"
                />
                <span>{tech.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
