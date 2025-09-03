import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Truck, Shield, Clock } from "lucide-react"
import Image from "next/image"

// This would typically come from a database or API
const getProduct = (slug: string) => {
  const products = {
    "universal-base-coat": {
      name: "Universal Base Coat",
      price: "£28.00",
      description: "Essential primer for all limewash applications on new surfaces",
      coverage: "12-15m² per litre",
      image: "/universal-base-coat-primer.png",
      features: [
        "Suitable for all interior surfaces",
        "Quick-drying formula (2-4 hours)",
        "Low VOC and eco-friendly",
        "Excellent adhesion properties",
      ],
      specifications: {
        Coverage: "12-15m² per litre",
        "Drying Time": "2-4 hours",
        "Recoat Time": "4-6 hours",
        "VOC Content": "< 30g/L",
        Finish: "Matt",
        Application: "Brush or roller",
      },
    },
  }
  return products[slug as keyof typeof products]
}

export default function BaseCoatDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="font-serif text-3xl lg:text-4xl font-medium text-stone-900 mb-4">{product.name}</h1>
            <p className="text-xl text-stone-600 mb-6 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-medium text-stone-900">{product.price}</span>
              <span className="text-stone-500">per litre</span>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-medium text-stone-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-stone-600">
                    <div className="w-2 h-2 bg-stone-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4 mb-8">
              <Button size="lg" className="w-full bg-stone-900 hover:bg-stone-800 text-white">
                Add to Cart - {product.price}
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Coverage Needed
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 text-center text-sm text-stone-600">
              <div className="flex flex-col items-center">
                <Truck className="w-5 h-5 mb-1" />
                <span>Free Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-5 h-5 mb-1" />
                <span>Quality Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-5 h-5 mb-1" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-medium text-stone-900 mb-6">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-stone-200">
                    <span className="font-medium text-stone-900">{key}</span>
                    <span className="text-stone-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
