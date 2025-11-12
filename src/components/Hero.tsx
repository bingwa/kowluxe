'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-cream flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Subtle gradient overlay for modern depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-transparent to-light-sage/20" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content - Staggered animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:pr-8"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-6 leading-tight tracking-tight">
            Natural Luxury for Your Hair
          </h1>
          <p className="text-xl text-charcoal mb-8 font-light leading-relaxed max-w-lg">
            Discover the transformative power of nature with our signature hair oil,
            crafted for lasting health and beauty
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('shop')}
              className="btn-primary px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Shop Now
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="btn-secondary px-6 py-3 rounded-lg border border-charcoal/20 hover:border-charcoal/40 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image - Floating blend, no white box, subtle modern effects */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative md:-ml-8 md:translate-y-8"  
        >
          <div className="relative w-full h-96 md:h-[500px] max-w-md mx-auto md:mx-0">
            <Image
              src="/prod.png"
              alt="kowluxé hair oil"
              fill
              className="object-contain drop-shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"  // Floating shadow + subtle hover tilt for engagement
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
