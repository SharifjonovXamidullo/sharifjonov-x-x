import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sharifjonov Xamidullo - Cybersecurity Student",
  description:
    "Professional portfolio of Sharifjonov Xamidullo, cybersecurity student specializing in ethical hacking, network security, and system protection.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}>
<header>   
<body className="font-mono">{children}</body>
    </html>
  )
}
