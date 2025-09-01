import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Brian & Jessa Wedding",
  description: "October 25, 2025 - Wedding Celebration",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Crimson+Text:wght@400;600&family=Alice&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Bodoni+Moda:wght@600;700&family=Great+Vibes&family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
