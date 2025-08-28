"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Clock, Linkedin, Github, Twitter, Copy } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Here's how you can reach me directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">felix@example.com</p>
                  <p className="text-sm text-muted-foreground">Email me anytime</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard("felix@example.com")}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">+254 700 000 000</p>
                  <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard("+254 700 000 000")}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Nairobi, Kenya</p>
                  <p className="text-sm text-muted-foreground">East Africa Time (EAT)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Connect with me on social platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="https://linkedin.com/in/felixorina" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn - Professional Network
                </Link>
              </Button>

              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="https://github.com/felixorina" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub - Code Repository
                </Link>
              </Button>

              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="https://twitter.com/felixorina" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter - Tech Updates
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Freelance Projects</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Full-time Opportunities</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Open to Discuss
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Consulting</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Available
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
