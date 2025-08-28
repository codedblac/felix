import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Building2, ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">About Me</h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            Passionate about building impactful solutions with modern technologies
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="flex justify-center md:justify-start">
                  <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 border-4 border-primary/20">
                    <AvatarImage
                      src="/professional-headshot-of-felix-orina.png"
                      alt="Felix Orina"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-lg sm:text-2xl lg:text-4xl font-bold bg-primary/10 text-primary">
                      FO
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="text-center md:text-left space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">Nairobi, Kenya</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Building2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="text-center sm:text-left break-words">Technopick Reliable Solutions Ltd</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty max-w-none">
                    I'm Felix Orina, a Nairobi-based Full-Stack Software Engineer with 4+ years of experience building
                    scalable applications. Currently at Technopick Reliable Solutions Ltd, I specialize in modern
                    JavaScript frameworks and Django to deliver impactful solutions.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2">
                    <Button asChild className="w-full sm:w-auto min-w-0">
                      <Link href="/about" className="flex items-center justify-center">
                        <span className="truncate">Learn More About Me</span>
                        <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                      </Link>
                    </Button>

                    <Button variant="outline" asChild className="w-full sm:w-auto min-w-0 bg-transparent">
                      <Link
                        href="https://linkedin.com/in/felixorina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <span className="truncate">Connect on LinkedIn</span>
                      </Link>
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
