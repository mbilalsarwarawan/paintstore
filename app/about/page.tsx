import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"  

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 text-balance">
            Crafting Natural Beauty Since 1987
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto text-pretty">
            At Mister & Clay, we believe in the transformative power of natural limewash paint. Our artisanal approach
            combines traditional techniques with modern innovation to create paints that breathe life into any space.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-stone-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Founded by master craftsman James Clay in 1987, Mister & Clay began as a small workshop dedicated to
                  reviving the ancient art of limewash painting. What started as a passion project to restore historic
                  buildings has grown into a trusted name in premium natural paints.
                </p>
                <p>
                  Our journey began when James discovered traditional limewash techniques while restoring a 16th-century
                  manor house. Fascinated by the material's natural beauty and environmental benefits, he spent years
                  perfecting formulations that honor tradition while meeting modern performance standards.
                </p>
                <p>
                  Today, we continue this legacy with the same commitment to quality, sustainability, and craftsmanship
                  that has defined us for over three decades.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/artisan-mixing-natural-limewash-paint-in-workshop.png"
                alt="Artisan mixing natural limewash paint in workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-stone-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">Sustainability</h3>
              <p className="text-stone-600">
                Our limewash paints are made from natural materials, are fully biodegradable, and have a minimal
                environmental impact throughout their lifecycle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">Craftsmanship</h3>
              <p className="text-stone-600">
                Every batch is carefully crafted using traditional methods, ensuring consistent quality and the unique
                character that only handmade products can provide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">Heritage</h3>
              <p className="text-stone-600">
                We honor centuries-old techniques while innovating for modern needs, preserving traditional crafts for
                future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-stone-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-stone-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">James Clay</h3>
              <p className="text-stone-600 mb-2">Founder & Master Craftsman</p>
              <p className="text-sm text-stone-500">
                Over 35 years of experience in traditional limewash techniques and historic restoration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-stone-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">Sarah Mitchell</h3>
              <p className="text-stone-600 mb-2">Color Consultant & Designer</p>
              <p className="text-sm text-stone-500">
                Specialist in color theory and interior design with a passion for natural materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-stone-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">Marcus Thompson</h3>
              <p className="text-stone-600 mb-2">Production Manager</p>
              <p className="text-sm text-stone-500">
                Ensures every batch meets our exacting standards for quality and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Discover the natural beauty and timeless elegance of limewash paint. Our team is here to help you find the
            perfect colors for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3">Shop Paint</Button>
            </Link>
            <Link href="/consultancy">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3 bg-transparent"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
