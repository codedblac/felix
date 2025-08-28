import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", level: 95, experience: "4+ years" },
      { name: "Next.js", level: 90, experience: "3+ years" },
      { name: "Vue.js", level: 85, experience: "2+ years" },
      { name: "TypeScript", level: 88, experience: "3+ years" },
      { name: "JavaScript", level: 95, experience: "4+ years" },
      { name: "Tailwind CSS", level: 92, experience: "3+ years" },
    ],
  },
  {
    title: "Backend Development",
    description: "Server-side development and API design",
    skills: [
      { name: "Django", level: 90, experience: "3+ years" },
      { name: "Python", level: 88, experience: "4+ years" },
      { name: "Node.js", level: 82, experience: "2+ years" },
      { name: "REST APIs", level: 92, experience: "4+ years" },
      { name: "GraphQL", level: 75, experience: "1+ years" },
    ],
  },
  {
    title: "Database & DevOps",
    description: "Data management and deployment technologies",
    skills: [
      { name: "PostgreSQL", level: 85, experience: "3+ years" },
      { name: "MySQL", level: 80, experience: "2+ years" },
      { name: "Git", level: 95, experience: "4+ years" },
      { name: "Docker", level: 78, experience: "2+ years" },
      { name: "AWS", level: 72, experience: "1+ years" },
    ],
  },
  {
    title: "Tools & Methodologies",
    description: "Development tools and best practices",
    skills: [
      { name: "Agile/Scrum", level: 88, experience: "3+ years" },
      { name: "Testing", level: 82, experience: "2+ years" },
      { name: "CI/CD", level: 75, experience: "2+ years" },
      { name: "Code Review", level: 90, experience: "3+ years" },
    ],
  },
]

function getSkillLevel(level: number) {
  if (level >= 90) return { label: "Expert", color: "bg-primary" }
  if (level >= 80) return { label: "Proficient", color: "bg-chart-2" }
  if (level >= 70) return { label: "Intermediate", color: "bg-chart-3" }
  return { label: "Beginner", color: "bg-muted-foreground" }
}

export function TechnicalSkills() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-fit">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillLevel = getSkillLevel(skill.level)
                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {skillLevel.label}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{skill.experience}</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
