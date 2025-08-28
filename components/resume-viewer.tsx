"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Mail, Phone, Linkedin, Github, Calendar, Building2 } from "lucide-react"

export function ResumeViewer() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardHeader className="text-center bg-background">
            <CardTitle className="text-3xl font-bold">Felix Orina</CardTitle>
            <p className="text-xl text-muted-foreground">Full-Stack Software Engineer</p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                felixorina19@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +254 714213413
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/felix-orina-shawn
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                github.com/codedblac
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            {/* Professional Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experienced Full-Stack Software Engineer with 4+ years of expertise in building scalable web
                applications using modern JavaScript frameworks and Python-based backend technologies. Proven track
                record of leading development teams, optimizing application performance, and delivering high-quality
                solutions for diverse clients. Passionate about clean code, user experience, and continuous learning.
              </p>
            </div>

            <Separator />

            {/* Work Experience */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">Full-Stack Software Engineer</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        Technopick Reliable Solutions Ltd
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2022 - Present
                      </div>
                      <div>Nairobi, Kenya</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Led development of enterprise web applications using React, Next.js, and Django</li>
                    <li>Reduced application load time by 40% through performance optimization techniques</li>
                    <li>Mentored a team of 3 junior developers and conducted code reviews</li>
                    <li>Implemented CI/CD pipelines improving deployment efficiency by 60%</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">Frontend Developer</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        Digital Solutions Kenya
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2021 - 2022
                      </div>
                      <div>Nairobi, Kenya</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Developed responsive web applications using Vue.js and modern CSS frameworks</li>
                    <li>Improved user engagement by 35% through UX enhancements and optimization</li>
                    <li>Collaborated with cross-functional teams of 8+ members on client projects</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">Junior Web Developer</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        StartupHub Nairobi
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2020 - 2021
                      </div>
                      <div>Nairobi, Kenya</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Built 20+ responsive websites using HTML, CSS, JavaScript, and PHP</li>
                    <li>Learned agile development methodologies and version control with Git</li>
                    <li>Contributed to open-source projects and community initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Technical Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium text-sm mb-2">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Backend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Django", "Python", "Node.js", "REST APIs", "GraphQL", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Tools & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "AWS", "CI/CD", "Testing", "Agile"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MySQL", "MongoDB", "Redis"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University of Nairobi</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>2016 - 2020</div>
                    <div>Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Certifications</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AWS Certified Developer - Associate</span>
                  <span className="text-xs text-muted-foreground">2023</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">React Developer Certification - Meta</span>
                  <span className="text-xs text-muted-foreground">2022</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Python for Data Science - IBM</span>
                  <span className="text-xs text-muted-foreground">2021</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
