import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-stone max-w-none">
          <h1 className="font-serif text-3xl lg:text-4xl font-medium text-stone-900 mb-8">Terms & Conditions</h1>

          <p className="text-stone-600 mb-6">Last updated: March 28, 2024</p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-stone-600 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">2. Products and Services</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Mister & Clay provides premium limewash paints, base coats, tools, and related decorating products. We
              also offer color consultancy services and educational content.
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>All product descriptions and specifications are provided in good faith</li>
              <li>Colors may vary due to screen settings and lighting conditions</li>
              <li>We recommend ordering samples before making large purchases</li>
              <li>Professional consultation is available for complex projects</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">3. Orders and Payment</h2>
            <p className="text-stone-600 leading-relaxed mb-4">When you place an order, you agree to:</p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Pay all charges incurred by your account</li>
              <li>Accept responsibility for all orders placed using your account</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">4. Shipping and Delivery</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We aim to dispatch orders within 1-2 business days. Delivery times are estimates and may vary due to
              factors beyond our control.
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Standard UK delivery: 3-5 business days</li>
              <li>Express delivery options available</li>
              <li>International shipping available to select countries</li>
              <li>Risk of loss passes to you upon delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">5. Returns and Refunds</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We want you to be completely satisfied with your purchase:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>Unopened products may be returned within 30 days</li>
              <li>Custom-mixed colors cannot be returned unless defective</li>
              <li>Return shipping costs are the responsibility of the customer</li>
              <li>Refunds will be processed within 5-7 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-stone-600 leading-relaxed">
              Mister & Clay shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl font-medium text-stone-900 mb-4">7. Contact Information</h2>
            <p className="text-stone-600 leading-relaxed">
              For questions about these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 text-stone-600">
              <p>Email: legal@misterandclay.com</p>
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
