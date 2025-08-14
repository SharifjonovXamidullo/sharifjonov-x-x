"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isNotRobot, setIsNotRobot] = useState<boolean>(false)

  const allFieldsFilled =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== ""

  const isValidPhone = /^[+]?[0-9\s\-$$$$]{10,}$/.test(formData.phone)

  const isFormValid = allFieldsFilled && isValidPhone && isNotRobot

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      const smsBody = `Name: ${formData.name}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`
      const smsUrl = `sms:+998940666677?body=${smsBody}`
      window.location.href = smsUrl
    } else {
      // For desktop, you could implement email sending or show a message
      alert("Message prepared! On mobile devices, this would open your SMS app.")
    }

    // Reset form
    setFormData({ name: "", phone: "", subject: "", message: "" })
    setIsNotRobot(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const additionalInfo = [
    {
      label: "Availability",
      value: "Mon–Fri, 10:00 – 18:00",
      icon: <Clock className="w-6 h-6" />,
      color: "purple",
      hasButton: false,
    },
    {
      label: "Location",
      value: "Uzbekistan, Namangan, Uchkurghan",
      icon: <MapPin className="w-6 h-6" />,
      color: "blue",
      hasButton: true,
      buttonText: "Get",
      link: "https://yandex.com/maps/?ll=72.075888%2C41.107069&z=16",
    },
    {
      label: "Phone",
      value: "+998 94 066 66 77",
      icon: <Phone className="w-6 h-6" />,
      color: "green",
      hasButton: true,
      buttonText: "Call",
      link: "tel:+998940666677",
    },
  ]

  const socialMediaIcons = [
    {
      name: "Telegram",
      link: "https://t.me/Sharifjonov_Xamidullo",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-400/50",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/sharifjonov.x.x",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "from-pink-400 to-purple-600",
      hoverColor: "hover:shadow-pink-400/50",
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/998940666677",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
      hoverColor: "hover:shadow-green-400/50",
    },
    {
      name: "Facebook",
      link: "https://facebook.com/sharifjonov.x.x",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-400 border-blue-400/30 bg-blue-400/5 hover:bg-blue-400/10 hover:shadow-blue-400/20",
      green: "text-green-400 border-green-400/30 bg-green-400/5 hover:bg-green-400/10 hover:shadow-green-400/20",
      purple: "text-purple-400 border-purple-400/30 bg-purple-400/5 hover:bg-purple-400/10 hover:shadow-purple-400/20",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">{">"} Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects? Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">{">"} Additional Info</h3>
              <div className="grid gap-4">
                {additionalInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`bg-gray-900/80 backdrop-blur-sm border-2 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${getColorClasses(info.color)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${getColorClasses(info.color)}`}>{info.icon}</div>
                        <div>
                          <div className={`text-sm font-semibold mb-1 ${getColorClasses(info.color).split(" ")[0]}`}>
                            {info.label}
                          </div>
                          <div className="text-white font-mono text-lg">{info.value}</div>
                        </div>
                      </div>
                      {info.hasButton && (
                        <Button
                          size="sm"
                          variant="outline"
                          className={`${getColorClasses(info.color)} hover:bg-opacity-10 transition-all duration-300`}
                          onClick={() => window.open(info.link, "_blank")}
                        >
                          {info.buttonText}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-gray-900/80 backdrop-blur-sm border-green-400/30 shadow-2xl rounded-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-400/10 to-blue-400/10">
                <CardTitle className="text-green-400 font-mono text-xl">{">"} send_message.py</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 rounded-lg h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 rounded-lg h-12 ${
                          formData.phone && !isValidPhone ? "border-red-400 focus:border-red-400" : ""
                        }`}
                        required
                      />
                      {formData.phone && !isValidPhone && (
                        <p className="text-red-400 text-sm mt-1">Please enter a valid phone number</p>
                      )}
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 rounded-lg h-12"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400/20 resize-none rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="not-robot"
                      checked={isNotRobot}
                      onCheckedChange={(checked) => setIsNotRobot(checked as boolean)}
                      disabled={!allFieldsFilled || !isValidPhone}
                      className={`border-green-400 data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400 ${
                        !allFieldsFilled || !isValidPhone ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    />
                    <label
                      htmlFor="not-robot"
                      className={`cursor-pointer ${
                        !allFieldsFilled || !isValidPhone ? "text-gray-500 cursor-not-allowed" : "text-gray-300"
                      }`}
                    >
                      I'm not a robot 🤖
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-black hover:from-green-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 h-12 text-lg font-semibold rounded-lg"
                  >
                    {">"} Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{">"} Connect With Me</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
              </div>

              <div className="flex justify-center items-center space-x-6">
                {socialMediaIcons.map((social, index) => (
                  <div key={index} className="group relative">
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center w-14 h-14 rounded-full 
                        bg-gradient-to-br ${social.color} 
                        text-white shadow-lg transform transition-all duration-300 
                        hover:scale-110 ${social.hoverColor} hover:shadow-xl
                        border-2 border-transparent hover:border-white/20
                        backdrop-blur-sm
                      `}
                    >
                      {social.icon}
                    </a>

                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg border border-gray-700 shadow-lg">
                        {social.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm font-mono">
                  {">"} Follow me for cybersecurity insights and updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
