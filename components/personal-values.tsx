import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Lightbulb, Target } from "lucide-react"

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "I believe in writing maintainable, readable code that stands the test of time and makes collaboration seamless.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great software is built by great teams. I value open communication and knowledge sharing with colleagues.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and I'm committed to staying current with new tools, frameworks, and best practices.",
  },
  {
    icon: Target,
    title: "User-Focused",
    description:
      "Every line of code I write is with the end user in mind, ensuring solutions that truly solve real problems.",
  },
]

export function PersonalValues() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Values</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide my approach to software development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
