import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2, Calendar, Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="h-64 w-64 border-4 border-primary/20 mb-6">
                    <AvatarImage src="/felix-dp.png" alt="Felix Orina" />
                    <AvatarFallback className="text-6xl font-bold bg-primary/10 text-primary">FO</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Nairobi, Kenya
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      Technopick Reliable Solutions
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      4+ Years Experience
                    </Badge>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="mailto:felixorina19@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.linkedin.com/in/felix-orina-shawn" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/codedblac" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">About Felix Orina</h1>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm Felix Orina, a passionate Full-Stack Software Engineer based in Nairobi, Kenya, with over 4
                      years of experience building scalable web applications and digital solutions. Currently working at
                      Technopick Reliable Solutions Ltd, I specialize in modern JavaScript frameworks and Python-based
                      backend development.
                    </p>

                    <p>
                      My journey in software development began with a curiosity about how digital products work and
                      evolved into a deep passion for creating solutions that make a real impact. I thrive on the
                      challenge of turning complex problems into elegant, user-friendly applications.
                    </p>

                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                      projects, or mentoring aspiring developers in the Nairobi tech community. I believe in the power
                      of technology to transform lives and am committed to building inclusive, accessible digital
                      experiences.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/contact">Let's Work Together</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
