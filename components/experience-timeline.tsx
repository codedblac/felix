import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company: "Technopick Reliable Solutions Ltd",
    period: "2022 - Present",
    location: "Nairobi, Kenya",
    description:
      "Leading development of enterprise web applications using React, Next.js, and Django. Architecting scalable solutions and mentoring junior developers.",
    technologies: ["React", "Next.js", "Django", "PostgreSQL", "AWS", "Docker"],
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led a team of 3 developers on major client projects",
      "Implemented CI/CD pipelines improving deployment efficiency by 60%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Kenya",
    period: "2021 - 2022",
    location: "Nairobi, Kenya",
    description:
      "Developed responsive web applications and collaborated with design teams to create intuitive user interfaces.",
    technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "Node.js"],
    achievements: [
      "Built 15+ responsive web applications",
      "Improved user engagement by 35% through UX enhancements",
      "Collaborated with cross-functional teams of 8+ members",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartupHub Nairobi",
    period: "2020 - 2021",
    location: "Nairobi, Kenya",
    description:
      "Started my professional journey building websites and learning modern development practices in a fast-paced startup environment.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: [
      "Delivered 20+ client websites on time and within budget",
      "Learned agile development methodologies",
      "Contributed to open-source projects",
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground">My journey through the software development industry</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4" />
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        <Calendar className="h-3 w-3" />
                        {experience.period}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{experience.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
