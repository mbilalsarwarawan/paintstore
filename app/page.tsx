import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Palette, Users, Lightbulb, Calculator, Leaf, MapPin, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F0] to-stone-200" />
        <Image
          src="/minimalist-interior-with-limewash-walls-in-natural.png"
          alt="Beautiful limewash interior"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-[#8B7B6B] mb-6 text-balance">
            Authentic Limewash Paint for Modern Living
          </h1>
          <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            Handcrafted, eco-friendly paints that breathe life into your spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-[#8B7B6B] hover:bg-[#7A6B5B] text-white px-8 py-3">
                Shop Paint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {/* Shop Paint Tile */}
            <Link href="/products" className="group">
              <Card className="relative h-64 md:h-80 overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B7B6B]/20 to-[#A0785C]/30" />
                <Image
                  src="/sage-green-limewash-painted-room-interior.png"
                  alt="Shop Paint"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Palette className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3" />
                    <h3 className="font-serif text-xl md:text-2xl font-medium">Shop Paint</h3>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Consultancy Tile */}
            <Link href="/consultancy" className="group">
              <Card className="relative h-64 md:h-80 overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A0785C]/20 to-[#8B7B6B]/30" />
                <Image
                  src="/artisan-mixing-natural-limewash-paint-in-workshop.png"
                  alt="Consultancy"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3" />
                    <h3 className="font-serif text-xl md:text-2xl font-medium">Consultancy</h3>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Inspiration Tile */}
            <Link href="/inspiration" className="group">
              <Card className="relative h-64 md:h-80 overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-300/20 to-[#F5F3F0]/30" />
                <div className="absolute inset-0 bg-[#9ca986] via-[#c17b5a] to-[#e8e2db]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Lightbulb className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3" />
                    <h3 className="font-serif text-xl md:text-2xl font-medium">Inspiration</h3>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Advice Tile */}
            <Link href="/advice" className="group">
              <Card className="relative h-64 md:h-80 overflow-hidden border-stone-200 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F0]/40 to-stone-200/40" />
                <div className="absolute inset-0 bg-[#8B7B6B]/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                    </svg>
                    <h3 className="font-serif text-xl md:text-2xl font-medium">Advice</h3>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Calculator entry point section */}
      <section className="py-12 bg-[#A0785C]/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
            <Calculator className="h-12 w-12 text-[#A0785C] mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#8B7B6B] mb-4">Calculate Coverage</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Calculate how much paint you need for your project with our easy-to-use coverage calculator
            </p>
            <Link href="/products/sage-whisper">
              <Button size="lg" className="bg-[#A0785C] hover:bg-[#8F6B4F] text-white px-8 py-3">
                Calculate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-8 bg-[#F5F3F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Leaf className="h-8 w-8 text-[#8B7B6B] mb-2" />
              <span className="text-sm font-medium text-stone-700">Eco-Friendly</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="h-8 w-8 text-[#8B7B6B] mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-medium text-stone-700">Handmade</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-[#8B7B6B] mb-2" />
              <span className="text-sm font-medium text-stone-700">Locally Produced</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-8 w-8 text-[#8B7B6B] mb-2" />
              <span className="text-sm font-medium text-stone-700">Free Shipping Over £75</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#8B7B6B] mb-4">Featured Collection</h2>
              <p className="text-stone-600 max-w-lg leading-relaxed">
                Explore our most popular limewash colors, carefully curated for modern interiors.
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sage Whisper", color: "#9ca986", price: "£45" },
              { name: "Terracotta Dream", color: "#c17b5a", price: "£45" },
              { name: "Stone Embrace", color: "#e8e2db", price: "£45" },
              { name: "Charcoal Depth", color: "#2d2d2d", price: "£45" },
            ].map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-stone-200 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <div
                      className="w-full h-full transition-transform group-hover:scale-105"
                      style={{ backgroundColor: product.color }}
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-medium text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-3">2.5L Premium Limewash</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-stone-900">{product.price}</span>
                    <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button size="sm" variant="ghost" className="text-stone-600 hover:text-stone-900">
                        Add to Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24 bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 mb-6">
                Crafted with Care,
                <span className="block">Inspired by Nature</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                At Mister & Clay, we believe in the power of natural materials to transform spaces. Our limewash paints
                are carefully crafted using traditional methods, combining centuries-old techniques with modern quality
                standards.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Each batch is made with premium lime putty and natural mineral pigments, ensuring consistent quality and
                authentic character that synthetic paints simply cannot replicate.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/artisan-mixing-natural-limewash-paint-in-workshop.png"
                alt="Artisan crafting limewash paint"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 lg:py-24 bg-[#8B7B6B]/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#8B7B6B] mb-6">
            Get inspired colour stories + 10% off samples
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Join our community for exclusive colour inspiration, decorating tips, and special offers delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7B6B] focus:border-transparent"
            />
            <Button className="bg-[#8B7B6B] hover:bg-[#7A6B5B] text-white px-8 py-3 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
