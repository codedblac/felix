"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillsOverview = [
  { category: "Frontend", percentage: 92, color: "bg-primary" },
  { category: "Backend", percentage: 85, color: "bg-chart-2" },
  { category: "Database", percentage: 82, color: "bg-chart-3" },
  { category: "DevOps", percentage: 75, color: "bg-chart-4" },
]

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
    status: "Active",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    year: "2022",
    status: "Active",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2021",
    status: "Active",
  },
]

export function SkillsChart() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Skills Overview</CardTitle>
              <CardDescription>My proficiency across different areas of software development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillsOverview.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.category}</span>
                      <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
              <CardDescription>Professional certifications and continuous learning achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
