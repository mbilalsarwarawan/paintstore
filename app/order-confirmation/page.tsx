import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Calendar } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="font-serif text-3xl lg:text-4xl font-medium text-stone-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Thank you for your order. We've received your payment and will begin processing your items shortly. You'll
            receive email updates as your order progresses.
          </p>
        </div>

        {/* Order Details */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-serif text-xl font-medium text-stone-900 mb-2">Order #MC-2024-003</h2>
                <p className="text-stone-600">Placed on March 28, 2024 at 2:34 PM</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-medium text-stone-900">£84.00</p>
                <p className="text-stone-600">Total including VAT</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t border-stone-200 pt-6">
              <h3 className="font-medium text-stone-900 mb-4">Items Ordered</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-200 rounded-lg"></div>
                    <div>
                      <p className="font-medium text-stone-900">Sage Green Limewash</p>
                      <p className="text-sm text-stone-600">2.5L • Quantity: 2</p>
                    </div>
                  </div>
                  <span className="font-medium text-stone-900">£56.00</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-200 rounded-lg"></div>
                    <div>
                      <p className="font-medium text-stone-900">Professional Brush Set</p>
                      <p className="text-sm text-stone-600">3-piece set • Quantity: 1</p>
                    </div>
                  </div>
                  <span className="font-medium text-stone-900">£28.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Truck className="w-5 h-5 text-stone-600 mr-2" />
                <h3 className="font-medium text-stone-900">Delivery Address</h3>
              </div>
              <div className="text-stone-600">
                <p>John Smith</p>
                <p>123 Design Street</p>
                <p>London, SW1A 1AA</p>
                <p>United Kingdom</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-stone-600 mr-2" />
                <h3 className="font-medium text-stone-900">Estimated Delivery</h3>
              </div>
              <div className="text-stone-600">
                <p className="font-medium text-stone-900">April 2-4, 2024</p>
                <p>Standard delivery (3-5 business days)</p>
                <p className="text-sm mt-2">You'll receive tracking information once your order ships.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h3 className="font-serif text-xl font-medium text-stone-900 mb-6">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Package className="w-8 h-8 text-stone-600" />
                </div>
                <h4 className="font-medium text-stone-900 mb-2">Processing</h4>
                <p className="text-sm text-stone-600">We'll prepare your order within 1-2 business days</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Truck className="w-8 h-8 text-stone-600" />
                </div>
                <h4 className="font-medium text-stone-900 mb-2">Shipping</h4>
                <p className="text-sm text-stone-600">Your order will be dispatched with tracking information</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <CheckCircle className="w-8 h-8 text-stone-600" />
                </div>
                <h4 className="font-medium text-stone-900 mb-2">Delivery</h4>
                <p className="text-sm text-stone-600">Receive your premium limewash products</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/account">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              View Order in Account
            </Button>
          </Link>
          <Link href="/products">
            <Button size="lg" className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
