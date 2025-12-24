import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { ShieldCheck, CheckCircle, Clock, Star, Zap, MessageCircle, Phone } from 'lucide-react'

export default function GoogleVoiceAccounts() {
  const pageTitle = "Buy Google Voice Accounts - Phone Verified Google Voice Numbers | PVAshore"
  const pageDescription = "Buy Google Voice Accounts with phone verification. Get verified Google Voice numbers for business communications, SMS verification, and VoIP services. 100% verified, instant delivery, bulk discounts available."
  const pageUrl = "https://yourwebsite.com/google-voice-accounts"
  const pageImage = "https://yourwebsite.com/images/google-voice-accounts.jpg"

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Google Voice Accounts",
    "description": "Phone verified Google Voice accounts for business communications and SMS verification",
    "brand": {
      "@type": "Brand",
      "name": "PVAshore"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "5.00",
      "highPrice": "50.00",
      "offerCount": "6",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "780"
    }
  }

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="buy google voice accounts, google voice phone verified accounts, google voice numbers, verified google voice accounts, google voice accounts for sale, bulk google voice accounts, voip accounts" />
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
        <meta name="theme-color" content="#4285F4" />
        <meta name="msapplication-TileColor" content="#4285F4" />

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

      {/* Advanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 animate-gradient-shift"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Phone Icons */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-blue-300/10 flex items-center justify-center animate-float-1" style={{left: '10%', top: '20%'}}>
            <Phone className="w-8 h-8 text-white/60" />
          </div>
          <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-cyan-300/10 flex items-center justify-center animate-float-2" style={{left: '85%', top: '30%'}}>
            <Smartphone className="w-6 h-6 text-white/60" />
          </div>
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-indigo-300/10 flex items-center justify-center animate-float-3" style={{left: '15%', top: '70%'}}>
            <MessageCircle className="w-7 h-7 text-white/60" />
          </div>
          <div className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-blue-400/10 flex items-center justify-center animate-float-4" style={{left: '80%', top: '65%'}}>
            <Globe className="w-5 h-5 text-white/60" />
          </div>
        </div>

        {/* Interactive Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl animate-pulse" style={{left: '20%', top: '30%'}}></div>
          <div className="absolute w-80 h-80 rounded-full bg-gradient-radial from-blue-400/5 via-transparent to-transparent blur-3xl animate-pulse" style={{left: '70%', top: '60%', animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Premium Google Voice
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Numbers Instantly
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Get verified Google Voice numbers for PVA verification, business communications, and SMS services with instant delivery.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="#pricing">
                  <button className="group relative bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-white text-blue-600 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Get Google Voice Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </Link>

                <Link href="#services">
                  <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                    View Pricing
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-blue-100 font-medium">Instant Delivery</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-blue-100 font-medium">Secure & Verified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Headphones className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-100 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-blue-100 font-medium">Premium Quality</span>
                </div>
              </div>

              {/* Social Proof Stats */}
              <div className="lg:hidden grid grid-cols-3 gap-4 text-center mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <Users className="w-6 h-6 mx-auto mb-1 text-blue-300" />
                  <div className="text-lg font-bold text-white">50K+</div>
                  <div className="text-xs text-blue-200">Voice Numbers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <Star className="w-6 h-6 mx-auto mb-1 text-yellow-400" />
                  <div className="text-lg font-bold text-white">4.9/5</div>
                  <div className="text-xs text-blue-200">Customer Rating</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <Globe className="w-6 h-6 mx-auto mb-1 text-green-400" />
                  <div className="text-lg font-bold text-white">99.8%</div>
                  <div className="text-xs text-blue-200">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="hidden lg:flex justify-center animate-fade-in-right" style={{animationDelay: '0.5s'}}>
              <div className="relative">
                {/* Phone Mockup */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl border-4 border-white/20">
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-inner relative overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 animate-pulse"></div>
                    </div>

                    {/* Voice Call Interface */}
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <Phone className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Voice Call</h3>
                      <p className="text-sm text-gray-600 mb-6">+1 (555) 123-4567</p>

                      {/* Call Buttons */}
                      <div className="flex justify-center gap-4 mb-6">
                        <button className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
                          <Phone className="w-6 h-6 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
                          <Phone className="w-6 h-6 text-white rotate-[135deg]" />
                        </button>
                      </div>

                      {/* SMS Preview */}
                      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-medium text-gray-700">SMS Ready</span>
                        </div>
                        <p className="text-xs text-gray-600">"Your Google Voice number is ready for use!"</p>
                      </div>
                    </div>

                    {/* Floating Success Indicator */}
                    <div className="absolute -top-3 -right-3 bg-green-500 rounded-full p-2 shadow-lg animate-bounce">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Phone Notch */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-300 rounded-b-2xl"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 shadow-lg animate-float">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-3 shadow-lg animate-float-delayed">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{animationDelay: '2.5s'}}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(3deg); } }
          @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(-2deg); } }
          @keyframes float-3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-18px) rotate(4deg); } }
          @keyframes float-4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(-3deg); } }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
          @keyframes float-delayed { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
          @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-right { 0% { opacity: 0; transform: translateX(30px); } 100% { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }

          .animate-float-1 { animation: float-1 5s ease-in-out infinite; }
          .animate-float-2 { animation: float-2 6s ease-in-out infinite; }
          .animate-float-3 { animation: float-3 4.5s ease-in-out infinite; }
          .animate-float-4 { animation: float-4 7s ease-in-out infinite; }
          .animate-float { animation: float 3.5s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite 0.5s; }
          .animate-gradient-shift { background-size: 200% 200%; animation: gradient-shift 6s ease infinite; }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
          .animate-fade-in-right { animation: fade-in-right 1s ease-out; }
          .animate-fade-in { animation: fade-in 1s ease-out; }
        `}</style>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Google Voice Accounts Pricing</h2>
            <p className="text-xl text-gray-600">Choose from different account packages</p>
          </div>

          {/* Standard Google Voice Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Standard Google Voice Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Account</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$8.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Google Voice Number
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    SMS Enabled
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Instant Delivery
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=1&tier=standard">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$35.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Google Voice Numbers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    SMS Enabled
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Discount
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=5&tier=standard">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$65.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Google Voice Numbers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    SMS Enabled
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Discount
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=10&tier=standard">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$150.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Google Voice Numbers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    SMS Enabled
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Discount
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=25&tier=standard">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Premium Google Voice Accounts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Premium Google Voice Accounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">1 Premium Account</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$15.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Premium Google Voice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enhanced Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Priority Support
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=1&tier=premium">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">5 Premium Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$65.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5 Premium Google Voice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enhanced Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Bulk Premium Discount
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=5&tier=premium">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Popular</div>
                <h4 className="text-xl font-bold mb-4">10 Premium Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$120.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10 Premium Google Voice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enhanced Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Premium Value
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=10&tier=premium">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold mb-4">25 Premium Accounts</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">$275.00</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    25 Premium Google Voice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enhanced Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Enterprise Premium
                  </li>
                </ul>
                <Link href="/checkout?service=google-voice&quantity=25&tier=premium">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Google Voice Numbers</h2>
          <p className="text-xl mb-8 text-blue-100">Professional voice and SMS solutions for your business needs</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
            Start Your Order
          </button>
        </div>
      </section>
      </div>
    </>
  )
}
