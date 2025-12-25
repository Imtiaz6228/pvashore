import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import ContactPopup from '../components/ContactPopup'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function PinterestPVAAccounts() {
  const pageTitle = "Buy Pinterest PVA Accounts - Phone Verified Pinterest Accounts | PVAshore"
  const pageDescription = "Buy Pinterest PVA Accounts with phone verification. Get fresh and aged phone verified Pinterest accounts for content curation and visual marketing. 100% verified, instant delivery, bulk discounts available."
  const pageUrl = "https://yourwebsite.com/pinterest-pva-accounts"
  const pageImage = "https://yourwebsite.com/images/pinterest-pva-accounts.jpg"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pinterest PVA Accounts",
    "description": "Phone verified Pinterest accounts for content curation and visual marketing",
    "brand": {
      "@type": "Brand",
      "name": "PVAshore"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "8.00",
      "highPrice": "200.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "750"
    }
  }

  const [contactPopup, setContactPopup] = useState({ isOpen: false, service: '', quantity: '', tier: '' })

  const handleOrderClick = (service, quantity, tier) => {
    setContactPopup({ isOpen: true, service, quantity, tier })
  }

  const closePopup = () => {
    setContactPopup({ isOpen: false, service: '', quantity: '', tier: '' })
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="buy pinterest pva accounts, pinterest phone verified accounts, pinterest pva, verified pinterest accounts, pinterest accounts for sale, bulk pinterest accounts, visual marketing accounts" />
        <meta name="author" content="PVAshore" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:site_name" content="PVAshore" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#E60023" />
        <meta name="msapplication-TileColor" content="#E60023" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </Head>

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 via-pink-500 to-red-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pinterest PVA Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
            Premium Pinterest accounts with phone verification for creative inspiration and visual marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pinterest PVA Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account ages and packages</p>
          </div>

          {/* Fresh Pinterest Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Fresh Pinterest Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$375.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    50 Fresh PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Discount
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '50', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$700.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    100 Fresh PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Value
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '100', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">300 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$1920.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    300 Fresh PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Best Bulk Price
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '300', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$3000.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    500 Fresh PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Bulk Deal
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '500', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
            </div>
          </div>

          {/* 1-6 Months Old Pinterest Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">1-6 Months Old Pinterest Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$580.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    50 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Established Accounts
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '50', '1month')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$1100.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    100 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Discount
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '100', '1month')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">300 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$3120.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    300 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Discount
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '300', '1month')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$4900.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    500 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Bulk Deal
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('pinterest', '500', '1month')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Inspired on Pinterest</h2>
          <p className="text-xl mb-8 text-red-100">Get verified Pinterest accounts for visual content creation and inspiration</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
            Start Your Order
          </button>
        </div>
      </section>

      <ContactPopup
        isOpen={contactPopup.isOpen}
        onClose={closePopup}
        service={contactPopup.service}
        quantity={contactPopup.quantity}
        tier={contactPopup.tier}
      />
      </div>
    </>
  )
}
