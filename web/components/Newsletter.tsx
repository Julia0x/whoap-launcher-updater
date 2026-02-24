'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 800))

    console.log('[v0] Newsletter subscription:', email)
    setSubscribed(true)
    setLoading(false)

    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-20 px-4 bg-secondary border-y border-border">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Mail size={32} className="text-text-secondary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-text-secondary mb-8">
          Subscribe to our newsletter for updates, news, and new features
        </p>

        {subscribed ? (
          <div className="flex items-center justify-center gap-2 text-text">
            <Check size={24} />
            <span>Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-primary border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
