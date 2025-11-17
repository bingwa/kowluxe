'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'

export default function ShopSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sizes = [
    {
      size: '10oz',
      price: '25$',
      description: 'Full-size bottle for regular use - lasts 3-4 months of daily application',
    },
    {
      size: '8oz',
      price: '20$',
      description: 'Perfect medium size for travel and consistent daily use - lasts 2-3 months',
    },
    {
      size: '5oz',
      price: '8.99$',
      description: 'Compact travel size for on-the-go nourishment - lasts 1-2 months',
    },
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-cream to-light-sage">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/size.png"
                alt="kowluxé hair oil in 10oz, 8oz, and 5oz sizes"
                width={918}
                height={1600}
                className="w-full h-[500px] lg:h-[600px] object-cover"  // Fixed aspect, scales with viewport
                priority
              />
              {/* Subtle overlay for elegant blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-transparent to-light-sage/40" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-4">
                Premium Hair Oil - Three Sizes
              </h2>
              <p className="text-lg text-charcoal leading-relaxed">
                Our signature blend of natural oils available in three convenient sizes. 
                Each bottle contains the same premium formula crafted for lasting hair health and beauty.
              </p>
            </div>

            {/* Size Information */}
            <div className="space-y-6">
              {sizes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-light-sage/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-gold to-light-sage rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {item.size}
                    </span>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-charcoal">
                      {item.size}
                    </p>
                    <p className="text-lg font-bold text-soft-gold">
                      {item.price}
                    </p>
                    <p className="text-charcoal text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Single CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center pt-4"
            >
              <Link 
                href="https://kowlxe.myshopify.com/" 
                className="btn-primary inline-block px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Shop All Products
              </Link>
              <p className="text-charcoal mt-4 text-sm opacity-75 text-center">
                Secure checkout •   Global Shipping
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
