"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Video, FileText, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

const consultants = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Senior Color Consultant",
    specialties: ["Residential Interiors", "Color Psychology", "Natural Materials"],
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg?key=consultant1",
    bio: "Sarah specializes in creating harmonious color palettes that reflect your personality and lifestyle. With a background in interior design and color psychology, she helps clients discover their perfect limewash colors.",
  },
  {
    id: "james-wright",
    name: "James Wright",
    title: "Master Craftsman & Consultant",
    specialties: ["Traditional Techniques", "Commercial Projects", "Restoration"],
    experience: "15 years",
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?key=consultant2",
    bio: "James brings decades of hands-on experience with traditional limewash techniques. He's perfect for complex projects, restoration work, and clients seeking authentic application methods.",
  },
  {
    id: "emma-taylor",
    name: "Emma Taylor",
    title: "Contemporary Design Specialist",
    specialties: ["Modern Interiors", "Minimalist Design", "Sustainable Living"],
    experience: "6 years",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?key=consultant3",
    bio: "Emma focuses on contemporary applications of limewash in modern homes. She's passionate about sustainable design and helping clients create beautiful, eco-friendly spaces.",
  },
]

const services = [
  {
    id: "video-call",
    name: "1:1 Video Consultation",
    duration: "60 minutes",
    price: 75,
    description: "Personal video call with expert color guidance, room analysis, and custom recommendations.",
    features: [
      "Live video consultation",
      "Room lighting analysis",
      "Custom color palette",
      "Application guidance",
      "Follow-up email summary",
    ],
    popular: true,
  },
  {
    id: "digital-package",
    name: "Digital Color Package",
    duration: "3-5 business days",
    price: 45,
    description: "Comprehensive digital consultation based on your photos and requirements.",
    features: [
      "Photo-based room analysis",
      "Detailed color recommendations",
      "Digital mood board",
      "Shopping list with quantities",
      "Application tips document",
    ],
    popular: false,
  },
  {
    id: "premium-package",
    name: "Premium Design Package",
    duration: "90 minutes + materials",
    price: 150,
    description: "Complete design consultation with physical samples and detailed project plan.",
    features: [
      "Extended video consultation",
      "Physical sample collection",
      "Detailed project timeline",
      "Supplier recommendations",
      "30-day follow-up support",
    ],
    popular: false,
  },
]

export default function ConsultancyPage() {
  const [selectedService, setSelectedService] = useState("video-call")
  const [selectedConsultant, setSelectedConsultant] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    roomSize: "",
    timeline: "",
    description: "",
  })

  const selectedServiceData = services.find((s) => s.id === selectedService)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 mb-6">
              Expert Color Consultancy
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Get personalized guidance from our color experts. Whether you're planning a single room or entire home,
              we'll help you choose the perfect limewash colors for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">
                Book Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3 bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Service Selection */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">Choose Your Service</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all duration-200 border-2 ${
                      selectedService === service.id
                        ? "border-stone-900 shadow-lg"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-xl text-stone-900">{service.name}</h3>
                            {service.popular && <Badge className="bg-stone-900 text-white">Most Popular</Badge>}
                          </div>
                          <p className="text-stone-600 leading-relaxed">{service.description}</p>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-2xl font-medium text-stone-900">£{service.price}</div>
                          <div className="text-sm text-stone-500 flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {service.duration}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-stone-600">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Consultant Selection */}
            <div>
              <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">Meet Our Experts</h2>
              <div className="space-y-4">
                {consultants.map((consultant) => (
                  <Card
                    key={consultant.id}
                    className={`cursor-pointer transition-all duration-200 border-2 ${
                      selectedConsultant === consultant.id
                        ? "border-stone-900 shadow-lg"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                    onClick={() => setSelectedConsultant(consultant.id)}
                  >
                    <div className="p-6">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-stone-200 rounded-full flex-shrink-0 overflow-hidden">
                          <Image
                            src={consultant.image || "/placeholder.svg"}
                            alt={consultant.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-medium text-lg text-stone-900">{consultant.name}</h3>
                              <p className="text-stone-600">{consultant.title}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{consultant.rating}</span>
                                <span className="text-sm text-stone-500">({consultant.reviews})</span>
                              </div>
                              <div className="text-sm text-stone-500">{consultant.experience} experience</div>
                            </div>
                          </div>

                          <p className="text-stone-600 text-sm leading-relaxed mb-3">{consultant.bio}</p>

                          <div className="flex flex-wrap gap-2">
                            {consultant.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-stone-300 text-stone-600">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-stone-200 sticky top-24">
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-6">Book Your Consultation</h3>

              {selectedServiceData && (
                <div className="mb-6 p-4 bg-stone-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-stone-900">{selectedServiceData.name}</h4>
                    <span className="font-medium text-stone-900">£{selectedServiceData.price}</span>
                  </div>
                  <p className="text-sm text-stone-600">{selectedServiceData.duration}</p>
                </div>
              )}

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="project-type">Project Type</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-room">Single Room</SelectItem>
                      <SelectItem value="multiple-rooms">Multiple Rooms</SelectItem>
                      <SelectItem value="whole-house">Whole House</SelectItem>
                      <SelectItem value="commercial">Commercial Space</SelectItem>
                      <SelectItem value="restoration">Restoration Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="room-size">Room Size (m²)</Label>
                    <Input
                      id="room-size"
                      value={formData.roomSize}
                      onChange={(e) => setFormData({ ...formData, roomSize: e.target.value })}
                      placeholder="e.g. 25"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="When?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="planning">Just planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your project, style preferences, and any specific challenges..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation - £{selectedServiceData?.price}
                </Button>

                <p className="text-xs text-stone-500 text-center">
                  We'll contact you within 24 hours to schedule your consultation
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Our Consultancy */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-stone-900 mb-6">Why Choose Our Consultancy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-stone-600" />
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Expert Guidance</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our certified color consultants have years of experience with limewash applications and color theory.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-stone-600" />
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Detailed Plans</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Receive comprehensive project plans, shopping lists, and step-by-step application guidance.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-stone-600" />
              </div>
              <h3 className="font-medium text-stone-900 mb-2">Guaranteed Results</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We stand behind our recommendations with ongoing support and satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
