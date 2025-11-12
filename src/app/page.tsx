import Hero from '@/components/Hero'
import About from '@/components/About'
import ProductShowcase from '@/components/ProductShowcase'
import ShopSection from '@/components/ShopSection'  // Add this import
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductShowcase />
      <ShopSection />
      <Reviews />
      <Contact />
    </main>
  )
}
