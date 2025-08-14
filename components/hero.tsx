"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Cybersecurity Student & Ethical Hacker"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-red-500/5 animate-pulse"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className=" rounded-full border-2 border-green-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                <Image
                  src="https://avatars.githubusercontent.com/u/203057243?s=400&u=884645bef9040ce82e55c860ef254eaa16108ad7&v=4"
                  alt="Sharifjonov Xamidullo"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 border-blue-400/50 animate-ping border-2 rounded-full"></div>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-green-400 text-lg mb-2 hover:text-blue-400 transition-colors duration-300">
            {">"} whoami
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 hover:text-green-400 transition-colors duration-500">
            Sharifjonov Xamidullo
          </h1>
          <div className="text-xl md:text-2xl text-green-400 h-8 font-mono">
            {displayText}
            <span className="animate-pulse text-red-400">|</span>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
          <div className="text-green-400 mb-2 hover:text-blue-400 transition-colors duration-300">
            {">"} cat introduction.txt
          </div>
          <p className="text-gray-300 leading-relaxed">
            Passionate about defending digital frontiers and understanding the mind of attackers. Currently mastering
            the art of ethical hacking and system protection to build a safer digital world.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            className="bg-green-400 text-black hover:bg-green-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
          >
            {">"} Contact Me
          </Button>
          <Button
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent transform hover:scale-105"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {">"} View Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
