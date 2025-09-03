"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPaintDropdownOpen, setIsPaintDropdownOpen] = useState(false)
  const { state } = useCart()
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsPaintDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsPaintDropdownOpen(false)
    }, 150) // 150ms delay before hiding
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F5F3F0]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-2xl lg:text-3xl font-medium text-[#8B7B6B] tracking-tight">Mister & Clay</h1>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center text-stone-700 hover:text-stone-900 font-medium transition-colors">
                Paint
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isPaintDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-stone-200 py-2">
                  <Link
                    href="/products"
                    className="block px-4 py-2 text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  >
                    Limewash Paint
                  </Link>
                  <Link
                    href="/base-coats"
                    className="block px-4 py-2 text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  >
                    Base Coat
                  </Link>
                  <Link
                    href="/samples"
                    className="block px-4 py-2 text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  >
                    Samples
                  </Link>
                  <Link href="/tools" className="block px-4 py-2 text-stone-700 hover:bg-stone-50 hover:text-stone-900">
                    Brushes
                  </Link>
                  <Link href="/tools" className="block px-4 py-2 text-stone-700 hover:bg-stone-50 hover:text-stone-900">
                    Trays
                  </Link>
                </div>
              )}
            </div>
            <Link href="/consultancy" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
              Colour Consultancy
            </Link>
            <Link href="/inspiration" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
              Inspiration & Ideas
            </Link>
            <Link href="/advice" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
              Decorating Advice
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-stone-700 hover:text-stone-900">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="text-stone-700 hover:text-stone-900 relative">
                <ShoppingBag className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8B7B6B] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8B7B6B] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-4">
              <div>
                <div className="text-stone-700 font-medium mb-2">Paint</div>
                <div className="ml-4 space-y-2">
                  <Link href="/products" className="block text-stone-600 hover:text-stone-900">
                    Limewash Paint
                  </Link>
                  <Link href="/base-coats" className="block text-stone-600 hover:text-stone-900">
                    Base Coat
                  </Link>
                  <Link href="/samples" className="block text-stone-600 hover:text-stone-900">
                    Samples
                  </Link>
                  <Link href="/tools" className="block text-stone-600 hover:text-stone-900">
                    Brushes & Trays
                  </Link>
                </div>
              </div>
              <Link href="/consultancy" className="text-stone-700 hover:text-stone-900 font-medium">
                Colour Consultancy
              </Link>
              <Link href="/inspiration" className="text-stone-700 hover:text-stone-900 font-medium">
                Inspiration & Ideas
              </Link>
              <Link href="/advice" className="text-stone-700 hover:text-stone-900 font-medium">
                Decorating Advice
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
