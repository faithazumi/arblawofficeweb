import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import type React from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title:  "ARB | Law Office",
  description: "Firma hukum terpercaya yang mengutamakan integritas dan profesionalisme",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-zinc-900`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

