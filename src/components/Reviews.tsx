'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar } from 'react-icons/fa'

const reviews = [
  {
    name: 'Zahra',
    review: 'May Allah bless your hands! The way my hair is so soft and hydrated wallahi, it hasn\'t been like this in forever. Thank you so much!',
    rating: 5,
  },
  {
    name: 'Sabrina Masuo',
    review: 'The oil is really good, mashallah! We\'ve all been using it me, my husband, and my kids.',
    rating: 5,
  },
  {
    name: 'SammyNextDoor',
    review: 'Girllll, it\'s working wonders for my daughter! She had really light hair in the temple area, but it\'s coming in so nice now allahuma barik!',
    rating: 5,
  },
]

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 text-center">
            What Our Customers Say
          </h2>
          <p className="text-center text-charcoal mb-16 max-w-2xl mx-auto leading-relaxed">
            Real experiences from real people who have transformed their hair with kowluxé
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-cream p-8 rounded-2xl border-2 border-light-sage hover:border-dark-sage transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-soft-gold" size={20} />
                  ))}
                </div>
                <p className="text-charcoal text-center leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>
                <p className="text-dark-sage font-semibold text-center font-heading text-lg">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
