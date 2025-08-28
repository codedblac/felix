"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = () => {
    setMobileMenuOpen(false)
    // Smooth scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex items-center gap-3"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                <AvatarImage
                  src="/felix-dp.png"
                  alt="Felix Orina"
                  className="object-cover"
                />
                <AvatarFallback className="text-sm font-bold bg-primary/10 text-primary">FO</AvatarFallback>
              </Avatar>
              <span className="text-lg sm:text-xl font-bold text-black">Felix Orina</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-black hover:text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors px-3 py-2 rounded-md",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-black hover:text-primary hover:bg-gray-50",
                )}
                // Added scroll-to-top on desktop nav click
                onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link
                href="/contact"
                onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)}
              >
                Get In Touch
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMobileMenuOpen(false)} />

          {/* Mobile menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-bold text-black"
                  onClick={handleNavClick}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/professional-headshot-of-felix-orina.png"
                      alt="Felix Orina"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-sm font-bold bg-primary/10 text-primary">FO</AvatarFallback>
                  </Avatar>
                  Felix Orina
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-black hover:text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>

              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        pathname === item.href
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-black hover:text-primary hover:bg-gray-50",
                      )}
                      // Updated mobile nav click to use handleNavClick function
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Footer actions */}
              <div className="border-t border-gray-200 px-4 py-6">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact" onClick={handleNavClick}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
