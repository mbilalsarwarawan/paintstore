"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Lock, CreditCard, Truck, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    createAccount: false,
    sameAsBilling: true,
    paymentMethod: "card",
  })

  const cartItems = [
    {
      id: "1",
      name: "Limewash Paint",
      color: "Sage Green",
      size: "2.5L",
      price: 45.0,
      quantity: 2,
      image: "/sage-green-limewash-paint-swatch.png",
    },
    {
      id: "2",
      name: "Professional Brush Set",
      color: "Natural Bristles",
      size: "Medium",
      price: 28.0,
      quantity: 1,
      image: "/medium-limewash-brush-natural-bristles.png",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 8.5
  const total = subtotal + shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Process order
      setStep(4)
    }
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="font-serif text-3xl text-stone-900 mb-4">Order Confirmed!</h1>
            <p className="text-stone-600 mb-6">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            <div className="bg-stone-50 rounded-lg p-4 mb-6">
              <p className="font-medium text-stone-900">Order #MC-2024-001</p>
              <p className="text-stone-600">Estimated delivery: 3-5 business days</p>
            </div>
            <Link href="/products">
              <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/cart" className="flex items-center gap-2 text-stone-600 hover:text-stone-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNum ? "bg-stone-900 text-white" : "bg-stone-200 text-stone-600"
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 3 && (
                  <div className={`w-16 h-0.5 mx-2 ${step > stepNum ? "bg-stone-900" : "bg-stone-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="font-serif text-xl text-stone-900 mb-6">Contact Information</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="createAccount"
                        checked={formData.createAccount}
                        onCheckedChange={(checked) => setFormData({ ...formData, createAccount: checked as boolean })}
                      />
                      <Label htmlFor="createAccount" className="text-sm">
                        Create an account for faster checkout next time
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping Information */}
              {step === 2 && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="font-serif text-xl text-stone-900 mb-6">Shipping Information</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postcode">Postcode</Label>
                      <Input
                        id="postcode"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="font-serif text-xl text-stone-900 mb-6">Payment Information</h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-stone-600 mb-4">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm">Your payment information is secure and encrypted</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1 pl-10" />
                          <CreditCard className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Smith" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3">
                {step === 3 ? "Complete Order" : "Continue"}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
              <h2 className="font-serif text-xl text-stone-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-stone-900 text-sm">{item.name}</p>
                      <p className="text-stone-600 text-xs">
                        {item.color} • {item.size}
                      </p>
                      <p className="text-stone-600 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-stone-900 text-sm">£{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="text-stone-900">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Shipping</span>
                  <span className="text-stone-900">£{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium border-t pt-2">
                  <span className="text-stone-900">Total</span>
                  <span className="text-stone-900">£{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-stone-600 text-sm">
                <Truck className="w-4 h-4" />
                <span>Estimated delivery: 3-5 business days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
