'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-12 text-center">
            Our Story
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-charcoal leading-relaxed">
              <p>
                At <span className="font-heading text-2xl">kowluxé</span>, we believe in the power of 
                nature to nurture your hair and scalp. Our signature hair oil is the result of years 
                of personal experience and dedication, crafted with ingredients that promote healthy, 
                thicker, and more resilient hair.
              </p>
              
              <p>
                The journey to creating this oil started with my own struggles with thin hair and a 
                sensitive, often anxious scalp. Growing up, I was always searching for a solution to 
                the frustration of lackluster hair that wouldn't seem to grow or thrive no matter what 
                I tried. Desperate for a change, I decided to take matters into my own hands and 
                formulated a hair oil that would not only provide relief but also encourage long-term 
                hair health.
              </p>
              
              <p>
                What makes our hair oil unique is its ability to offer longevity. Unlike many temporary 
                fixes, our oil works deep within the hair follicles, nourishing the scalp, strengthening 
                roots, and improving the overall health of your hair over time. It's not just about 
                instant results, but creating a foundation for lasting, healthy hair growth.
              </p>
              
              <p className="font-medium">
                Our mission is to empower individuals to feel confident in their natural beauty, knowing 
                their hair is cared for in the most authentic and sustainable way possible.
              </p>
            </div>

            <div className="relative h-96 bg-cream rounded-3xl border-2 border-light-sage flex items-center justify-center">
              {/* Decorative element or image placeholder */}
              <div className="text-dark-sage text-6xl font-heading"> <Image
                            src="/prodcut.png"
                            alt="kowluxé hair oil"
                            width={300}
                            height={400}
                            className="object-contain"
                />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
