'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'  // Optional: npm i lucide-react; fallback to ×

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Lock body scroll and position for full coverage
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.documentElement.style.overflow = 'hidden'  // Extra for html
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'static'
      document.documentElement.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'static'
      document.documentElement.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)

    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/') {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        router.push(`/#${id}`)
      }
    }
  }

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ]

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm border-b border-light-sage/30 ${
        scrolled ? 'py-3 shadow-lg' : 'py-4'
      }`}
      style={{ 
        background: 'linear-gradient(to right, var(--color-light-sage), var(--color-cream))'
      }}
    >
      <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex-shrink-0">
          <button
            onClick={() => router.push('/')}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-300"
            aria-label="Home"
          >
            <Image
              src="/logo.png"
              alt="kowluxé"
              width={200}
              height={60}
              className="h-12 md:h-14 lg:h-16 w-auto drop-shadow-md"
              priority
            />
          </button>
        </div>

        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-charcoal font-medium hover:text-soft-gold transition-colors duration-300 relative px-3 py-2 rounded-md after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-soft-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-charcoal relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 rounded-full p-1"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-full h-0.5 bg-charcoal rounded-sm origin-center"
          />
          <motion.span
            animate={{
              opacity: mobileMenuOpen ? 0 : 1,
              scaleX: mobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="w-full h-0.5 bg-charcoal rounded-sm origin-center"
          />
          <motion.span
            animate={{
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? -1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-full h-0.5 bg-charcoal rounded-sm origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-light-sage z-[100] md:hidden flex flex-col"  // Full opaque, highest z-index
          >
            {/* Close Button */}
            <button
              onClick={toggleMobileMenu}
              className="self-end p-4 text-charcoal hover:text-soft-gold transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />  {/* Or × */}
            </button>

            {/* Centered Nav - Fills exact height, no push/overflow */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-3xl font-heading text-charcoal hover:text-soft-gold transition-all duration-300 px-6 py-3 rounded-xl bg-white/20 hover:bg-soft-gold/10 min-w-[180px] text-center leading-relaxed"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
