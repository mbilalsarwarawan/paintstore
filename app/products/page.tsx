"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, Grid, List, Check, Plus, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: "sage-whisper",
    name: "Sage Whisper",
    color: "#9ca986",
    price: 45,
    description: "A calming sage green with subtle grey undertones",
    category: "Greens",
    inStock: true,
    image: "/sage-green-limewash-paint-swatch.png",
  },
  {
    id: "terracotta-dream",
    name: "Terracotta Dream",
    color: "#c17b5a",
    price: 45,
    description: "Warm terracotta with earthy depth",
    category: "Oranges",
    inStock: true,
    image: "/terracotta-orange-limewash-paint-swatch.png",
  },
  {
    id: "stone-embrace",
    name: "Stone Embrace",
    color: "#e8e2db",
    price: 45,
    description: "Soft neutral stone with warm undertones",
    category: "Neutrals",
    inStock: true,
    image: "/stone-beige-limewash-paint-swatch.png",
  },
  {
    id: "charcoal-depth",
    name: "Charcoal Depth",
    color: "#2d2d2d",
    price: 45,
    description: "Rich charcoal with sophisticated depth",
    category: "Greys",
    inStock: false,
    image: "/charcoal-grey-limewash-paint-swatch.png",
  },
  {
    id: "cream-cloud",
    name: "Cream Cloud",
    color: "#f7f5f3",
    price: 45,
    description: "Pure cream with subtle warmth",
    category: "Neutrals",
    inStock: true,
    image: "/cream-white-limewash-paint-swatch.png",
  },
  {
    id: "ocean-mist",
    name: "Ocean Mist",
    color: "#7a9b9e",
    price: 45,
    description: "Soft blue-grey reminiscent of coastal mornings",
    category: "Blues",
    inStock: true,
    image: "/blue-grey-limewash-paint-swatch.png",
  },
]

const categories = ["All", "Neutrals", "Greens", "Blues", "Oranges", "Greys"]

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState("All")
  const { addToCart } = useCart()

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const addAllToCart = () => {
    const selectedItems = products.filter((p) => selectedProducts.includes(p.id))
    selectedItems.forEach((product) => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        type: "paint",
      })
    })
    setSelectedProducts([])
  }

  const clearSelection = () => {
    setSelectedProducts([])
  }

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  const selectedTotal = selectedProducts.reduce((total, id) => {
    const product = products.find((p) => p.id === id)
    return total + (product?.price || 0)
  }, 0)

  const bulkDiscount = selectedProducts.length >= 3 ? 0.1 : 0
  const discountedTotal = selectedTotal * (1 - bulkDiscount)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-4">
              Limewash Paint Collection
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Discover our curated selection of premium limewash paints, each carefully crafted to bring natural beauty
              and timeless elegance to your space.
            </p>
            <div className="bg-stone-50 rounded-lg p-6 max-w-3xl mx-auto">
              <h2 className="font-serif text-xl font-medium text-stone-900 mb-2">Build Your Color Palette</h2>
              <p className="text-stone-600 text-sm">
                Select multiple colors to create your perfect palette. Get 10% off when you choose 3 or more colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === activeCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={
                    category === activeCategory
                      ? "bg-stone-900 hover:bg-stone-800"
                      : "border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-stone-600">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex border border-stone-300 rounded-md">
                <Button variant="ghost" size="sm" className="rounded-r-none border-r border-stone-300">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-l-none">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Palette Selection Bar */}
      {selectedProducts.length > 0 && (
        <section className="py-4 bg-stone-900 text-white sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-medium">{selectedProducts.length} colors selected</span>
                <div className="flex items-center gap-2">
                  {bulkDiscount > 0 && <Badge className="bg-green-600 text-white">10% off</Badge>}
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
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isSelected = selectedProducts.includes(product.id)
              return (
                <Card
                  key={product.id}
                  className={`group cursor-pointer border-2 transition-all duration-300 overflow-hidden ${
                    isSelected ? "border-stone-900 shadow-lg" : "border-stone-200 hover:shadow-lg"
                  }`}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <div
                      className="w-full h-full transition-transform group-hover:scale-105"
                      style={{ backgroundColor: product.color }}
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Badge variant="secondary" className="bg-white/90 text-stone-900">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-xl font-medium text-stone-900">{product.name}</h3>
                      <Badge variant="outline" className="text-xs border-stone-300 text-stone-600">
                        {product.category}
                      </Badge>
                    </div>
                    <p className="text-stone-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-medium text-stone-900">£{product.price}</span>
                        <span className="text-sm text-stone-500 ml-1">inc. VAT</span>
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button
                          size="sm"
                          disabled={!product.inStock}
                          className={product.inStock ? "bg-stone-900 hover:bg-stone-800" : ""}
                        >
                          {product.inStock ? "View Details" : "Notify Me"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-4">Not Sure Which Color to Choose?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Order our sample collection to see how each color looks in your space, or book a consultation with our color
            experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/samples">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">
                Order Samples
              </Button>
            </Link>
            <Link href="/consultancy">
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 bg-transparent"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
