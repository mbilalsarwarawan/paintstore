"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: "REMOVE_ITEM", payload: id })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } })
    }
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const subtotal = state.total
  const shipping = subtotal > 75 ? 0 : 8.5
  const total = subtotal + shipping

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-stone-400 mx-auto mb-6" />
            <h1 className="font-serif text-3xl text-stone-900 mb-4">Your cart is empty</h1>
            <p className="text-stone-600 mb-8">Discover our beautiful limewash paints and tools</p>
            <Link href="/products">
              <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">Continue Shopping</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/products" className="flex items-center gap-2 text-stone-600 hover:text-stone-900">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="font-serif text-3xl text-stone-900 mb-8">Shopping Cart</h1>

            <div className="space-y-6">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full" style={{ backgroundColor: item.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-stone-900">{item.name}</h3>
                          <p className="text-stone-600 text-sm">{item.size}</p>
                        </div>
                        <button
                          onClick={() => removeItem(`${item.id}-${item.size}`)}
                          className="text-stone-400 hover:text-stone-600"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(`${item.id}-${item.size}`, Number.parseInt(e.target.value) || 1)
                            }
                            className="w-16 text-center"
                            min="1"
                          />
                          <button
                            onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-medium text-stone-900">£{(item.price * item.quantity).toFixed(2)}</p>
                          <p className="text-stone-500 text-sm">£{item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-8">
              <h2 className="font-serif text-xl text-stone-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="text-stone-900">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Shipping</span>
                  <span className="text-stone-900">{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && <p className="text-sm text-stone-500">Free shipping on orders over £75</p>}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span className="text-stone-900">Total</span>
                    <span className="text-stone-900">£{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3 mb-4">
                  Proceed to Checkout
                </Button>
              </Link>

              <div className="text-center">
                <p className="text-sm text-stone-500 mb-4">Secure checkout with SSL encryption</p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-5 bg-stone-200 rounded text-xs flex items-center justify-center">VISA</div>
                  <div className="w-8 h-5 bg-stone-200 rounded text-xs flex items-center justify-center">MC</div>
                  <div className="w-8 h-5 bg-stone-200 rounded text-xs flex items-center justify-center">AMEX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
