"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Get In Touch</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Have questions about our limewash paints or need expert advice for your project? We're here to help you
            create something beautiful.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900 mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="mt-1"
                  placeholder="Tell us about your project or ask any questions..."
                />
              </div>

              <Button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-serif text-2xl text-stone-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Address</h3>
                    <p className="text-stone-600">
                      Mister & Clay Workshop
                      <br />
                      45 Artisan Lane
                      <br />
                      Cotswolds, GL54 2AB
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+44 (0) 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">hello@misterandclay.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Workshop Hours</h3>
                    <div className="text-stone-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-serif text-xl text-stone-900 mb-4">Visit Our Workshop</h3>
              <p className="text-stone-600 mb-4">
                Experience our limewash paints firsthand at our Cotswolds workshop. See our color range, learn about
                application techniques, and get personalized advice from our experts.
              </p>
              <p className="text-sm text-stone-500">
                Workshop visits are by appointment only. Please call ahead to schedule your visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
