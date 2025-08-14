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
      <head>
        {/* Favicon uchun */}
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="https://avatars.githubusercontent.com/u/203057243?v=4"
        />
      </head>
      <body className="font-mono">
        {/* Dumaloq shakldagi profil rasmi */}
        <img
          src="https://avatars.githubusercontent.com/u/203057243?v=4"
          alt="Sharifjonov Xamidullo"
          width={64}
          height={64}
          style={{ borderRadius: "50%", display: "block", margin: "1rem auto" }}
        />
        {children}
      </body>
    </html>
  )
}
