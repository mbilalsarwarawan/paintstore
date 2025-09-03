"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calculator, Download, Truck, Shield, Plus, Minus, CheckCircle, RotateCcw } from "lucide-react"
import Link from "next/link"

const product = {
  id: "sage-whisper",
  name: "Sage Whisper",
  color: "#9ca986",
  description:
    "A calming sage green with subtle grey undertones, perfect for creating serene and sophisticated interiors.",
  category: "Limewash Paint",
  inStock: true,
  stockLevel: 12,
  sizes: [
    { size: "1L", price: 24.99, coverage: "12m²" },
    { size: "2.5L", price: 54.99, coverage: "30m²" },
    { size: "5L", price: 99.99, coverage: "60m²" },
  ],
  colors: [
    { name: "Sage Whisper", hex: "#9ca986", slug: "sage-whisper" },
    { name: "Terracotta Bloom", hex: "#A0785C", slug: "terracotta-bloom" },
    { name: "Stone Wash", hex: "#8B7B6B", slug: "stone-wash" },
    { name: "Cream White", hex: "#F5F3F0", slug: "cream-white" },
    { name: "Charcoal Grey", hex: "#4A4A4A", slug: "charcoal-grey" },
    { name: "Blue Grey", hex: "#6B7B8C", slug: "blue-grey" },
  ],
  images: [
    "/sage-green-limewash-paint-large-swatch.png",
    "/sage-green-limewash-painted-room-interior.png",
    "/sage-green-limewash-texture-close-up.png",
    "/sage-green-limewash-application-process.png",
  ],
  inspirationGallery: [
    { image: "/sage-green-living-room-inspiration.jpg", room: "Living Room", color: "Sage Whisper" },
    { image: "/sage-green-bedroom-inspiration.jpg", room: "Bedroom", color: "Sage Whisper" },
    { image: "/sage-green-kitchen-inspiration.jpg", room: "Kitchen", color: "Sage Whisper" },
    { image: "/sage-green-bathroom-inspiration.jpg", room: "Bathroom", color: "Sage Whisper" },
  ],
}

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("2.5L")
  const [selectedColor, setSelectedColor] = useState("sage-whisper")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const { dispatch } = useCart()

  const [roomSize, setRoomSize] = useState("")
  const [coats, setCoats] = useState("2")
  const [showResults, setShowResults] = useState(false)
  const [calculationResults, setCalculationResults] = useState(null)

  const handleAddToCart = () => {
    const selectedSizeData = product.sizes.find((s) => s.size === selectedSize)
    if (selectedSizeData) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: `${product.id}-${selectedSize}`,
          name: `${product.name} - Limewash Paint`,
          price: selectedSizeData.price,
          size: selectedSize,
          quantity: quantity,
          color: product.color,
          image: product.images[0],
        },
      })
      alert(`Added ${quantity}x ${product.name} (${selectedSize}) to cart!`)
    }
  }

  const calculateCoverage = () => {
    if (!roomSize) return

    const area = Number.parseFloat(roomSize)
    const numCoats = Number.parseInt(coats)
    const coveragePerLitre = 12 // m² per litre
    const wastePercentage = 0.1 // 10% contingency

    const baseLitres = (area * numCoats) / coveragePerLitre
    const litresNeeded = baseLitres * (1 + wastePercentage)

    // Calculate optimal tin combination
    const tinsNeeded = []
    let remainingLitres = litresNeeded

    // Try 5L tins first
    if (remainingLitres >= 5) {
      const fiveLTins = Math.floor(remainingLitres / 5)
      if (fiveLTins > 0) {
        tinsNeeded.push({ size: "5L", quantity: fiveLTins, price: 99.99 })
        remainingLitres -= fiveLTins * 5
      }
    }

    // Then 2.5L tins
    if (remainingLitres >= 2.5) {
      const twoFiveLTins = Math.floor(remainingLitres / 2.5)
      if (twoFiveLTins > 0) {
        tinsNeeded.push({ size: "2.5L", quantity: twoFiveLTins, price: 54.99 })
        remainingLitres -= twoFiveLTins * 2.5
      }
    }

    // Finally 1L tins for remainder
    if (remainingLitres > 0) {
      const oneLTins = Math.ceil(remainingLitres / 1)
      tinsNeeded.push({ size: "1L", quantity: oneLTins, price: 24.99 })
    }

    const totalCost = tinsNeeded.reduce((sum, tin) => sum + tin.quantity * tin.price, 0)

    const results = {
      area,
      coats: numCoats,
      litresNeeded: litresNeeded.toFixed(1),
      tinsNeeded,
      totalCost: totalCost.toFixed(2),
    }

    setCalculationResults(results)
    setShowResults(true)
  }

  const handleAddCoverageToCart = () => {
    if (calculationResults) {
      calculationResults.tinsNeeded.forEach((tin) => {
        dispatch({
          type: "ADD_ITEM",
          payload: {
            id: `${product.id}-${tin.size}-coverage`,
            name: `${product.name} - Limewash Paint`,
            price: tin.price,
            size: tin.size,
            quantity: tin.quantity,
            color: product.color,
            image: product.images[0],
          },
        })
      })
      alert(`Added coverage calculation to cart! Total: £${calculationResults.totalCost}`)
    }
  }

  const selectedSizeData = product.sizes.find((s) => s.size === selectedSize)
  const selectedColorData = product.colors.find((c) => c.slug === selectedColor)

  return (
    <div className="min-h-screen">
      <Header />

      <div className="bg-stone-50 py-4 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-stone-900">
              Paint
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-stone-900">
              Limewash Paint
            </Link>
            <span>/</span>
            <span className="text-stone-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Product Images - 60% width (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-stone-100">
              <div className="w-full h-full" style={{ backgroundColor: selectedColorData?.hex || product.color }} />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-stone-900" : "border-stone-200"
                  }`}
                >
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: index === 0 ? selectedColorData?.hex || product.color : "#f5f5f5" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - 40% width (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="font-serif text-3xl lg:text-4xl font-medium text-stone-900 mb-2">
                {product.name} - Limewash Paint
              </h1>
              <div className="mb-4">
                <span className="text-3xl font-medium text-stone-900">£{selectedSizeData?.price} (inc. VAT)</span>
                <div className="text-sm text-stone-500">VAT included in all prices</div>
              </div>
              <p className="text-stone-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-stone-900">Choose Color</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.slug}
                    onClick={() => setSelectedColor(color.slug)}
                    className={`p-3 rounded-lg border-2 text-center transition-colors ${
                      selectedColor === color.slug
                        ? "border-stone-900 bg-stone-50"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full mx-auto mb-2 border border-stone-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-xs font-medium text-stone-900">{color.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-stone-900">Size</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size.size} value={size.size}>
                      {size.size} - £{size.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Card className="p-6 bg-stone-50 border-stone-200">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-5 w-5 text-stone-600" />
                <h3 className="text-lg font-medium text-stone-900">🧮 Calculate Coverage</h3>
              </div>
              <p className="text-sm text-stone-600 mb-4">Get exact paint quantities for your project</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Room Size</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="0"
                        min="1"
                        max="1000"
                        value={roomSize}
                        onChange={(e) => setRoomSize(e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-stone-600">m²</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Number of Coats</Label>
                    <Select value={coats} onValueChange={setCoats}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Coat</SelectItem>
                        <SelectItem value="2">2 Coats (Recommended)</SelectItem>
                        <SelectItem value="3">3 Coats</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={calculateCoverage}
                  className="w-full bg-stone-900 hover:bg-stone-800"
                  disabled={!roomSize}
                >
                  Calculate
                </Button>

                {showResults && calculationResults && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-stone-200">
                    <h4 className="font-medium text-stone-900 mb-2">You Need:</h4>
                    <div className="mb-3">
                      <span className="text-2xl font-medium text-stone-900">{calculationResults.litresNeeded}</span>
                      <span className="text-sm text-stone-600 ml-1">litres</span>
                      <div className="text-xs text-stone-500">(includes 10% contingency)</div>
                    </div>

                    <h4 className="font-medium text-stone-900 mb-2">Suggested Tins:</h4>
                    <div className="space-y-1 mb-3">
                      {calculationResults.tinsNeeded.map((tin, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>
                            {tin.quantity}x {tin.size} tin
                          </span>
                          <span className="font-medium">£{(tin.quantity * tin.price).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-stone-200 pt-2 mb-3">
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>£{calculationResults.totalCost}</span>
                      </div>
                    </div>

                    <Button onClick={handleAddCoverageToCart} className="w-full bg-stone-900 hover:bg-stone-800">
                      Add Coverage Results to Cart
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            <div className="space-y-3 py-4 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-stone-900">In Stock - Ready to Ship</span>
              </div>

              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-stone-600" />
                <div>
                  <span className="text-sm font-medium text-stone-900">Free delivery on orders over £75</span>
                  <div className="text-xs text-stone-500">Standard delivery 3-5 working days</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-stone-600" />
                <span className="text-sm font-medium text-stone-900">30-day returns policy</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Quantity</Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-20 text-center"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4"
                onClick={handleAddToCart}
              >
                Add to Cart - £{((selectedSizeData?.price || 0) * quantity).toFixed(2)}
              </Button>

              <Button variant="outline" size="lg" className="w-full border-stone-300 bg-transparent">
                <Heart className="h-5 w-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <Tabs defaultValue="application" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-stone-100">
              <TabsTrigger value="application">Application Guide</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="application" className="mt-6">
              <Card className="p-6 border-stone-200">
                <h3 className="font-serif text-xl font-medium mb-4">How to Apply Limewash Paint</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-stone-200 pl-4">
                    <h4 className="font-medium text-stone-900 mb-2">Step 1: Preparation</h4>
                    <p className="text-stone-600">
                      Ensure walls are clean and dry. Remove any loose material or previous paint. Prime porous surfaces
                      with appropriate base coat.
                    </p>
                  </div>
                  <div className="border-l-4 border-stone-200 pl-4">
                    <h4 className="font-medium text-stone-900 mb-2">Step 2: Mixing</h4>
                    <p className="text-stone-600">
                      Stir thoroughly before use. Do not thin with water. Use within 4 hours of opening.
                    </p>
                  </div>
                  <div className="border-l-4 border-stone-200 pl-4">
                    <h4 className="font-medium text-stone-900 mb-2">Step 3: Application</h4>
                    <p className="text-stone-600">
                      Apply with a limewash brush in random, overlapping strokes. Work in small sections to maintain a
                      wet edge.
                    </p>
                  </div>
                  <div className="border-l-4 border-stone-200 pl-4">
                    <h4 className="font-medium text-stone-900 mb-2">Step 4: Finishing</h4>
                    <p className="text-stone-600">
                      Allow 4-6 hours between coats. Full cure takes 28 days. Avoid direct sunlight during application.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6">
              <Card className="p-6 border-stone-200">
                <h3 className="font-serif text-xl font-medium mb-4">Natural Ingredients</h3>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    Lime putty aged for 6 months
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    Natural mineral pigments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    Purified water
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                    Natural casein binder
                  </li>
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="mt-6">
              <Card className="p-6 border-stone-200">
                <h3 className="font-serif text-xl font-medium mb-4">Safety Information</h3>
                <div className="space-y-3 text-stone-600">
                  <p className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Always wear protective equipment when handling
                  </p>
                  <p className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Ensure adequate ventilation during application
                  </p>
                  <p className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Wash hands thoroughly after use
                  </p>
                  <p className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Keep out of reach of children and pets
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="downloads" className="mt-6">
              <Card className="p-6 border-stone-200">
                <h3 className="font-serif text-xl font-medium mb-4">Technical Documents</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-stone-300 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />📄 Safety Data Sheet (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-stone-300 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />📄 Technical Specification (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-stone-300 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />📄 Application Guide (PDF)
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-medium text-stone-900 mb-2">
              See {selectedColorData?.name || product.name} in Action
            </h3>
            <p className="text-stone-600">Get inspired by real customer projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.inspirationGallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-stone-100 aspect-square">
                <div
                  className="w-full h-full transition-transform group-hover:scale-105"
                  style={{ backgroundColor: selectedColorData?.hex || product.color }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white">
                    <div className="font-medium">{item.room}</div>
                    <div className="text-sm opacity-90">{item.color}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-stone-300 bg-transparent">
              View Full Gallery
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4 z-50">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-stone-900">Limewash Paint</div>
            <div className="text-sm text-stone-600">
              {selectedColorData?.name}, {selectedSize}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-lg font-medium text-stone-900">£{selectedSizeData?.price}</div>
            <Button onClick={handleAddToCart} className="bg-stone-900 hover:bg-stone-800">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
