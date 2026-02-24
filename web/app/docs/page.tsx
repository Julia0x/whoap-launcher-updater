'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function DocsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('getting-started')

  const docSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: [
        {
          heading: 'Installation',
          text: 'Download the Launcher installer from our website, run it, and follow the on-screen instructions. The launcher will automatically detect your Java installation.',
        },
        {
          heading: 'First Launch',
          text: 'When you launch the application for the first time, you\'ll be prompted to log in with your Minecraft account. You can choose between online and offline modes.',
        },
      ],
    },
    {
      id: 'instances',
      title: 'Managing Instances',
      content: [
        {
          heading: 'Creating an Instance',
          text: 'Click the "Create Instance" button, choose a Minecraft version, and customize your settings. You can select a modloader like Fabric or Forge if needed.',
        },
        {
          heading: 'Installing Mods',
          text: 'Browse the integrated mod browser, select your desired mods, and they\'ll be automatically installed to your instance with dependency management.',
        },
        {
          heading: 'Instance Settings',
          text: 'Access advanced settings to configure JVM arguments, RAM allocation, game window size, and other performance options.',
        },
      ],
    },
    {
      id: 'mods',
      title: 'Mod Management',
      content: [
        {
          heading: 'Finding Mods',
          text: 'Use the mod browser to search across multiple platforms like Modrinth and CurseForge. Filter by categories, downloads, and popularity.',
        },
        {
          heading: 'Version Compatibility',
          text: 'The launcher automatically checks mod compatibility with your Minecraft and Java versions, preventing installation conflicts.',
        },
        {
          heading: 'Updating Mods',
          text: 'Check for updates on the instance mods page. One-click updating keeps your mods up-to-date with the latest features and fixes.',
        },
      ],
    },
    {
      id: 'accounts',
      title: 'Account Management',
      content: [
        {
          heading: 'Multiple Accounts',
          text: 'Add multiple Minecraft accounts and switch between them instantly. The launcher securely stores your login information.',
        },
        {
          heading: 'Offline Mode',
          text: 'Play in offline mode if you don\'t have internet access. Your account name and previous session data will be used.',
        },
      ],
    },
    {
      id: 'settings',
      title: 'Advanced Settings',
      content: [
        {
          heading: 'JVM Arguments',
          text: 'Customize Java Virtual Machine arguments for performance tuning. Common optimizations are documented in the settings help.',
        },
        {
          heading: 'Game Options',
          text: 'Configure rendering distance, graphics quality, audio settings, and more directly from the launcher.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      content: [
        {
          heading: 'Game Won\'t Launch',
          text: 'Check that Java is properly installed and your system meets the minimum requirements. Try allocating more RAM or checking the logs.',
        },
        {
          heading: 'Mod Conflicts',
          text: 'The launcher will warn you about incompatible mods. Try removing recently installed mods or checking compatibility reports.',
        },
        {
          heading: 'Performance Issues',
          text: 'Reduce render distance, lower graphics settings, and allocate more RAM. Disable unused mods to improve performance.',
        },
      ],
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Documentation</h1>
          <p className="text-text-secondary text-lg">
            Everything you need to know about using Launcher
          </p>
        </div>
      </section>

      {/* Docs Content */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {docSections.map(section => (
              <div
                key={section.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === section.id ? null : section.id)
                  }
                  className="w-full flex items-center justify-between p-6 bg-secondary hover:bg-tertiary transition"
                >
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <ChevronDown
                    size={24}
                    className={`transition ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedSection === section.id && (
                  <div className="bg-primary border-t border-border p-6 space-y-6">
                    {section.content.map((item, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
                        <p className="text-text-secondary">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Need More Help?</h3>
              <p className="text-text-secondary mb-4">
                Join our community Discord server to ask questions and get help from other users and developers.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition"
              >
                Join Discord
              </a>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Report an Issue</h3>
              <p className="text-text-secondary mb-4">
                Found a bug or have a feature request? Open an issue on our GitHub repository.
              </p>
              <a
                href="#"
                className="inline-block px-4 py-2 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition"
              >
                GitHub Issues
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
