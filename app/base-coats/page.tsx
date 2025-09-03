"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"

const baseCoats = [
  {
    id: 1,
    name: "Universal Base Coat",
    description: "Essential primer for all limewash applications on new surfaces",
    price: "£28.00",
    coverage: "12-15m² per litre",
    image: "/universal-base-coat-primer.png",
    slug: "universal-base-coat",
  },
  {
    id: 2,
    name: "Exterior Base Coat",
    description: "Weather-resistant primer for outdoor limewash projects",
    price: "£32.00",
    coverage: "10-12m² per litre",
    image: "/exterior-base-coat-primer.png",
    slug: "exterior-base-coat",
  },
  {
    id: 3,
    name: "Historic Properties Base",
    description: "Specialized primer for traditional and heritage buildings",
    price: "£35.00",
    coverage: "8-10m² per litre",
    image: "/historic-properties-base-coat.png",
    slug: "historic-properties-base",
  },
]

export default function BaseCoatsPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const { addToCart } = useCart()

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const addAllToCart = () => {
    const selectedItems = baseCoats.filter((p) => selectedProducts.includes(p.id))
    selectedItems.forEach((product) => {
      addToCart({
        id: product.slug,
        name: product.name,
        price: Number.parseFloat(product.price.replace("£", "")),
        image: product.image,
        quantity: 1,
        type: "base-coat",
      })
    })
    setSelectedProducts([])
  }

  const clearSelection = () => {
    setSelectedProducts([])
  }

  const selectedTotal = selectedProducts.reduce((total, id) => {
    const product = baseCoats.find((p) => p.id === id)
    return total + (product ? Number.parseFloat(product.price.replace("£", "")) : 0)
  }, 0)

  const bulkDiscount = selectedProducts.length >= 2 ? 0.05 : 0
  const discountedTotal = selectedTotal * (1 - bulkDiscount)

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium text-stone-900 mb-6">Base Coats & Primers</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Essential preparation for perfect limewash application. Our base coats ensure optimal adhesion, coverage,
            and longevity for your limewash finish on any surface.
          </p>
          <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="font-serif text-xl font-medium text-stone-900 mb-2">Build Your Preparation Kit</h2>
            <p className="text-stone-600 text-sm">
              Select multiple base coats for different surfaces. Get 5% off when you choose 2 or more products.
            </p>
          </div>
        </div>

        {selectedProducts.length > 0 && (
          <section className="mb-8 p-4 bg-stone-900 text-white rounded-lg sticky top-4 z-40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-medium">{selectedProducts.length} products selected</span>
                <div className="flex items-center gap-2">
                  {bulkDiscount > 0 && <Badge className="bg-green-600 text-white">5% off</Badge>}
                  <span className="text-sm">
                    Total: £{discountedTotal.toFixed(2)}
                    {bulkDiscount > 0 && (
                      <span className="line-through text-stone-400 ml-2">£{selectedTotal.toFixed(2)}</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={clearSelection} className="text-white hover:bg-stone-800">
                  Clear All
                </Button>
                <Button size="sm" onClick={addAllToCart} className="bg-white text-stone-900 hover:bg-stone-100">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {baseCoats.map((product) => {
            const isSelected = selectedProducts.includes(product.id)
            return (
              <Card
                key={product.id}
                className={`group transition-all duration-300 border-2 ${
                  isSelected ? "border-stone-900 shadow-lg" : "border-stone-200 hover:shadow-lg"
                }`}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors">
                      <div className="absolute top-4 right-4">
                        <Button
                          size="sm"
                          variant={isSelected ? "default" : "secondary"}
                          onClick={(e) => {
                            e.preventDefault()
                            toggleProductSelection(product.id)
                          }}
                          className={`rounded-full w-8 h-8 p-0 ${
                            isSelected ? "bg-stone-900 hover:bg-stone-800" : "bg-white/90 hover:bg-white text-stone-900"
                          }`}
                        >
                          {isSelected ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">{product.name}</h3>
                    <p className="text-stone-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium text-stone-900">{product.price}</span>
                      <span className="text-sm text-stone-500">{product.coverage}</span>
                    </div>
                    <Link href={`/base-coats/${product.slug}`}>
                      <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="font-serif text-2xl font-medium text-stone-900 mb-6">Why Use Base Coats?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-stone-900 mb-3">Enhanced Adhesion</h3>
              <p className="text-stone-600 leading-relaxed">
                Base coats create the perfect surface for limewash to bond with, ensuring long-lasting results on any
                substrate.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-stone-900 mb-3">Improved Coverage</h3>
              <p className="text-stone-600 leading-relaxed">
                Proper priming reduces the number of limewash coats needed, saving time and materials while achieving
                better opacity.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-stone-900 mb-3">Surface Protection</h3>
              <p className="text-stone-600 leading-relaxed">
                Our base coats seal porous surfaces and prevent staining, ensuring your limewash finish looks perfect
                for years to come.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-stone-900 mb-3">Professional Results</h3>
              <p className="text-stone-600 leading-relaxed">
                Used by professional decorators worldwide, our base coats guarantee the smooth, even finish that makes
                limewash so beautiful.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">Need Help Choosing?</h2>
          <p className="text-stone-600 mb-6">Our experts can recommend the perfect base coat for your project</p>
          <Link href="/consultancy">
            <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
