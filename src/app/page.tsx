import Hero from '@/components/Hero'
import About from '@/components/About'
import ProductShowcase from '@/components/ProductShowcase'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductShowcase />
      <Reviews />
      <Contact />
    </main>
  )
}
