import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const tools = [
  {
    id: "limewash-brush-large",
    name: "Professional Limewash Brush - Large",
    price: 28,
    originalPrice: null,
    description:
      "Premium natural bristle brush designed specifically for limewash application. 6-inch width for efficient coverage.",
    image: "/professional-limewash-brush-with-natural-bristles.png",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    category: "Brushes",
  },
  {
    id: "limewash-brush-medium",
    name: "Professional Limewash Brush - Medium",
    price: 22,
    originalPrice: null,
    description: "Perfect for detailed work and smaller areas. 4-inch natural bristle brush with ergonomic handle.",
    image: "/medium-limewash-brush-natural-bristles.png",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    category: "Brushes",
  },
  {
    id: "limewash-brush-small",
    name: "Detail Limewash Brush - Small",
    price: 16,
    originalPrice: null,
    description: "Ideal for cutting in and detail work. 2-inch precision brush for clean edges and corners.",
    image: "/small-detail-limewash-brush.png",
    rating: 4.7,
    reviews: 67,
    inStock: true,
    category: "Brushes",
  },
  {
    id: "paint-tray-large",
    name: "Professional Paint Tray - Large",
    price: 18,
    originalPrice: 24,
    description: "Heavy-duty plastic tray with deep well and textured ramp. Fits standard roller covers.",
    image: "/professional-paint-tray-with-textured-ramp.png",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    category: "Trays",
  },
  {
    id: "paint-tray-medium",
    name: "Standard Paint Tray - Medium",
    price: 12,
    originalPrice: null,
    description: "Perfect for smaller projects. Lightweight yet durable with easy-clean surface.",
    image: "/medium-paint-tray-lightweight.png",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    category: "Trays",
  },
  {
    id: "brush-set",
    name: "Complete Limewash Brush Set",
    price: 58,
    originalPrice: 66,
    description: "Everything you need: Large, medium, and small brushes in a convenient storage case.",
    image: "/limewash-brush-set-in-storage-case.png",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    category: "Sets",
    badge: "Best Value",
  },
  {
    id: "protective-sheets",
    name: "Premium Drop Sheets (Pack of 3)",
    price: 15,
    originalPrice: null,
    description: "Heavy-duty cotton drop sheets to protect your floors and furniture during painting.",
    image: "/cotton-drop-sheets-for-painting-protection.png",
    rating: 4.4,
    reviews: 78,
    inStock: true,
    category: "Protection",
  },
  {
    id: "mixing-paddle",
    name: "Paint Mixing Paddle",
    price: 8,
    originalPrice: null,
    description: "Professional wooden paddle for thorough paint mixing. Essential for consistent color.",
    image: "/wooden-paint-mixing-paddle.png",
    rating: 4.3,
    reviews: 45,
    inStock: true,
    category: "Accessories",
  },
  {
    id: "starter-kit",
    name: "Limewash Starter Kit",
    price: 85,
    originalPrice: 98,
    description: "Complete kit with brushes, tray, drop sheets, and mixing paddle. Perfect for beginners.",
    image: "/complete-limewash-painting-starter-kit.png",
    rating: 4.8,
    reviews: 167,
    inStock: true,
    category: "Sets",
    badge: "Popular",
  },
]

const categories = ["All", "Brushes", "Trays", "Sets", "Protection", "Accessories"]

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-4">Professional Tools</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              High-quality brushes, trays, and accessories designed specifically for limewash application. Achieve
              professional results with the right tools.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={
                  category === "All"
                    ? "bg-stone-900 hover:bg-stone-800"
                    : "border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Card
                key={tool.id}
                className="group cursor-pointer border-stone-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden bg-stone-50">
                    <Image
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {tool.badge && <Badge className="absolute top-3 left-3 bg-stone-900 text-white">{tool.badge}</Badge>}
                  {!tool.inStock && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Badge variant="secondary" className="bg-white/90 text-stone-900">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-stone-900 text-lg leading-tight">{tool.name}</h3>
                    <Badge variant="outline" className="text-xs border-stone-300 text-stone-600 ml-2">
                      {tool.category}
                    </Badge>
                  </div>

                  <p className="text-stone-600 text-sm mb-4 leading-relaxed">{tool.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(tool.rating) ? "fill-yellow-400 text-yellow-400" : "text-stone-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-stone-600">
                      {tool.rating} ({tool.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-medium text-stone-900">£{tool.price}</span>
                      {tool.originalPrice && (
                        <span className="text-sm text-stone-500 line-through">£{tool.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      disabled={!tool.inStock}
                      className={tool.inStock ? "bg-stone-900 hover:bg-stone-800" : ""}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {tool.inStock ? "Add to Cart" : "Notify Me"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tools */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">Why Choose Our Professional Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Designed for Limewash</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Every tool is specifically chosen and tested for optimal limewash application and finish quality.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Professional Quality</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Used by professional decorators and recommended by our expert consultants.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Guaranteed Results</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Quality tools ensure consistent application and help you achieve the perfect limewash finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-4">Complete Your Project</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Browse our paint collection to find the perfect colors for your limewash project.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">
              Shop Paint Collection
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
