import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Download, Clock, ArrowRight, BookOpen, Video, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "paint-for-your",
    name: "Paint For Your",
    description: "Room-specific guidance and color recommendations",
    icon: "🏠",
    articles: 12,
  },
  {
    id: "how-to",
    name: "How To",
    description: "Step-by-step application guides and techniques",
    icon: "🎨",
    articles: 18,
  },
  {
    id: "tools-for-job",
    name: "Tools For The Job",
    description: "Equipment guides and tool recommendations",
    icon: "🔧",
    articles: 8,
  },
  {
    id: "faqs",
    name: "FAQs",
    description: "Frequently asked questions and quick answers",
    icon: "❓",
    articles: 25,
  },
  {
    id: "trade",
    name: "Trade",
    description: "Professional tips and commercial applications",
    icon: "👷",
    articles: 15,
  },
]

const featuredGuides = [
  {
    id: "how-to-limewash",
    title: "How to Apply Limewash Paint",
    description: "Complete step-by-step guide to achieving the perfect limewash finish",
    category: "How To",
    readTime: "8 min read",
    difficulty: "Beginner",
    image: "/placeholder.svg?key=limewash-guide",
    downloadable: true,
    videoAvailable: true,
  },
  {
    id: "calculate-quantities",
    title: "Calculate Paint Quantities",
    description: "Learn how to measure your space and calculate exactly how much paint you need",
    category: "How To",
    readTime: "5 min read",
    difficulty: "Beginner",
    image: "/placeholder.svg?key=calculate-guide",
    downloadable: true,
    videoAvailable: false,
  },
  {
    id: "color-matching",
    title: "Color Matching & Mixing",
    description: "Professional techniques for achieving consistent color across your project",
    category: "Trade",
    readTime: "12 min read",
    difficulty: "Advanced",
    image: "/placeholder.svg?key=color-guide",
    downloadable: true,
    videoAvailable: true,
  },
  {
    id: "troubleshooting",
    title: "Common Issues & Solutions",
    description: "Identify and fix common limewash application problems",
    category: "FAQs",
    readTime: "6 min read",
    difficulty: "Intermediate",
    image: "/placeholder.svg?key=troubleshooting-guide",
    downloadable: false,
    videoAvailable: false,
  },
]

const quickTips = [
  {
    title: "Always dampen your brush",
    description: "A slightly damp brush helps achieve smoother application and better texture.",
  },
  {
    title: "Work in small sections",
    description: "Apply limewash in 1-2 square meter sections to maintain a wet edge.",
  },
  {
    title: "Cross-hatch technique",
    description: "Use random, overlapping strokes for the most natural limewash texture.",
  },
  {
    title: "Allow proper drying time",
    description: "Wait 4-6 hours between coats and 28 days for full cure.",
  },
]

export default function AdvicePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 mb-6">
              Decorating Advice Center
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Everything you need to know about limewash painting. From beginner guides to professional techniques,
              we've got you covered.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input placeholder="Search guides and articles..." className="pl-10 pr-4 py-3 text-base" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/advice/${category.id}`}>
                <Card className="group cursor-pointer border-stone-200 hover:shadow-lg transition-all duration-300 text-center p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-medium text-stone-900 mb-2">{category.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{category.description}</p>
                  <Badge variant="outline" className="border-stone-300 text-stone-600">
                    {category.articles} articles
                  </Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mb-2">Featured Guides</h2>
              <p className="text-stone-600">Essential guides to get you started with limewash painting</p>
            </div>
            <Link href="/advice/all">
              <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent">
                View All Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredGuides.map((guide) => (
              <Card
                key={guide.id}
                className="group cursor-pointer border-stone-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 aspect-square md:aspect-auto relative overflow-hidden">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs border-stone-300 text-stone-600">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          guide.difficulty === "Beginner"
                            ? "border-green-300 text-green-700 bg-green-50"
                            : guide.difficulty === "Intermediate"
                              ? "border-yellow-300 text-yellow-700 bg-yellow-50"
                              : "border-red-300 text-red-700 bg-red-50"
                        }`}
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">{guide.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{guide.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-stone-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </div>
                        {guide.videoAvailable && (
                          <div className="flex items-center gap-1">
                            <Video className="h-3 w-3" />
                            Video
                          </div>
                        )}
                        {guide.downloadable && (
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            PDF
                          </div>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="text-stone-600 hover:text-stone-900 p-0">
                        Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-8 text-center">Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickTips.map((tip, index) => (
              <Card key={index} className="p-6 border-stone-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-2">{tip.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">Technical Downloads</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Download our comprehensive guides, safety data sheets, and technical specifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent p-6 h-auto flex-col"
            >
              <FileText className="h-8 w-8 mb-2" />
              <span className="font-medium">Application Guide</span>
              <span className="text-xs text-stone-500">Complete PDF guide</span>
            </Button>
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent p-6 h-auto flex-col"
            >
              <Download className="h-8 w-8 mb-2" />
              <span className="font-medium">Safety Data Sheets</span>
              <span className="text-xs text-stone-500">All product SDS files</span>
            </Button>
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent p-6 h-auto flex-col"
            >
              <BookOpen className="h-8 w-8 mb-2" />
              <span className="font-medium">Technical Specs</span>
              <span className="text-xs text-stone-500">Detailed specifications</span>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-4">Still Have Questions?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Our expert consultants are here to help with personalized advice for your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultancy">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
