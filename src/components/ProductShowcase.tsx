'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLeaf, FaBolt, FaUsers } from 'react-icons/fa'

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    { icon: FaLeaf, title: 'Natural Ingredients', desc: 'Pure, organic oils that nourish without harsh chemicals. Safe for all hair types.' },
    { icon: FaBolt, title: 'Fast Results', desc: 'Visible improvement in hair strength and shine within the first week of use.' },
    { icon: FaUsers, title: 'Family Safe', desc: 'Gentle formula suitable for women, men, and children. The whole family can benefit.' },
  ]

  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Why kowluxé?
          </h2>
          <p className="text-xl text-charcoal mb-16 max-w-3xl mx-auto leading-relaxed">
            Our hair oil isn't just a product - it's a ritual for natural beauty and healthy hair growth
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-dark-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-charcoal leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
