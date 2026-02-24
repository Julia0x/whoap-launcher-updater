'use client'

import { Download, Github, FileText } from 'lucide-react'
import { useState } from 'react'

export default function DownloadPage() {
  const [selectedVersion, setSelectedVersion] = useState('latest')

  const downloads = [
    {
      platform: 'Windows',
      icon: '🪟',
      versions: [
        { version: 'v1.0.0', date: '2024-01-15', size: '85 MB', url: '#' },
        { version: 'v0.9.5', date: '2024-01-10', size: '82 MB', url: '#' },
        { version: 'v0.9.0', date: '2024-01-05', size: '80 MB', url: '#' },
      ],
    },
    {
      platform: 'macOS',
      icon: '🍎',
      versions: [
        { version: 'v1.0.0', date: '2024-01-15', size: '90 MB', url: '#' },
        { version: 'v0.9.5', date: '2024-01-10', size: '87 MB', url: '#' },
        { version: 'v0.9.0', date: '2024-01-05', size: '85 MB', url: '#' },
      ],
    },
    {
      platform: 'Linux',
      icon: '🐧',
      versions: [
        { version: 'v1.0.0', date: '2024-01-15', size: '88 MB', url: '#' },
        { version: 'v0.9.5', date: '2024-01-10', size: '85 MB', url: '#' },
        { version: 'v0.9.0', date: '2024-01-05', size: '83 MB', url: '#' },
      ],
    },
  ]

  const handleDownload = (url: string, filename: string) => {
    console.log(`[v0] Downloading: ${filename}`)
    // In production, this would trigger the actual download
    alert(`Download started: ${filename}`)
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Download Launcher</h1>
          <p className="text-text-secondary text-lg mb-8">
            Choose your operating system and get started in minutes
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {downloads.map((download) => (
              <div
                key={download.platform}
                className="bg-secondary border border-border rounded-lg p-8 hover:border-opacity-50 hover:bg-tertiary transition"
              >
                <div className="text-5xl mb-4">{download.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{download.platform}</h3>

                <div className="space-y-3">
                  {download.versions.map((version, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded border transition ${
                        index === 0
                          ? 'bg-tertiary border-border'
                          : 'bg-primary border-border hover:border-opacity-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">{version.version}</p>
                          <p className="text-sm text-text-secondary">{version.date}</p>
                        </div>
                        <span className="text-sm text-text-secondary">{version.size}</span>
                      </div>
                      {index === 0 && (
                        <span className="inline-block text-xs bg-tertiary px-2 py-1 rounded mb-3">
                          Latest
                        </span>
                      )}
                      <button
                        onClick={() => handleDownload(version.url, `${download.platform}-${version.version}`)}
                        className="w-full py-2 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2 text-sm"
                      >
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Installation Guide */}
          <div className="bg-secondary border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Installation Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-text-secondary mb-3">1</div>
                <h4 className="font-semibold mb-2">Download</h4>
                <p className="text-text-secondary text-sm">
                  Download the installer for your operating system from the options above
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-secondary mb-3">2</div>
                <h4 className="font-semibold mb-2">Install</h4>
                <p className="text-text-secondary text-sm">
                  Run the installer and follow the on-screen instructions
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-secondary mb-3">3</div>
                <h4 className="font-semibold mb-2">Launch</h4>
                <p className="text-text-secondary text-sm">
                  Start the launcher and log in with your Minecraft account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Minimum</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• OS: Windows 7, macOS 10.12, Linux (Ubuntu 18.04+)</li>
                <li>• RAM: 2 GB</li>
                <li>• Storage: 500 MB</li>
                <li>• Java: 8+ installed</li>
              </ul>
            </div>
            <div className="bg-primary border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Recommended</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• OS: Windows 10+, macOS 11+, Linux (Ubuntu 20.04+)</li>
                <li>• RAM: 8 GB</li>
                <li>• Storage: 2 GB SSD</li>
                <li>• Java: 17+ installed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Downloads */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Other Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-secondary border border-border rounded-lg hover:border-opacity-50 hover:bg-tertiary transition"
            >
              <Github size={28} className="text-text-secondary" />
              <div>
                <h3 className="font-semibold">Source Code</h3>
                <p className="text-sm text-text-secondary">View on GitHub</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 p-6 bg-secondary border border-border rounded-lg hover:border-opacity-50 hover:bg-tertiary transition"
            >
              <FileText size={28} className="text-text-secondary" />
              <div>
                <h3 className="font-semibold">Release Notes</h3>
                <p className="text-sm text-text-secondary">Latest changelog</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
