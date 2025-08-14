"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description:
        "Comprehensive network scanning and analysis using Nmap and Wireshark to identify potential security vulnerabilities and network topology.",
      tech: ["Nmap", "Wireshark", "Network Analysis"],
      demoLink: "#",
      color: "green",
      image: "/web-security-dashboard-cyberpunk.png",
    },
    {
      title: "Linux Firewall Configuration",
      description:
        "Automated IPTables firewall setup using Bash scripting for enhanced system security and network traffic control.",
      tech: ["Bash", "IPTables", "Linux", "Network Security"],
      githubLink: "#",
      color: "blue",
      image: "/cybersecurity-network.png",
    },
    {
      title: "Encrypted Messaging App",
      description:
        "Python-based secure messaging application with end-to-end encryption and advanced security features for private communications.",
      tech: ["Python", "Cryptography", "Security"],
      githubLink: "#",
      color: "red",
      image: "/encrypted-messaging-app-dark-green.png",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-400/30 hover:border-green-400/50 hover:shadow-green-400/20",
      blue: "border-blue-400/30 hover:border-blue-400/50 hover:shadow-blue-400/20",
      red: "border-red-400/30 hover:border-red-400/50 hover:shadow-red-400/20",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  const getAccentColor = (color: string) => {
    const colors = {
      green: "text-green-400",
      blue: "text-blue-400",
      red: "text-red-400",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  const getButtonColor = (color: string) => {
    const colors = {
      green: "bg-green-400/10 border-green-400 text-green-400 hover:bg-green-400/20 hover:shadow-green-400/30",
      blue: "bg-blue-400/10 border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:shadow-blue-400/30",
      red: "bg-red-400/10 border-red-400 text-red-400 hover:bg-red-400/20 hover:shadow-red-400/30",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="matrix-bg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glitch-text neon-glow" data-text="> Projects">
            {">"} Projects
          </h2>
          <div className="w-20 h-1 bg-green-400 neon-border"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`project-card bg-gray-900/50 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg translate-y-8 scan-lines ${getColorClasses(project.color)}`}
              style={{
                animation: "none",
              }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <CardHeader>
                <div className={`text-sm mb-2 font-mono ${getAccentColor(project.color)}`}>
                  {">"} project_{index + 1}.sh
                </div>
                <CardTitle className="text-white text-xl neon-glow">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded border font-mono transition-all duration-200 hover:scale-105 ${getColorClasses(project.color)} ${getAccentColor(project.color)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {project.demoLink && (
                    <Button
                      size="sm"
                      className={`transition-all duration-300 transform hover:scale-105 ${getButtonColor(project.color)}`}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className={`transition-all duration-300 transform hover:scale-105 ${getButtonColor(project.color)}`}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
