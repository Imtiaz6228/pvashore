import Head from 'next/head'
import Navbar from '../components/Navbar'
import ContactPopup from '../components/ContactPopup'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle, Mail } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'   // <-- Add this

export default function GmailPVAAccounts() {
  const pageTitle = "Buy Gmail PVA Accounts - Phone Verified Gmail Accounts | PVAshore"
  const pageDescription = "Buy Gmail PVA Accounts with phone verification. Get fresh and aged phone verified Gmail accounts for email marketing. 100% verified, instant delivery."
  const pageUrl = "https://yourwebsite.com/gmail-pva-accounts"
  const pageImage = "https://yourwebsite.com/images/gmail-pva-accounts.jpg"


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Gmail PVA Accounts",
    "description": "Phone verified Gmail accounts for email marketing and business use",
    "brand": {
      "@type": "Brand",
      "name": "PVAshore"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "15.00",
      "highPrice": "500.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "980"
    }
  }

  const [contactPopup, setContactPopup] = useState({ isOpen: false, service: '', quantity: '', tier: '' })

  const handleOrderClick = (service, quantity, tier) => {
    console.log('Order button clicked:', { service, quantity, tier })
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
        <meta name="keywords" content="buy gmail pva accounts, gmail phone verified accounts, gmail pva, verified gmail accounts, gmail accounts for sale, bulk gmail accounts, email marketing accounts" />
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
        <meta name="theme-color" content="#EA4335" />
        <meta name="msapplication-TileColor" content="#EA4335" />

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
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gmail PVA Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
            Premium Gmail accounts with phone verification for marketing, automation, and business success.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gmail PVA Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account ages and packages</p>
          </div>

          {/* Fresh Gmail Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Fresh Gmail Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$30.00</div>
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
                <button onClick={() => handleOrderClick('gmail', '100', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">250 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$75.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    250 Fresh PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '250', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$140.00</div>
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
                <button onClick={() => handleOrderClick('gmail', '500', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1000 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$270.00</div>
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
                <button onClick={() => handleOrderClick('gmail', '1000', 'fresh')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 1-6 Months Old Gmail Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">1-6 Months Old Gmail Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$25.00</div>
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
                    Established Accounts
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '25', '1-6months')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$40.00</div>
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
                <button onClick={() => handleOrderClick('gmail', '50', '1-6months')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$70.00</div>
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
                <button onClick={() => handleOrderClick('gmail', '100', '1-6months')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">250 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    250 Aged PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '250', '1-6months')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 1 Year Old Gmail Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">1 Year Old Gmail Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">10 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$34.00</div>
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
                    Established Trust
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '10', '1year')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">30 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$68.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    30 Aged PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '30', '1year')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$195.00</div>
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
                    Maximum Value
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '100', '1year')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">250 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$500.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    250 Aged PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '250', '1year')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 2-3 Years Old Gmail Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">2-3 Years Old Gmail Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$25.00</div>
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
                <button onClick={() => handleOrderClick('gmail', '5', '2-3years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">20 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$70.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    20 Premium PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '20', '2-3years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    50 Premium PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '50', '2-3years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$250.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    100 Premium PVA Accounts
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
                <button onClick={() => handleOrderClick('gmail', '100', '2-3years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* 5-10 Years Old Gmail Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">5-10 Years Old Gmail Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$30.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Legendary PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Authority
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '5', '5-10years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">15 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$75.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    15 Legendary PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Trust
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '15', '5-10years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">40 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    40 Legendary PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Authority
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '40', '5-10years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">70 Accounts</h4>
                <div className="text-3xl font-bold text-red-600 mb-4">$250.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    70 Legendary PVA Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Verified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Authority
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('gmail', '70', '5-10years')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Gmail PVA Accounts Today</h2>
          <p className="text-xl mb-8 text-red-100">Secure your business email solution with verified Gmail accounts</p>
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
