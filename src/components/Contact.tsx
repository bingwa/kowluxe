'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formDataWithKey = {
      ...formData,
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY" // Get from web3forms.com
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formDataWithKey)
      })

      const result = await response.json()
      
      if (result.success) {
        alert("Message sent successfully!")
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("Failed to send message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-dark-sage">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-white mb-16 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-soft-gold resize-none"
                  required
                />
              </div>

              <button type="submit" className="btn-secondary w-full">
                Send Message
              </button>
            </form>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-8 text-white"
            >
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Contact Information</h3>
                <p className="mb-6">
                  Reach out to us through any of these channels and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto: kowluxe@gmail.com"
                  className="flex items-center space-x-3 hover:text-soft-gold transition-colors"
                >
                  <FaEnvelope size={24} />
                  <span>kowluxe@gmail.com</span>
                </a>

                <div className="flex space-x-6 pt-4">
                  <a
                    href="https://instagram.com/kowluxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-soft-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={32} />
                  </a>
                  <a
                    href="https://tiktok.com/@kowluxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-soft-gold transition-colors"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={32} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
