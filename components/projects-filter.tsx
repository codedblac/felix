"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web Apps", "E-commerce", "Management Systems", "APIs", "Open Source"]

export function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-12 bg-background border-b">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
