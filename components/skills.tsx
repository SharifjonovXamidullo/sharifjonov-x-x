"use client"

import { useEffect, useRef } from "react"

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-in")
              }, index * 100)
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

  const skillCategories = [
    {
      title: "Core Security",
      color: "green",
      skills: ["Cybersecurity Fundamentals", "Network Security", "OWASP Top 10"],
    },
    {
      title: "Operating Systems",
      color: "blue",
      skills: ["Linux Administration", "System Hardening", "Command Line"],
    },
    {
      title: "Programming",
      color: "red",
      skills: ["Python Scripting", "Bash Automation", "Security Tools Development"],
    },
    {
      title: "Security Tools",
      color: "yellow",
      skills: ["Wireshark", "Nmap", "Metasploit"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-400/30 text-green-400 hover:border-green-400/70 hover:shadow-green-400/20",
      blue: "border-blue-400/30 text-blue-400 hover:border-blue-400/70 hover:shadow-blue-400/20",
      red: "border-red-400/30 text-red-400 hover:border-red-400/70 hover:shadow-red-400/20",
      yellow: "border-yellow-400/30 text-yellow-400 hover:border-yellow-400/70 hover:shadow-yellow-400/20",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-gray-950/50 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 glitch-text neon-glow"
            data-text="> Skills & Expertise"
          >
            {">"} Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-green-400 neon-border"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`skill-card bg-gray-900/50 border rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-8 hover:shadow-lg scan-lines ${getColorClasses(category.color)}`}
              style={{
                animation: "none",
              }}
            >
              <div className="mb-4">
                <div className={`mb-2 ${getColorClasses(category.color)} font-mono text-sm`}>
                  {">"} {category.title.toLowerCase().replace(" ", "_")}.txt
                </div>
                <h3 className="text-xl font-bold text-white neon-glow">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2 group">
                    <span className={`${getColorClasses(category.color).split(" ")[1]} group-hover:animate-pulse`}>
                      •
                    </span>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
