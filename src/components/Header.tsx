'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

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

  // Body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
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
    { name: 'Shop', id: 'shopsection' },
    { name: 'Contact', id: 'contact' },
  ]

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const hamburgerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-light-sage/30 ${
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
              src="/log.png"
              alt="kowluxé"
              width={350}
              height={70}
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

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden p-3 bg-cream border border-light-sage rounded-xl shadow-lg z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-6 h-5 flex flex-col justify-between relative"
            initial={false}
            animate={mobileMenuOpen ? 'open' : 'closed'}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="absolute w-full h-0.5 bg-charcoal rounded-full origin-center"
            />
            <motion.span
              variants={hamburgerVariants}
              className="w-full h-0.5 bg-charcoal rounded-full"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="absolute w-full h-0.5 bg-charcoal rounded-full origin-center"
            />
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile Menu - Partial Side Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop - Dim left side, click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-charcoal/50 z-40 md:hidden"
            />

            {/* Partial Opaque Panel - Right side only */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 z-50 md:hidden border-l border-light-sage/50 shadow-2xl"
              style={{ backgroundColor: '#E8F5E8' }}  // Solid opaque light sage hex
            >
              <div className="flex flex-col h-full p-8 pt-20">
                {/* Close X */}
                <button
                  onClick={toggleMobileMenu}
                  className="self-end text-charcoal text-2xl hover:text-soft-gold transition-colors"
                >
                  ×
                </button>

                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="block w-full text-left text-xl font-medium text-charcoal hover:text-soft-gold transition-colors py-2 rounded-md hover:bg-cream"
                        >
                          {link.name}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
