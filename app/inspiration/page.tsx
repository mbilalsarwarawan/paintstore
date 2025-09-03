"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, Clock, ArrowRight, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const inspirationContent = [
  {
    id: "sage-bedroom",
    title: "Serene Sage Bedroom Retreat",
    category: "By Room",
    color: "Sage Whisper",
    colorHex: "#9ca986",
    image: "/placeholder.svg?key=sage-bedroom",
    readTime: "3 min read",
    description: "Transform your bedroom into a calming sanctuary with soft sage limewash walls.",
    tags: ["Bedroom", "Sage", "Minimalist"],
    featured: true,
  },
  {
    id: "terracotta-kitchen",
    title: "Warm Terracotta Kitchen",
    category: "By Color",
    color: "Terracotta Dream",
    colorHex: "#c17b5a",
    image: "/placeholder.svg?key=terracotta-kitchen",
    readTime: "4 min read",
    description: "Create a welcoming kitchen space with rich terracotta tones and natural textures.",
    tags: ["Kitchen", "Terracotta", "Warm"],
    featured: false,
  },
  {
    id: "color-drenching",
    title: "The Art of Color Drenching",
    category: "Discover",
    color: "Multiple Colors",
    colorHex: "#9ca986",
    image: "/placeholder.svg?key=color-drenching",
    readTime: "5 min read",
    description: "Learn how to use a single color throughout a room for maximum impact.",
    tags: ["Technique", "Design", "Bold"],
    featured: true,
  },
  {
    id: "neutral-living",
    title: "Timeless Neutral Living Room",
    category: "By Room",
    color: "Stone Embrace",
    colorHex: "#e8e2db",
    image: "/placeholder.svg?key=neutral-living",
    readTime: "3 min read",
    description: "Elegant neutral tones create a sophisticated and versatile living space.",
    tags: ["Living Room", "Neutral", "Elegant"],
    featured: false,
  },
  {
    id: "blue-bathroom",
    title: "Coastal Blue Bathroom",
    category: "By Color",
    color: "Ocean Mist",
    colorHex: "#7a9b9e",
    image: "/placeholder.svg?key=blue-bathroom",
    readTime: "4 min read",
    description: "Bring coastal vibes indoors with soft blue limewash in your bathroom.",
    tags: ["Bathroom", "Blue", "Coastal"],
    featured: false,
  },
  {
    id: "dark-dining",
    title: "Dramatic Dark Dining Room",
    category: "Get The Look",
    color: "Charcoal Depth",
    colorHex: "#2d2d2d",
    image: "/placeholder.svg?key=dark-dining",
    readTime: "4 min read",
    description: "Create drama and intimacy with deep charcoal limewash walls.",
    tags: ["Dining Room", "Dark", "Dramatic"],
    featured: true,
  },
  {
    id: "texture-techniques",
    title: "Limewash Texture Techniques",
    category: "Discover",
    color: "Various",
    colorHex: "#c17b5a",
    image: "/placeholder.svg?key=texture-techniques",
    readTime: "6 min read",
    description: "Master different application techniques to achieve unique textures and finishes.",
    tags: ["Technique", "Application", "Tutorial"],
    featured: false,
  },
  {
    id: "small-spaces",
    title: "Limewash in Small Spaces",
    category: "Get The Look",
    color: "Cream Cloud",
    colorHex: "#f7f5f3",
    image: "/placeholder.svg?key=small-spaces",
    readTime: "3 min read",
    description: "Make small rooms feel larger and brighter with the right limewash colors.",
    tags: ["Small Spaces", "Light", "Tips"],
    featured: false,
  },
  {
    id: "heritage-restoration",
    title: "Heritage Home Restoration",
    category: "Discover",
    color: "Traditional Mix",
    colorHex: "#e8e2db",
    image: "/placeholder.svg?key=heritage-restoration",
    readTime: "7 min read",
    description: "Restore period properties with authentic limewash colors and techniques.",
    tags: ["Heritage", "Restoration", "Traditional"],
    featured: false,
  },
]

const categories = ["All", "By Color", "By Room", "Discover", "Get The Look"]
const colors = [
  "All Colors",
  "Sage Whisper",
  "Terracotta Dream",
  "Stone Embrace",
  "Ocean Mist",
  "Charcoal Depth",
  "Cream Cloud",
]

export default function InspirationPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedColor, setSelectedColor] = useState("All Colors")
  const [likedItems, setLikedItems] = useState<string[]>([])

  const toggleLike = (id: string) => {
    setLikedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredContent = inspirationContent.filter((item) => {
    const categoryMatch =
      activeTab === "all" ||
      item.category === categories.find((cat) => cat.toLowerCase().replace(/\s+/g, "-") === activeTab)
    const colorMatch = selectedColor === "All Colors" || item.color === selectedColor
    return categoryMatch && colorMatch
  })

  const featuredContent = inspirationContent.filter((item) => item.featured)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 mb-6">
              Inspiration & Ideas
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Discover beautiful limewash applications, color combinations, and design ideas to inspire your next
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-8">Featured Ideas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.slice(0, 3).map((item, index) => (
              <Card
                key={item.id}
                className={`group cursor-pointer border-stone-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-stone-900">Featured</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/90 hover:bg-white text-stone-900 w-8 h-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(item.id)
                      }}
                    >
                      <Heart className={`h-4 w-4 ${likedItems.includes(item.id) ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white text-stone-900 w-8 h-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: item.colorHex }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs border-stone-300 text-stone-600">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-stone-500">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className={`font-serif font-medium text-stone-900 mb-2 ${index === 0 ? "text-2xl" : "text-lg"}`}>
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-stone-200 text-stone-500">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-stone-600 hover:text-stone-900 p-0">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
              <TabsList className="grid grid-cols-5 bg-white border border-stone-200">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="by-color">By Color</TabsTrigger>
                <TabsTrigger value="by-room">By Room</TabsTrigger>
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="get-the-look">Get The Look</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-stone-600" />
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="text-sm border border-stone-300 rounded-md px-3 py-1 bg-white"
                  >
                    {colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContent.map((item) => (
                  <Card
                    key={item.id}
                    className="group cursor-pointer border-stone-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-white/90 hover:bg-white text-stone-900 w-8 h-8 p-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleLike(item.id)
                          }}
                        >
                          <Heart
                            className={`h-4 w-4 ${likedItems.includes(item.id) ? "fill-red-500 text-red-500" : ""}`}
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-white/90 hover:bg-white text-stone-900 w-8 h-8 p-0"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: item.colorHex }}
                        />
                        <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">{item.color}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-stone-300 text-stone-600">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-stone-500">
                          <Clock className="h-3 w-3" />
                          {item.readTime}
                        </div>
                      </div>
                      <h3 className="font-serif text-lg font-medium text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs border-stone-200 text-stone-500">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="text-stone-600 hover:text-stone-900 p-0">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-4">Ready to Create Your Own Masterpiece?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Get inspired by our gallery and start your limewash journey with our expert guidance and premium products.
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
