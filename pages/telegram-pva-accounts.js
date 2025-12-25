import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import ContactPopup from '../components/ContactPopup'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle, Send, Users, Globe, Lock } from 'lucide-react'
import { useState } from 'react'

export default function TelegramPVAAccounts() {
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
        <title>Buy Premium Telegram PVA Accounts | Secure Messaging & Bot Creation</title>
        <meta name="description" content="Get verified Telegram PVA accounts for secure messaging, bot creation, and automated marketing. Premium accounts with phone verification. Starting from $12. Trusted provider." />
        <meta name="keywords" content="telegram accounts, telegram pva, telegram bots, secure messaging, telegram api, buy telegram accounts" />
        <link rel="canonical" href="https://yourdomain.com/telegram-pva-accounts" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://yourdomain.com/telegram-pva-accounts" />
        <meta property="og:title" content="Buy Premium Telegram PVA Accounts | Secure Messaging & Bot Creation" />
        <meta property="og:description" content="Get verified Telegram PVA accounts for secure messaging, bot creation, and automated marketing. Premium accounts with phone verification." />
        <meta property="og:image" content="https://yourdomain.com/images/telegram-accounts-og.jpg" />
        <meta property="og:image:alt" content="Premium Telegram PVA Accounts for Secure Messaging" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/telegram-pva-accounts" />
        <meta property="twitter:title" content="Buy Premium Telegram PVA Accounts | Secure Messaging & Bot Creation" />
        <meta property="twitter:description" content="Get verified Telegram PVA accounts for secure messaging, bot creation, and automated marketing. Premium accounts with phone verification." />
        <meta property="twitter:image" content="https://yourdomain.com/images/telegram-accounts-og.jpg" />
        <meta property="twitter:image:alt" content="Premium Telegram PVA Accounts for Secure Messaging" />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Telegram PVA Accounts",
              "description": "Premium Telegram accounts with phone verification for secure messaging, bot creation, and automated marketing.",
              "image": "https://yourdomain.com/images/telegram-accounts-og.jpg",
              "brand": {
                "@type": "Brand",
                "name": "PVA Panel"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "1 Standard Telegram Account",
                  "price": "12.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "5 Standard Telegram Accounts",
                  "price": "55.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "10 Standard Telegram Accounts",
                  "price": "100.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "25 Standard Telegram Accounts",
                  "price": "225.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "1 Premium Telegram Account",
                  "price": "20.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "5 Premium Telegram Accounts",
                  "price": "90.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "10 Premium Telegram Accounts",
                  "price": "165.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "25 Premium Telegram Accounts",
                  "price": "375.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "156"
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Telegram PVA Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Premium Telegram accounts with phone verification for secure messaging, bot creation, and automated marketing.
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



      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Telegram PVA Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account packages</p>
          </div>

          {/* Standard Telegram Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Standard Telegram Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Account</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$12.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Verified Telegram Account
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Phone Number Included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Instant Delivery
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '1', 'standard')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$55.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Verified Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Discount Applied
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    24/7 Support
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '5', 'standard')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$100.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Verified Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Bulk Savings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Priority Delivery
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '10', 'standard')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$225.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Verified Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Discount
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Dedicated Support
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '25', 'standard')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
            </div>
          </div>

          {/* Premium Telegram Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Premium Telegram Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Premium Account</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$20.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Verified Account
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enhanced Privacy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Priority Support
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '1', 'premium')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Premium Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$90.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Advanced Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Premium Discount
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '5', 'premium')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Premium Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$165.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Value
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    VIP Support
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '10', 'premium')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Premium Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$375.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Savings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Solution
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('telegram', '25', 'premium')} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Telegram PVA Accounts Today</h2>
          <p className="text-xl mb-8 text-blue-100">Secure, verified Telegram accounts for your messaging and automation needs</p>
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
