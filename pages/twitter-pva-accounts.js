import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle } from 'lucide-react'

export default function TwitterPVAAccounts() {
  const pageTitle = "Buy Twitter PVA Accounts - Phone Verified Twitter Accounts | PVAshore"
  const pageDescription = "Buy Twitter PVA Accounts with phone verification. Get fresh and aged phone verified Twitter accounts for social media marketing and influence building. 100% verified, instant delivery, bulk discounts available."
  const pageUrl = "https://yourwebsite.com/twitter-pva-accounts"
  const pageImage = "https://yourwebsite.com/images/twitter-pva-accounts.jpg"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Twitter PVA Accounts",
    "description": "Phone verified Twitter accounts for social media marketing and influence building",
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
      "ratingValue": "4.8",
      "reviewCount": "920"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="buy twitter pva accounts, twitter phone verified accounts, twitter pva, verified twitter accounts, twitter accounts for sale, bulk twitter accounts, x accounts, twitter marketing" />
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
        <meta name="theme-color" content="#1DA1F2" />
        <meta name="msapplication-TileColor" content="#1DA1F2" />

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
      <section className="bg-gradient-to-br from-sky-500 via-sky-400 to-blue-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Twitter/X PVA Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100 max-w-3xl mx-auto">
            Premium Twitter/X accounts with phone verification for social media influence and marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Twitter/X PVA Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account ages and packages</p>
          </div>

          {/* Fresh Twitter Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">Fresh Twitter/X Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$25.00</div>
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
                <Link href="/checkout?service=twitter&quantity=50&tier=fresh">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">100 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$50.00</div>
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
                <Link href="/checkout?service=twitter&quantity=100&tier=fresh">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-sky-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">220 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$100.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    220 Fresh PVA Accounts
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
                <Link href="/checkout?service=twitter&quantity=220&tier=fresh">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">500 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$220.00</div>
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
                <Link href="/checkout?service=twitter&quantity=500&tier=fresh">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 1-6 Months Old Twitter Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">1-6 Months Old Twitter/X Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$37.50</div>
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
                <Link href="/checkout?service=twitter&quantity=25&tier=1-6months">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$75.00</div>
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
                <Link href="/checkout?service=twitter&quantity=50&tier=1-6months">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-sky-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">110 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    110 Aged PVA Accounts
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
                <Link href="/checkout?service=twitter&quantity=110&tier=1-6months">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">250 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$330.00</div>
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
                <Link href="/checkout?service=twitter&quantity=250&tier=1-6months">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 1 Year Old Twitter Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">1 Year Old Twitter/X Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$43.13</div>
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
                    Established Trust
                  </li>
                </ul>
                <Link href="/checkout?service=twitter&quantity=25&tier=1year">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$86.25</div>
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
                    Bulk Savings
                  </li>
                </ul>
                <Link href="/checkout?service=twitter&quantity=50&tier=1year">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-sky-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">110 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$172.50</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    110 Aged PVA Accounts
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
                <Link href="/checkout?service=twitter&quantity=110&tier=1year">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">250 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$379.50</div>
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
                    Ultimate Discount
                  </li>
                </ul>
                <Link href="/checkout?service=twitter&quantity=250&tier=1year">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2-3 Years Old Twitter Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-sky-600">2-3 Years Old Twitter/X Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$49.60</div>
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
                    Maximum Trust
                  </li>
                </ul>
                <Link href="/checkout?service=twitter&quantity=25&tier=2years">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">50 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$99.19</div>
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
                    Elite Discount
                  </li>
                </ul>
                <Link href="/checkout?service=twitter&quantity=50&tier=2years">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-sky-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">110 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$198.38</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    110 Premium PVA Accounts
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
                <Link href="/checkout?service=twitter&quantity=110&tier=2years">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">250 Accounts</h4>
                <div className="text-3xl font-bold text-sky-600 mb-4">$436.43</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    250 Premium PVA Accounts
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
                <Link href="/checkout?service=twitter&quantity=250&tier=2years">
                  <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Build Your Twitter/X Influence Today</h2>
          <p className="text-xl mb-8 text-sky-100">Get verified Twitter/X accounts for effective social media marketing</p>
          <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300 transform hover:scale-105">
            Start Your Order
          </button>
        </div>
      </section>
      </div>
    </>
  )
}
