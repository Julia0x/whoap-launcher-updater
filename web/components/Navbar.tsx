'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/download', label: 'Download' },
    { href: '/docs', label: 'Docs' },
    { href: '/support', label: 'Support' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-primary border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-secondary border border-border rounded flex items-center justify-center text-sm font-bold">
              L
            </div>
            <span>Launcher</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text text-sm font-medium transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:flex">
            <Link
              href="/download"
              className="px-4 py-2 bg-text text-primary rounded font-semibold text-sm hover:bg-opacity-90 transition"
            >
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-text-secondary hover:text-text text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="block mt-4 px-4 py-2 bg-text text-primary rounded font-semibold text-sm hover:bg-opacity-90 text-center transition"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
