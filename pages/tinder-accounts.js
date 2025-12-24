import Link from 'next/link'
import Navbar from '../components/Navbar'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle, Smartphone, Users, Globe, Award, Heart } from 'lucide-react'

export default function TinderAccounts() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tinder Accounts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
            Premium Tinder accounts for dating, social experiments, and relationship marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Tinder Accounts?</h2>
            <p className="text-xl text-gray-600">Access Tinder's massive dating and social networking platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ShieldCheck className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Accounts</h3>
              <p className="text-gray-600">All accounts come with phone verification and complete profile setup</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dating Platform</h3>
              <p className="text-gray-600">Access to Tinder's 75 million monthly active users worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Smartphone className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
              <p className="text-gray-600">Ready for Tinder Gold, Plus, and Boost features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MessageCircle className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Research</h3>
              <p className="text-gray-600">Perfect for social experiments and market research</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Award className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marketing Tool</h3>
              <p className="text-gray-600">Ideal for relationship marketing and brand awareness campaigns</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Connect with users across 190+ countries and territories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tinder Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account packages</p>
          </div>

          {/* Standard Tinder Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-pink-600">Standard Tinder Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Account</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$6.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Verified Tinder Account
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
                <Link href="/checkout?service=tinder&quantity=1&tier=standard">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$30.00</div>
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
                <Link href="/checkout?service=tinder&quantity=5&tier=standard">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Accounts</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$60.00</div>
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
                <Link href="/checkout?service=tinder&quantity=10&tier=standard">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Verified Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Tinder Access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Management
                  </li>
                </ul>
                <Link href="/checkout?service=tinder&quantity=25&tier=standard">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Premium Tinder Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-pink-600">Premium Tinder Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Premium Account</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$9.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Verified Account
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Gold Subscription Ready
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Profile Optimization
                  </li>
                </ul>
                <Link href="/checkout?service=tinder&quantity=1&tier=premium">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Premium Accounts</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$40.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Advanced Matching Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Social Proof Included
                  </li>
                </ul>
                <Link href="/checkout?service=tinder&quantity=5&tier=premium">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Premium Accounts</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$75.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Complete Tinder Solution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    VIP Tinder Support
                  </li>
                </ul>
                <Link href="/checkout?service=tinder&quantity=10&tier=premium">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Premium Accounts</h4>
                <div className="text-3xl font-bold text-pink-600 mb-4">$225.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Premium Accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ultimate Tinder Presence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Tinder Access
                  </li>
                </ul>
                <Link href="/checkout?service=tinder&quantity=25&tier=premium">
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Match</h2>
          <p className="text-xl mb-8 text-pink-100">Get verified Tinder accounts for the world's most popular dating platform</p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105">
            Start Swiping
          </button>
        </div>
      </section>
    </div>
  )
}
