import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-cream font-heading text-xl mb-4">kowluxé</h3>
            <p className="text-cream text-sm">
              Natural luxury for your hair, crafted with care and dedication.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-cream text-sm">
              <li>
                <Link href="/privacy" className="hover:text-soft-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-soft-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-soft-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-cream text-sm">
          <p>&copy; {new Date().getFullYear()} kowluxé. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
