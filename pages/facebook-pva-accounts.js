import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ContactPopup from '../components/ContactPopup'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle } from 'lucide-react'

export default function FacebookPVAAccounts() {
  const [contactPopup, setContactPopup] = useState({ isOpen: false, service: '', quantity: '', tier: '' })

  const handleOrderClick = (service, quantity, tier) => {
    setContactPopup({ isOpen: true, service, quantity, tier })
  }

  const closePopup = () => {
    setContactPopup({ isOpen: false, service: '', quantity: '', tier: '' })
  }

  const pageTitle = "Buy Facebook PVA Accounts - Phone Verified Facebook Accounts | PVAshore"
  const pageDescription = "Buy Facebook PVA Accounts with phone verification. Get fresh and aged phone verified Facebook accounts for social media marketing. 100% verified, instant delivery, bulk discounts available."
  const pageUrl = "https://yourwebsite.com/facebook-pva-accounts"
  const pageImage = "https://yourwebsite.com/images/facebook-pva-accounts.jpg"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Facebook PVA Accounts",
    "description": "Phone verified Facebook accounts for social media marketing and growth",
    "brand": {
      "@type": "Brand",
      "name": "PVAshore"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "15.00",
      "highPrice": "300.00",
      "offerCount": "12",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="buy facebook pva accounts, facebook phone verified accounts, facebook pva, verified facebook accounts, facebook accounts for sale, bulk facebook accounts" />
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
        <meta name="theme-color" content="#1877F2" />
        <meta name="msapplication-TileColor" content="#1877F2" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Facebook PVA Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Premium Facebook accounts with phone verification for social media marketing and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Facebook PVA Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account ages and packages</p>
          </div>

          {/* Fresh Facebook Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Fresh Facebook Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$30.00</div>
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
                    Bulk Discount
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '100', 'fresh')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">200 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$50.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    200 Fresh PVA Accounts
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
                <button
                  onClick={() => handleOrderClick('Facebook', '200', 'fresh')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$120.00</div>
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
                    Best Bulk Price
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '500', 'fresh')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1000 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$220.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    1000 Fresh PVA Accounts
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
                <button
                  onClick={() => handleOrderClick('Facebook', '1000', 'fresh')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 1-6 Months Old Facebook Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">1-6 Months Old Facebook Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">10 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$15.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Aged PVA Accounts
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
                <button
                  onClick={() => handleOrderClick('Facebook', '10', '1-6months')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$60.00</div>
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
                    Bulk Discount
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '50', '1-6months')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$120.00</div>
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
                    Premium Discount
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '100', '1-6months')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">600 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$600.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    600 Aged PVA Accounts
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
                <button
                  onClick={() => handleOrderClick('Facebook', '600', '1-6months')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 1 Year Old Facebook Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">1 Year Old Facebook Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$20.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Established Trust
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '5', '1year')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$80.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Savings
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '25', '1year')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">60 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    60 Aged PVA Accounts
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
                <button
                  onClick={() => handleOrderClick('Facebook', '60', '1year')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$250.00</div>
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
                    Ultimate Discount
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '100', '1year')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 2-3 Years Old Facebook Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">2-3 Years Old Facebook Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$25.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Aged PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Trust
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '5', '2years')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">15 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$60.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    15 Premium PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Elite Discount
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '15', '2years')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">40 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$120.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    40 Premium PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Best Value
                  </li>
                </ul>
                <button
                  onClick={() => handleOrderClick('Facebook', '40', '2years')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">90 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$250.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    90 Premium PVA Accounts
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
                <button
                  onClick={() => handleOrderClick('Facebook', '90', '2years')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Boost Your Facebook Presence Today</h2>
          <p className="text-xl mb-8 text-blue-100">Get verified Facebook accounts for effective social media marketing</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
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
