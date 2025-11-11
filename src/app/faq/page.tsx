'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: 'What ingredients are in kowluxé hair oil?',
    answer: 'Our signature blend includes 100% natural oils like argan, jojoba, and coconut, sourced ethically without harsh chemicals or synthetic fragrances. It\'s safe for all hair types and suitable for daily use.',
  },
  {
    question: 'How do I use the hair oil for best results?',
    answer: 'Apply 3-5 drops to damp or dry hair, focusing on the scalp and ends. Massage gently and leave in overnight for deep nourishment. Use 2-3 times per week for optimal strength and shine.',
  },
  {
    question: 'Is kowluxé suitable for all hair types and family members?',
    answer: 'Yes, our gentle formula works for curly, straight, dry, or oily hair, and is safe for women, men, and children. It\'s dermatologist-tested and free from allergens like nuts.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'We ship within Kenya in 2-3 business days and internationally in 5-10 days via reliable partners like DHL. Free shipping on orders over KSh 5,000.',
  },
  {
    question: 'What is your return policy?',
    answer: 'Unopened products can be returned within 30 days for a full refund. Contact us at info@kowluxe.com with your order details. Shipping costs are non-refundable unless due to our error.',
  },
  {
    question: 'Does kowluxé help with hair growth?',
    answer: 'While not a miracle cure, our natural ingredients nourish the scalp and strengthen follicles, promoting healthier growth. Many customers see thicker, longer hair within 4-6 weeks of consistent use.',
  },
  {
    question: 'Is the product cruelty-free and vegan?',
    answer: 'Absolutely—kowluxé is 100% vegan, cruelty-free, and sustainably sourced. We prioritize ethical practices and environmental responsibility in every bottle.',
  },
]

export default function FAQPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-cream">
      <section className="pt-24 pb-20 bg-dark-sage">
        <div className="container mx-auto px-6 text-center text-white max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl leading-relaxed"
          >
            Find answers to common questions about our natural hair oil and your shopping experience
          </motion.p>
        </div>
      </section>

      <section className="py-16 section-padding">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-light-sage"
                whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left font-semibold text-charcoal flex justify-between items-center hover:bg-light-sage transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <FaMinus className="text-dark-sage" />
                  ) : (
                    <FaPlus className="text-dark-sage" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
