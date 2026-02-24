import { CheckCircle, Zap, Users, Lock, Github, Settings } from 'lucide-react'

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'Instance Management',
      description: 'Create, organize, and manage multiple Minecraft instances with different versions and mods',
    },
    {
      icon: Users,
      title: 'Mod Browser',
      description: 'Browse, download, and install mods from multiple platforms seamlessly',
    },
    {
      icon: Lock,
      title: 'Account Management',
      description: 'Manage multiple Minecraft accounts and switch between them instantly',
    },
    {
      icon: Github,
      title: 'Mod Platform Support',
      description: 'Support for Modrinth, CurseForge, and other popular mod platforms',
    },
    {
      icon: Settings,
      title: 'Advanced Settings',
      description: 'Customize JVM arguments, RAM allocation, and game settings',
    },
  ]

  const featureDetails = [
    {
      title: 'Multi-Instance Support',
      description: 'Create separate instances for different modpacks, vanilla versions, and snapshots. Each instance maintains its own configuration and mod library.',
      points: [
        'Unlimited instances',
        'Quick switching',
        'Independent configurations',
        'Automatic backups',
      ],
    },
    {
      title: 'Integrated Mod Browser',
      description: 'Access thousands of mods from Modrinth and CurseForge directly from the launcher. Search, filter, and install with one click.',
      points: [
        'Multi-source support',
        'Smart dependency detection',
        'Version compatibility checking',
        'Mod conflict resolution',
      ],
    },
    {
      title: 'Resource Packs & Shaders',
      description: 'Download and manage resource packs and shader mods easily. Organize them by instance for quick switching.',
      points: [
        'One-click installation',
        'Automatic sorting',
        'Preview thumbnails',
        'Easy management',
      ],
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Powerful Features</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to manage Minecraft your way
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 bg-secondary border border-border rounded-lg"
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

      {/* Detailed Features */}
      {featureDetails.map((feature, index) => (
        <section
          key={index}
          className={`py-20 px-4 ${index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">{feature.title}</h2>
                <p className="text-text-secondary text-lg mb-8">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-text-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-tertiary border border-border rounded-lg h-64 flex items-center justify-center text-text-secondary">
                [Feature Preview]
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
