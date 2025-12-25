import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import ContactPopup from '../components/ContactPopup'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle, Smartphone, Users, Globe, Award } from 'lucide-react'
import { useState } from 'react'

export default function SnapchatAccounts() {
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
        <title>Buy Premium Snapchat PVA Accounts | Gen Z Marketing & Influencer Platform</title>
        <meta name="description" content="Get verified Snapchat PVA accounts for influencer marketing and Gen Z audience. Premium accounts with phone verification, AR features, and ads ready. Starting from $12. Trusted provider." />
        <meta name="keywords" content="snapchat accounts, snapchat pva, gen z marketing, influencer accounts, snapchat ads, ephemeral content, buy snapchat accounts" />
        <link rel="canonical" href="https://yourdomain.com/snapchat-accounts" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://yourdomain.com/snapchat-accounts" />
        <meta property="og:title" content="Buy Premium Snapchat PVA Accounts | Gen Z Marketing & Influencer Platform" />
        <meta property="og:description" content="Get verified Snapchat PVA accounts for influencer marketing and Gen Z audience. Premium accounts with phone verification, AR features, and ads ready." />
        <meta property="og:image" content="https://yourdomain.com/images/snapchat-accounts-og.jpg" />
        <meta property="og:image:alt" content="Premium Snapchat PVA Accounts for Gen Z Marketing" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/snapchat-accounts" />
        <meta property="twitter:title" content="Buy Premium Snapchat PVA Accounts | Gen Z Marketing & Influencer Platform" />
        <meta property="twitter:description" content="Get verified Snapchat PVA accounts for influencer marketing and Gen Z audience. Premium accounts with phone verification, AR features, and ads ready." />
        <meta property="twitter:image" content="https://yourdomain.com/images/snapchat-accounts-og.jpg" />
        <meta property="twitter:image:alt" content="Premium Snapchat PVA Accounts for Gen Z Marketing" />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Snapchat PVA Accounts",
              "description": "Premium Snapchat accounts with phone verification for social media marketing, influencer campaigns, and creative storytelling.",
              "image": "https://yourdomain.com/images/snapchat-accounts-og.jpg",
              "brand": {
                "@type": "Brand",
                "name": "PVA Panel"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "1 Standard Snapchat Account",
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
                  "name": "5 Standard Snapchat Accounts",
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
                  "name": "10 Standard Snapchat Accounts",
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
                  "name": "25 Standard Snapchat Accounts",
                  "price": "220.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "1 Premium Snapchat Account",
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
                  "name": "5 Premium Snapchat Accounts",
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
                  "name": "10 Premium Snapchat Accounts",
                  "price": "160.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PVA Panel"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "25 Premium Snapchat Accounts",
                  "price": "350.00",
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
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Snapchat Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto">
            Premium Snapchat accounts for social media marketing, influencer campaigns, and creative storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Snapchat Accounts?</h2>
            <p className="text-xl text-gray-600">Access Snapchat's engaged Gen Z and millennial audience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ShieldCheck className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Accounts</h3>
              <p className="text-gray-600">All accounts come with phone verification and complete setup</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Globe className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Access Snapchat's 400+ million daily active users worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Smartphone className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stories & Discover</h3>
              <p className="text-gray-600">Perfect for ephemeral content and sponsored Discover placements</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageCircle className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Snapchat Ads</h3>
              <p className="text-gray-600">Ready for Snapchat's powerful advertising platform</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Influencer Marketing</h3>
              <p className="text-gray-600">Ideal for influencer partnerships and brand collaborations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AR Features</h3>
              <p className="text-gray-600">Access to Snapchat's augmented reality lenses and filters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Snapchat Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account packages</p>
          </div>

          {/* Standard Snapchat Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-600">Standard Snapchat Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Account</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$12.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Verified Snapchat Account
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
                <button onClick={() => handleOrderClick('snapchat', '1', 'standard')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$55.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Verified Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Phone Numbers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Priority Setup
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '5', 'standard')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Accounts</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$100.00</div>
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
                    Dedicated Support
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '10', 'standard')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$220.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Verified Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Snapchat Access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Management
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '25', 'standard')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Premium Snapchat Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-600">Premium Snapchat Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Premium Account</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$20.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Verified Account
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Snap Score Boost
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Friend Network Ready
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '1', 'premium')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Premium Accounts</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$90.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enhanced Snap Scores
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Social Proof Included
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '5', 'premium')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Premium Accounts</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$160.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Complete Snapchat Solution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    VIP Snapchat Support
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '10', 'premium')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Premium Accounts</h4>
                <div className="text-3xl font-bold text-yellow-600 mb-4">$350.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Snapchat Presence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Snapchat Access
                  </li>
                </ul>
                <button onClick={() => handleOrderClick('snapchat', '25', 'premium')} className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Snapchat Revolution</h2>
          <p className="text-xl mb-8 text-yellow-100">Get verified Snapchat accounts for the world's fastest-growing social platform</p>
          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
            Start Snapping
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
