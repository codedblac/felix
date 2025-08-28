import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact - Felix Orina",
  description:
    "Get in touch with Felix Orina for collaboration opportunities, project inquiries, or technical discussions. Based in Nairobi, Kenya.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </div>
  )
}
