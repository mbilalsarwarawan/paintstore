"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Palette, Check, X, Sparkles } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

const sampleColors = [
  {
    id: "white-wash",
    name: "White Wash",
    color: "#F8F6F0",
    hex: "#F8F6F0",
    category: "Whites",
    price: 4.99,
    description: "Soft, warm white with subtle lime texture",
    rooms: ["Living Room", "Bedroom"],
    lightConditions: ["North Facing", "Low Light"],
  },
  {
    id: "clay-pot",
    name: "Clay Pot",
    color: "#B8956A",
    hex: "#B8956A",
    category: "Warm Tones",
    price: 4.99,
    description: "Rich earthy clay with natural warmth",
    rooms: ["Kitchen", "Living Room"],
    lightConditions: ["South Facing", "Bright Light"],
  },
  {
    id: "stone-grey",
    name: "Stone Grey",
    color: "#A8A695",
    hex: "#A8A695",
    category: "Neutrals",
    price: 4.99,
    description: "Sophisticated grey with green undertones",
    rooms: ["Bathroom", "Bedroom"],
    lightConditions: ["Any Light"],
  },
  {
    id: "sage-green",
    name: "Sage Green",
    color: "#9CAF88",
    hex: "#9CAF88",
    category: "Cool Tones",
    price: 4.99,
    description: "Calming botanical green",
    rooms: ["Bedroom", "Bathroom"],
    lightConditions: ["North Facing", "Bright Light"],
  },
  {
    id: "warm-ivory",
    name: "Warm Ivory",
    color: "#F5F1E8",
    hex: "#F5F1E8",
    category: "Whites",
    price: 4.99,
    description: "Creamy ivory with golden undertones",
    rooms: ["Living Room", "Kitchen"],
    lightConditions: ["Any Light"],
  },
  {
    id: "charcoal",
    name: "Charcoal",
    color: "#4A4A4A",
    hex: "#4A4A4A",
    category: "Bold Colors",
    price: 4.99,
    description: "Deep charcoal with subtle texture",
    rooms: ["Exterior", "Living Room"],
    lightConditions: ["Bright Light", "South Facing"],
  },
  {
    id: "terracotta",
    name: "Terracotta",
    color: "#A0785C",
    hex: "#A0785C",
    category: "Warm Tones",
    price: 4.99,
    description: "Mediterranean terracotta warmth",
    rooms: ["Kitchen", "Exterior"],
    lightConditions: ["South Facing", "Bright Light"],
  },
  {
    id: "blue-grey",
    name: "Blue Grey",
    color: "#7A9B9E",
    hex: "#7A9B9E",
    category: "Cool Tones",
    price: 4.99,
    description: "Coastal blue with grey sophistication",
    rooms: ["Bathroom", "Bedroom"],
    lightConditions: ["North Facing", "Any Light"],
  },
  {
    id: "cream-white",
    name: "Cream White",
    color: "#F7F5F3",
    hex: "#F7F5F3",
    category: "Whites",
    price: 4.99,
    description: "Pure cream with subtle warmth",
    rooms: ["Any Room"],
    lightConditions: ["Any Light"],
  },
  {
    id: "dusty-pink",
    name: "Dusty Pink",
    color: "#D4A5A5",
    hex: "#D4A5A5",
    category: "Warm Tones",
    price: 4.99,
    description: "Soft blush with earthy undertones",
    rooms: ["Bedroom", "Living Room"],
    lightConditions: ["North Facing", "Low Light"],
  },
  {
    id: "forest-green",
    name: "Forest Green",
    color: "#5A6B4A",
    hex: "#5A6B4A",
    category: "Cool Tones",
    price: 4.99,
    description: "Deep forest green with natural depth",
    rooms: ["Living Room", "Exterior"],
    lightConditions: ["Bright Light", "South Facing"],
  },
  {
    id: "golden-sand",
    name: "Golden Sand",
    color: "#D4B896",
    hex: "#D4B896",
    category: "Warm Tones",
    price: 4.99,
    description: "Warm sand with golden highlights",
    rooms: ["Kitchen", "Living Room"],
    lightConditions: ["Any Light"],
  },
]

const categories = ["All Colors", "Whites", "Neutrals", "Warm Tones", "Cool Tones", "Bold Colors"]

const popularCombinations = [
  {
    id: "neutral-harmony",
    name: "Neutral Harmony",
    colors: ["white-wash", "clay-pot", "stone-grey"],
    description: "Perfect balance of warm and cool neutrals",
  },
  {
    id: "modern-warmth",
    name: "Modern Warmth",
    colors: ["warm-ivory", "sage-green", "charcoal"],
    description: "Contemporary palette with natural elements",
  },
  {
    id: "coastal-calm",
    name: "Coastal Calm",
    colors: ["cream-white", "blue-grey", "sage-green"],
    description: "Serene coastal-inspired tones",
  },
]

export default function SamplesPage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState("All Colors")
  const { addToCart } = useCart()

  const filteredColors =
    activeCategory === "All Colors" ? sampleColors : sampleColors.filter((color) => color.category === activeCategory)

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]))
  }

  const selectCombination = (colorIds: string[]) => {
    setSelectedColors(colorIds)
  }

  const unitPrice = 4.99
  const bulkDiscountThreshold = 5
  const bulkDiscountPercent = 10
  const subtotal = selectedColors.length * unitPrice
  const bulkDiscount = selectedColors.length >= bulkDiscountThreshold ? subtotal * (bulkDiscountPercent / 100) : 0
  const totalPrice = subtotal - bulkDiscount

  const addAllToCart = () => {
    selectedColors.forEach((colorId) => {
      const color = sampleColors.find((c) => c.id === colorId)
      if (color) {
        addToCart({
          id: `sample-${color.id}`,
          name: `${color.name} Sample`,
          price: color.price,
          image: `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(color.name + " paint sample")}`,
          quantity: 1,
          type: "sample",
        })
      }
    })
    setSelectedColors([])
  }

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-stone-600">
            <Link href="/" className="hover:text-[#8B7B6B]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-[#8B7B6B]">
              Paint
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900">Samples</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="h-8 w-8 text-[#8B7B6B]" />
              <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900">Build Your Perfect Palette</h1>
            </div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Select multiple colours to create your palette. Each sample is a 50ml test pot perfect for trying colors
              in different lights.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-stone-600">
              <span className="font-medium text-stone-900">£4.99 per sample</span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-4 w-4 text-[#A0785C]" />
                Order 5+ samples and get 10% off
              </span>
            </div>
          </div>

          {selectedColors.length > 0 && (
            <Card className="p-6 border-[#8B7B6B] bg-white shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#8B7B6B]">{selectedColors.length}</span>
                    <span className="text-stone-600">colors selected</span>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {selectedColors.map((colorId) => {
                      const color = sampleColors.find((c) => c.id === colorId)
                      return color ? (
                        <div key={colorId} className="flex items-center gap-2 bg-stone-50 rounded-full px-3 py-1">
                          <div
                            className="w-4 h-4 rounded-full border border-stone-300"
                            style={{ backgroundColor: color.color }}
                          />
                          <span className="text-sm font-medium">{color.name}</span>
                          <button onClick={() => toggleColor(colorId)} className="text-stone-400 hover:text-stone-600">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-4 lg:ml-auto">
                  <div className="text-right">
                    <div className="text-sm text-stone-600">
                      Subtotal: <span className="line-through">£{subtotal.toFixed(2)}</span>
                    </div>
                    {bulkDiscount > 0 && (
                      <div className="text-sm text-[#A0785C] font-medium">
                        Bulk discount: -£{bulkDiscount.toFixed(2)}
                      </div>
                    )}
                    <div className="text-lg font-bold text-stone-900">
                      Total: £{totalPrice.toFixed(2)} <small className="text-sm font-normal">(inc. VAT)</small>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setSelectedColors([])}
                      className="border-stone-300 text-stone-700 hover:bg-stone-100"
                    >
                      Clear All
                    </Button>
                    <Button onClick={addAllToCart} className="bg-[#8B7B6B] hover:bg-[#7A6B5B] text-white">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add All to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Category Filters */}
              <Card className="p-6 border-stone-200">
                <h3 className="font-medium text-stone-900 mb-4">Browse by Color Family</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const count =
                      category === "All Colors"
                        ? sampleColors.length
                        : sampleColors.filter((c) => c.category === category).length

                    return (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          category === activeCategory ? "bg-[#8B7B6B] text-white" : "hover:bg-stone-100 text-stone-700"
                        }`}
                      >
                        <span>{category}</span>
                        <span className="float-right text-sm opacity-75">({count})</span>
                      </button>
                    )
                  })}
                </div>
              </Card>

              {/* Popular Combinations */}
              <Card className="p-6 border-stone-200">
                <h3 className="font-medium text-stone-900 mb-4">Popular Combinations</h3>
                <div className="space-y-3">
                  {popularCombinations.map((combo) => (
                    <button
                      key={combo.id}
                      onClick={() => selectCombination(combo.colors)}
                      className="w-full text-left p-3 rounded-lg border border-stone-200 hover:border-[#8B7B6B] hover:bg-stone-50 transition-colors"
                    >
                      <div className="flex gap-2 mb-2">
                        {combo.colors.map((colorId) => {
                          const color = sampleColors.find((c) => c.id === colorId)
                          return color ? (
                            <div
                              key={colorId}
                              className="w-6 h-6 rounded-full border border-stone-300"
                              style={{ backgroundColor: color.color }}
                            />
                          ) : null
                        })}
                      </div>
                      <div className="text-sm font-medium text-stone-900">{combo.name}</div>
                      <div className="text-xs text-stone-600">{combo.description}</div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredColors.map((color) => {
                const isSelected = selectedColors.includes(color.id)

                return (
                  <Card
                    key={color.id}
                    className={`cursor-pointer transition-all duration-300 border-2 overflow-hidden ${
                      isSelected
                        ? "border-[#8B7B6B] shadow-xl scale-102"
                        : "border-stone-200 hover:border-stone-300 hover:shadow-lg"
                    }`}
                    onClick={() => toggleColor(color.id)}
                  >
                    <div className="relative">
                      {/* Large Color Swatch */}
                      <div className="aspect-square w-full relative" style={{ backgroundColor: color.color }}>
                        {/* Selection Indicator */}
                        {isSelected && (
                          <div className="absolute top-3 right-3 w-8 h-8 bg-[#8B7B6B] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                        )}

                        {/* Selection Ring */}
                        <div
                          className={`absolute inset-0 border-4 transition-all duration-300 ${
                            isSelected ? "border-[#8B7B6B] opacity-100" : "border-transparent opacity-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Enhanced Color Details */}
                    <div className="p-4 bg-white">
                      <h3 className="font-medium text-stone-900 mb-1">{color.name}</h3>
                      <p className="text-xs text-stone-500 mb-2">{color.hex}</p>
                      <p className="text-sm text-stone-600 mb-3 leading-relaxed">{color.description}</p>

                      {/* Sample Info */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-xs text-stone-600">
                          <span>🧪</span>
                          <span>50ml test pot</span>
                        </div>
                        <div className="text-sm font-bold text-stone-900">
                          £{color.price} <small className="font-normal text-stone-600">(inc. VAT)</small>
                        </div>
                      </div>

                      {/* Room Tags */}
                      <div className="flex flex-wrap gap-1">
                        {color.rooms.slice(0, 2).map((room) => (
                          <Badge
                            key={room}
                            variant="outline"
                            className="text-xs border-stone-300 text-stone-600 px-2 py-0"
                          >
                            {room}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {selectedColors.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4 lg:hidden z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {selectedColors.slice(0, 4).map((colorId) => {
                  const color = sampleColors.find((c) => c.id === colorId)
                  return color ? (
                    <div
                      key={colorId}
                      className="w-6 h-6 rounded-full border border-stone-300"
                      style={{ backgroundColor: color.color }}
                    />
                  ) : null
                })}
                {selectedColors.length > 4 && (
                  <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-xs font-medium">+{selectedColors.length - 4}</span>
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm font-medium">{selectedColors.length} samples</div>
                <div className="text-xs text-stone-600">£{totalPrice.toFixed(2)}</div>
                {bulkDiscount > 0 && <div className="text-xs text-[#A0785C]">10% bulk discount applied</div>}
              </div>
            </div>
            <Button onClick={addAllToCart} className="bg-[#8B7B6B] hover:bg-[#7A6B5B] text-white">
              Add All to Cart
            </Button>
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">Why Order Samples?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Test in Your Space</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                See how colors look in your specific lighting conditions throughout the day.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Perfect Combinations</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Test multiple colors together to create the perfect palette for your project.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Feel the Texture</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Experience the unique texture and finish that makes limewash so special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-4">Need Help Choosing Colors?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Our color consultants can help you select the perfect palette for your space and style.
          </p>
          <Link href="/consultancy">
            <Button
              size="lg"
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 bg-transparent"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
