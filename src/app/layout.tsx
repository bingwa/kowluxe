import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Alex_Brush } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-logo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'kowluxé - Natural Luxury Hair Oil',
  description: 'Discover the transformative power of nature with our signature hair oil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${alexBrush.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
