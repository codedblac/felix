import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ResumeHero } from "@/components/resume-hero"
import { ResumeViewer } from "@/components/resume-viewer"
import { ResumeDownload } from "@/components/resume-download"

export const metadata = {
  title: "Resume - Felix Orina",
  description:
    "Download Felix Orina's resume showcasing 4+ years of Full-Stack Software Engineering experience, technical skills, and professional achievements.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <ResumeHero />
        <ResumeDownload />
        <ResumeViewer />
      </main>
      <Footer />
    </div>
  )
}
