import { Button } from "@/components/ui/button"
import { Download, Eye, FileText } from "lucide-react"

export function ResumeHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-muted/50 text-muted-foreground mb-6">
              <FileText className="mr-2 h-4 w-4" />
              Professional Resume
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">My Resume</h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl text-pretty">
              A comprehensive overview of my professional experience, technical skills, education, and achievements in
              software engineering.
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            {/* ✅ Download PDF Button */}
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Download PDF
              </Button>
            </a>

            {/* ✅ View Online Button */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group bg-transparent">
                <Eye className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                View Online
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
