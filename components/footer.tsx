import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-medium text-stone-900 mb-4">Mister & Clay</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Premium limewash paints crafted for sophisticated interiors. Transform your space with our collection of
              natural, breathable finishes.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-stone-500 hover:text-stone-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-stone-500 hover:text-stone-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-stone-500 hover:text-stone-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-stone-900 mb-4">Products</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products" className="text-stone-600 hover:text-stone-900 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/limewash" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Limewash Paint
                </Link>
              </li>
              <li>
                <Link href="/samples" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Sample Pots
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Application Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium text-stone-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/advice" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Application Guide
                </Link>
              </li>
              <li>
                <Link href="/consultancy" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Consultancy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-stone-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-stone-600 hover:text-stone-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/inspiration" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Inspiration
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/trade" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Trade Program
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm">© 2024 Mister & Clay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-stone-500 hover:text-stone-700 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-stone-500 hover:text-stone-700 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
