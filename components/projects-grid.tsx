import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "School ERP System",
    description:
      "Comprehensive school management system with student enrollment, grade tracking, attendance management, and administrative tools. Features role-based access control and real-time reporting.",
    longDescription:
      "A full-featured Enterprise Resource Planning system designed specifically for educational institutions. The system handles student lifecycle management from admission to graduation, including academic records, fee management, and communication tools for parents and teachers.",
    image: "/school-management-dashboard-interface.png",
    technologies: ["Django", "React", "PostgreSQL", "REST API", "Redis", "Celery"],
    category: "Management Systems",
    liveUrl: "https://school-erp-demo.vercel.app",
    githubUrl: "https://github.com/felixorina/school-erp",
    status: "Completed",
    year: "2023",
    teamSize: "3 developers",
    features: [
      "Student Information Management",
      "Grade & Attendance Tracking",
      "Fee Management System",
      "Parent-Teacher Communication",
      "Report Generation",
      "Role-based Access Control",
    ],
  },
  {
    title: "E-commerce Platform",
    description:
      "Modern e-commerce application with payment integration, inventory management, order tracking, and responsive design. Built with Next.js and Stripe for seamless shopping experience.",
    longDescription:
      "A complete e-commerce solution featuring product catalog management, shopping cart functionality, secure payment processing, and order management. Includes admin dashboard for inventory and sales analytics.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Vercel", "Prisma", "PostgreSQL"],
    category: "E-commerce",
    liveUrl: "https://ecommerce-felix.vercel.app",
    githubUrl: "https://github.com/felixorina/ecommerce-platform",
    status: "Completed",
    year: "2023",
    teamSize: "Solo project",
    features: [
      "Product Catalog Management",
      "Shopping Cart & Checkout",
      "Stripe Payment Integration",
      "Order Tracking System",
      "Admin Dashboard",
      "Responsive Design",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio website showcasing projects and skills with dark/light mode support, smooth animations, and SEO optimization. Built with Next.js and Tailwind CSS.",
    longDescription:
      "A modern, fully responsive portfolio website designed to showcase professional work and technical skills. Features smooth animations, theme switching, and optimized performance.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    category: "Web Apps",
    liveUrl: "https://felixorina.dev",
    githubUrl: "https://github.com/felixorina/portfolio",
    status: "Completed",
    year: "2024",
    teamSize: "Solo project",
    features: [
      "Responsive Design",
      "Dark/Light Mode Toggle",
      "Smooth Animations",
      "SEO Optimized",
      "Contact Form",
      "Project Showcase",
    ],
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with user authentication, project organization, and real-time notifications. Built with Django REST Framework and WebSocket support.",
    longDescription:
      "A robust backend API service for task and project management applications. Features comprehensive user management, project collaboration tools, and real-time updates using WebSockets.",
    image: "/api-documentation-interface.png",
    technologies: ["Django", "DRF", "PostgreSQL", "Redis", "WebSockets", "JWT"],
    category: "APIs",
    liveUrl: "https://api.taskmanager-felix.com",
    githubUrl: "https://github.com/felixorina/task-api",
    status: "Completed",
    year: "2023",
    teamSize: "Solo project",
    features: [
      "User Authentication & Authorization",
      "Project & Task Management",
      "Real-time Notifications",
      "API Documentation",
      "Rate Limiting",
      "Comprehensive Testing",
    ],
  },
  {
    title: "React Component Library",
    description:
      "Open-source React component library with TypeScript support, Storybook documentation, and comprehensive testing. Published on npm with 500+ weekly downloads.",
    longDescription:
      "A collection of reusable React components designed for modern web applications. Features TypeScript support, comprehensive documentation, and follows accessibility best practices.",
    image: "/react-component-library-showcase.png",
    technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup", "npm"],
    category: "Open Source",
    liveUrl: "https://felix-ui-components.netlify.app",
    githubUrl: "https://github.com/felixorina/react-ui-lib",
    status: "Active",
    year: "2024",
    teamSize: "Solo project",
    features: [
      "TypeScript Support",
      "Storybook Documentation",
      "Accessibility Compliant",
      "Tree Shaking Support",
      "Comprehensive Testing",
      "npm Package",
    ],
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with advanced search filters, virtual tours, and agent management. Features map integration and mobile-responsive design.",
    longDescription:
      "A comprehensive real estate platform connecting buyers, sellers, and agents. Includes property search with advanced filters, virtual tour integration, and agent dashboard for listing management.",
    image: "/real-estate-platform.png",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "Mapbox", "Cloudinary"],
    category: "Web Apps",
    liveUrl: "https://realestate-felix.com",
    githubUrl: "https://github.com/felixorina/realestate-platform",
    status: "In Progress",
    year: "2024",
    teamSize: "2 developers",
    features: [
      "Property Search & Filters",
      "Virtual Tour Integration",
      "Agent Dashboard",
      "Map Integration",
      "Image Gallery",
      "Contact Management",
    ],
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>

                <CardDescription className="text-pretty line-clamp-3">{project.description}</CardDescription>

                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  <Users className="h-3 w-3" />
                  {project.teamSize}
                  <span>•</span>
                  <span className={project.status === "Completed" ? "text-green-600" : "text-blue-600"}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-0">
                <Button size="sm" asChild className="flex-1">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>

                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Interested in collaborating on a project?</p>
          <Button size="lg" asChild>
            <Link href="/contact">Let's Work Together</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
