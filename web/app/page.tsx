import Link from 'next/link'
import { Download, Zap, Shield, Gamepad2, BookOpen, HeartHandshake } from 'lucide-react'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for quick instance management and mod loading',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Safe and verified mod sources with built-in protection',
    },
    {
      icon: Gamepad2,
      title: 'Easy to Use',
      description: 'Intuitive interface designed for both beginners and experts',
    },
    {
      icon: BookOpen,
      title: 'Well Documented',
      description: 'Comprehensive guides and documentation for all features',
    },
    {
      icon: HeartHandshake,
      title: 'Community Driven',
      description: 'Built with feedback from thousands of Minecraft players',
    },
    {
      icon: Download,
      title: 'One-Click Install',
      description: 'Download and play your favorite mods in seconds',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-12 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Modern Minecraft Launcher
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Manage your Minecraft instances, discover mods, and join your favorite modded servers with ease
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="px-8 py-3 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Now
            </Link>
            <Link
              href="/features"
              className="px-8 py-3 bg-secondary border border-border rounded font-semibold hover:bg-tertiary transition inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>

          {/* System Requirements */}
          <div className="mt-12 p-6 bg-secondary border border-border rounded-lg max-w-xl mx-auto">
            <p className="text-sm text-text-secondary mb-3">System Requirements</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">•</span>
                <span>Windows 7+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">•</span>
                <span>macOS 10.12+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">•</span>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Launcher?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Everything you need to manage your Minecraft experience in one powerful application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-secondary border border-border rounded-lg hover:border-opacity-50 hover:bg-tertiary transition"
                >
                  <Icon size={32} className="mb-4 text-text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8 text-lg">
            Join thousands of players using Launcher to manage their Minecraft instances
          </p>
          <Link
            href="/download"
            className="inline-block px-8 py-3 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition"
          >
            Download Launcher
          </Link>
        </div>
      </section>
    </>
  )
}
