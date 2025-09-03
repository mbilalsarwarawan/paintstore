import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-stone max-w-none">
          <h1 className="font-serif text-3xl lg:text-4xl font-medium text-stone-900 mb-8">Privacy Policy</h1>

          <p className="text-stone-600 mb-6">Last updated: March 28, 2024</p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">Information We Collect</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, make a purchase,
              subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">How We Use Your Information</h2>
            <p className="text-stone-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">Information Sharing</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except as
              described in this policy. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Service providers who assist us in operating our business</li>
              <li>Payment processors for transaction processing</li>
              <li>Shipping companies for order fulfillment</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">Data Security</h2>
            <p className="text-stone-600 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">Your Rights</h2>
            <p className="text-stone-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your personal information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">Contact Us</h2>
            <p className="text-stone-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-stone-600">
              <p>Email: privacy@misterandclay.com</p>
              <p>Phone: +44 20 7123 4567</p>
              <p>Address: 123 Design Street, London, SW1A 1AA</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
