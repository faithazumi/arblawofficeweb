"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-serif text-white">
            <Image src="/logo.svg" alt="Logo" width={64} height={64} priority />
            <span>ARB Law Office</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-zinc-300 hover:text-white transition">
              Home
            </Link>
            <Link href="#about" className="text-zinc-300 hover:text-white transition">
              Tentang Kami
            </Link>
            <Link href="/services" className="text-zinc-300 hover:text-white transition">
              Lingkup Jasa
            </Link>
            <Link href="/team" className="text-zinc-300 hover:text-white transition">
              Tim Kami
            </Link>
            <Link href="#contact" className="text-zinc-300 hover:text-white transition">
              Kontak
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-zinc-300 hover:text-white transition">
                Home
              </Link>
              <Link href="#about" className="text-zinc-300 hover:text-white transition">
                Tentang Kami
              </Link>
              <Link href="/prArea" className="text-zinc-300 hover:text-white transition">
                Lingkup Jasa
              </Link>
              <Link href="/team" className="text-zinc-300 hover:text-white transition">
                Tim Kami
              </Link>
              <Link href="#contact" className="text-zinc-300 hover:text-white transition">
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

