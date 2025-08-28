import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Felix Orina - Full-Stack Software Engineer",
  description:
    "Portfolio of Felix Orina, a Full-Stack Software Engineer based in Nairobi with 4+ years of experience in React, Next.js, Django, and modern web technologies.",
  keywords: ["Felix Orina", "Full-Stack Developer", "Software Engineer", "React", "Next.js", "Django", "Nairobi"],
  authors: [{ name: "Felix Orina" }],
  creator: "Felix Orina",
  openGraph: {
    title: "Felix Orina - Full-Stack Software Engineer",
    description:
      "Portfolio of Felix Orina, a Full-Stack Software Engineer based in Nairobi with 4+ years of experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Orina - Full-Stack Software Engineer",
    description:
      "Portfolio of Felix Orina, a Full-Stack Software Engineer based in Nairobi with 4+ years of experience.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
