import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Download', href: '/download' },
        { label: 'Changelog', href: '/docs' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'License', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-tertiary border border-border rounded flex items-center justify-center text-sm font-bold">
                L
              </div>
              <span className="font-bold">Launcher</span>
            </div>
            <p className="text-text-secondary text-sm">Modern Minecraft instance manager</p>
          </div>

          {/* Links */}
          {sections.map(section => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text text-sm transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Launcher. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-text-secondary hover:text-text transition" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-text transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-text transition" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
