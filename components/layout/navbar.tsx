"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ArrowUpRight, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="backdrop-blur-xl border rounded-full px-6 py-4 flex items-center justify-between gap-12 shadow-2xl transition-all duration-300 bg-black/70 border-white/10 shadow-black/50 hover:border-white/20">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2 text-white transition-colors"
        >
          Kluzel Art
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-primary ${pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
                ? "text-primary"
                : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:flex items-center justify-center w-8 h-8 rounded-full transition-transform hover:scale-110 bg-primary text-white hover:bg-primary/80"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Mobile Menu Button - simplified for now */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu (basic implementation) */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-6 items-center text-sm font-medium uppercase tracking-widest text-neutral-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-primary ${pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
                  ? "text-primary"
                  : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
