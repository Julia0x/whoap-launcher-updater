'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Users, AlertCircle, Check } from 'lucide-react'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const supportChannels = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'support@launcher.dev',
    },
    {
      icon: MessageSquare,
      title: 'Discord Community',
      description: 'Join our Discord server for instant help from the community',
      action: 'Join Server',
    },
    {
      icon: Users,
      title: 'GitHub Discussions',
      description: 'Share ideas and get help in our GitHub community',
      action: 'View Discussions',
    },
  ]

  const faqs = [
    {
      question: 'How do I report a bug?',
      answer: 'You can report bugs on our GitHub repository or through the Discord support channel. Please include steps to reproduce and system information.',
    },
    {
      question: 'Is Launcher free?',
      answer: 'Yes, Launcher is completely free and open-source. You can use all features without any limitations.',
    },
    {
      question: 'Can I use Launcher on multiple computers?',
      answer: 'Yes, you can install Launcher on as many computers as you like using the same Minecraft account.',
    },
    {
      question: 'Do you collect personal data?',
      answer: 'No, Launcher only stores your Minecraft account credentials locally. We do not collect or share any personal data.',
    },
    {
      question: 'How often are updates released?',
      answer: 'We release updates regularly with new features, improvements, and bug fixes. Follow our GitHub for the latest releases.',
    },
    {
      question: 'Can I contribute to the project?',
      answer: 'Absolutely! We welcome contributions. Check our GitHub repository for contribution guidelines and open issues.',
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', category: 'general', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Support & Help</h1>
          <p className="text-text-secondary text-lg">
            We're here to help. Choose your preferred way to get in touch
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <div
                  key={index}
                  className="bg-secondary border border-border rounded-lg p-8 text-center hover:border-opacity-50 hover:bg-tertiary transition"
                >
                  <Icon size={40} className="mx-auto mb-4 text-text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-text-secondary mb-6">{channel.description}</p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition"
                  >
                    {channel.action}
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary border border-border rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Check size={48} className="mb-4 text-text-secondary" />
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-text-secondary">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-opacity-50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary border border-border rounded text-text focus:outline-none focus:border-opacity-50"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-opacity-50 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-primary border border-border rounded-lg p-6"
              >
                <div className="flex gap-3">
                  <AlertCircle
                    size={24}
                    className="text-text-secondary flex-shrink-0 mt-0.5"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
