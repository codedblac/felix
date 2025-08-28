import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, MapPin } from "lucide-react"

export function ResumeDownload() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Felix Orina</CardTitle>
                <CardDescription className="text-lg mt-1">Full-Stack Software Engineer</CardDescription>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Nairobi, Kenya
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Updated January 2025
                  </div>
                </div>
              </div>
              <Button size="lg" className="shrink-0">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Professional Summary & Objective
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    4+ Years Work Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Technical Skills & Proficiencies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Education & Certifications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Key Projects & Achievements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Contact Information
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  <Badge variant="secondary" className="block w-fit">
                    4+ Years Full-Stack Development
                  </Badge>
                  <Badge variant="secondary" className="block w-fit">
                    React, Next.js, Django Expert
                  </Badge>
                  <Badge variant="secondary" className="block w-fit">
                    Team Leadership Experience
                  </Badge>
                  <Badge variant="secondary" className="block w-fit">
                    AWS Certified Developer
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
