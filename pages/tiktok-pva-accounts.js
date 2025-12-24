import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle } from 'lucide-react'

export default function TikTokPVAAccounts() {
  const pageTitle = "Buy TikTok PVA Accounts - Phone Verified TikTok Accounts | PVAshore"
  const pageDescription = "Buy TikTok PVA Accounts with phone verification. Get fresh and aged phone verified TikTok accounts for content creation and social media marketing. 100% verified, instant delivery, bulk discounts available."
  const pageUrl = "https://yourwebsite.com/tiktok-pva-accounts"
  const pageImage = "https://yourwebsite.com/images/tiktok-pva-accounts.jpg"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TikTok PVA Accounts",
    "description": "Phone verified TikTok accounts for content creation and viral marketing",
    "brand": {
      "@type": "Brand",
      "name": "PVAshore"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "12.00",
      "highPrice": "200.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "950"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="buy tiktok pva accounts, tiktok phone verified accounts, tiktok pva, verified tiktok accounts, tiktok accounts for sale, bulk tiktok accounts, viral tiktok accounts" />
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
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

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
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            TikTok PVA Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Premium TikTok accounts with phone verification for viral content creation and social media marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TikTok PVA Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account ages and packages</p>
          </div>

          {/* Fresh TikTok Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Fresh TikTok Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$50.00</div>
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
                <Link href="/checkout?service=tiktok&quantity=50&tier=fresh">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$95.00</div>
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
                <Link href="/checkout?service=tiktok&quantity=100&tier=fresh">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">300 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$275.00</div>
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
                <Link href="/checkout?service=tiktok&quantity=300&tier=fresh">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$450.00</div>
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
                <Link href="/checkout?service=tiktok&quantity=500&tier=fresh">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 1-6 Months Old TikTok Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">1-6 Months Old TikTok Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$62.50</div>
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
                <Link href="/checkout?service=tiktok&quantity=50&tier=1month">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$118.75</div>
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
                <Link href="/checkout?service=tiktok&quantity=100&tier=1month">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-black text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">300 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$343.75</div>
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
                <Link href="/checkout?service=tiktok&quantity=300&tier=1month">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-black mb-4">$562.50</div>
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
                <Link href="/checkout?service=tiktok&quantity=500&tier=1month">
                  <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Go Viral with TikTok</h2>
          <p className="text-xl mb-8 text-gray-300">Get verified TikTok accounts for trending content and social media success</p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Start Your Order
          </button>
        </div>
      </section>
      </div>
    </>
  )
}
