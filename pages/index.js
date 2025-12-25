import Head from 'next/head'
import { ShieldCheck, Zap, CheckCircle, Clock, Star, MessageCircle, Mail, Camera, Users, Play, Phone, ThumbsUp, Bird, Lock, Instagram, Facebook, Twitter, Youtube, Globe, Smartphone, Linkedin, Github, Briefcase, Pin, Apple, MessageSquare, Flame, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
// import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function Home() {

  const services = [
    {
      icon: Mail,
      title: 'Gmail PVA Accounts',
      oldPrice: '$15.00',
      newPrice: '$500.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Camera,
      title: 'Instagram PVA Accounts',
      oldPrice: '$12.00',
      newPrice: '$500.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: ThumbsUp,
      title: 'Facebook PVA Accounts',
      oldPrice: '$25.00',
      newPrice: '$450.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Bird,
      title: 'Twitter PVA Accounts',
      oldPrice: '$20.00',
      newPrice: '$350.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Smartphone,
      title: 'Threads PVA Accounts',
      oldPrice: '$18.00',
      newPrice: '$400.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Play,
      title: 'YouTube PVA Accounts',
      oldPrice: '$40.00',
      newPrice: '$800.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Pin,
      title: 'TikTok PVA Accounts',
      oldPrice: '$22.00',
      newPrice: '$600.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Pin,
      title: 'Pinterest PVA Accounts',
      oldPrice: '$16.00',
      newPrice: '$350.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Apple,
      title: 'iCloud Accounts',
      oldPrice: '$30.00',
      newPrice: '$700.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Phone,
      title: 'Google Voice Accounts',
      oldPrice: '$10.00',
      newPrice: '$100.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: MessageSquare,
      title: 'Telegram PVA Accounts',
      oldPrice: '$14.00',
      newPrice: '$300.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn PVA Accounts',
      oldPrice: '$35.00',
      newPrice: '$750.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: MessageCircle,
      title: 'WeChat Accounts',
      oldPrice: '$25.00',
      newPrice: '$550.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Mail,
      title: 'Firstmail Accounts',
      oldPrice: '$8.00',
      newPrice: '$200.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Camera,
      title: 'Snapchat Accounts',
      oldPrice: '$18.00',
      newPrice: '$400.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Heart,
      title: 'Tinder Accounts',
      oldPrice: '$12.00',
      newPrice: '$250.00',
      buttonText: 'Coming Soon'
    },
    {
      icon: Mail,
      title: 'Yahoo PVA Accounts',
      oldPrice: '$13.00',
      newPrice: '$280.00',
      buttonText: 'Coming Soon'
    }
  ]

  return (
    <>
      <Head>
        <title>Buy Premium Phone-Verified PVA Accounts | Instagram, Facebook, Twitter, Gmail & More | PVAshore</title>
        <meta name="description" content="Get premium phone-verified PVA accounts for Instagram, Facebook, Twitter, Gmail, YouTube & more. 100% verified, instant delivery, 5+ years trusted provider. Starting from $5." />
        <meta name="keywords" content="PVA accounts, phone verified accounts, instagram pva, facebook pva, twitter pva, gmail pva, social media accounts, verified accounts, buy pva accounts" />
        <link rel="canonical" href="https://yourdomain.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:title" content="Buy Premium Phone-Verified PVA Accounts | PVAshore" />
        <meta property="og:description" content="Get premium phone-verified PVA accounts for Instagram, Facebook, Twitter, Gmail & more. 100% verified, instant delivery." />
        <meta property="og:image" content="https://yourdomain.com/images/pvashore-og.jpg" />
        <meta property="og:image:alt" content="Premium PVA Accounts for Social Media Marketing" />
        <meta property="og:site_name" content="PVAshore" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com" />
        <meta property="twitter:title" content="Buy Premium Phone-Verified PVA Accounts | PVAshore" />
        <meta property="twitter:description" content="Get premium phone-verified PVA accounts for Instagram, Facebook, Twitter, Gmail & more. 100% verified, instant delivery." />
        <meta property="twitter:image" content="https://yourdomain.com/images/pvashore-og.jpg" />
        <meta property="twitter:image:alt" content="Premium PVA Accounts for Social Media Marketing" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PVAshore" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org Organization markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PVAshore",
              "url": "https://yourdomain.com",
              "logo": "https://yourdomain.com/images/pvashore-logo.png",
              "description": "Premium phone-verified PVA accounts for social media marketing. Trusted provider of Instagram, Facebook, Twitter, Gmail and other verified accounts.",
              "foundingDate": "2019",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "10000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Instagram PVA Accounts",
                  "description": "Phone-verified Instagram accounts for social media marketing",
                  "url": "https://yourdomain.com/instagram-pva-accounts"
                },
                {
                  "@type": "Offer",
                  "name": "Facebook PVA Accounts",
                  "description": "Verified Facebook accounts for business and marketing",
                  "url": "https://yourdomain.com/facebook-pva-accounts"
                },
                {
                  "@type": "Offer",
                  "name": "Twitter PVA Accounts",
                  "description": "Phone-verified Twitter accounts for social media",
                  "url": "https://yourdomain.com/twitter-pva-accounts"
                },
                {
                  "@type": "Offer",
                  "name": "Gmail PVA Accounts",
                  "description": "Verified Gmail accounts with phone verification",
                  "url": "https://yourdomain.com/gmail-pva-accounts"
                },
                {
                  "@type": "Offer",
                  "name": "YouTube PVA Accounts",
                  "description": "Phone-verified YouTube accounts for content creation",
                  "url": "https://yourdomain.com/youtube-pva-accounts"
                }
              ]
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />
      {/*
        FUTURISTIC PVA ACCOUNTS HERO SECTION
        ====================================
        Dark futuristic background with star-dust particles
        3D transparent dashboard showing account verification
        Ultra-modern clean design for PVA accounts marketplace
        Mobile-optimized responsive design
      */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">

        {/* Star-dust Particle Background */}
        <div className="absolute inset-0">
          {/* Animated star particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Text Effect - WE DELIVER */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-20 pointer-events-none">
          <div
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white/5 select-none"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
              textShadow: '0 0 50px rgba(255,255,255,0.1)',
            }}
          >
            WE DELIVER
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Brand Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PVAshore</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white tracking-wide">
                  PHONE-VERIFIED
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    SOCIAL MEDIA
                  </span>
                  <br />
                  ACCOUNTS
                </h1>
              </div>

              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-cyan-300 font-semibold text-base tracking-wider uppercase">
                  INSTANT DELIVERY / 100% VERIFIED / ENTERPRISE GRADE
                </p>
                <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                  Get premium phone-verified accounts for Instagram, Facebook, Twitter, and more. Trusted by 10,000+ businesses worldwide.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center">
                  <Twitter className="h-5 w-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Youtube className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="#services">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl">
                    View Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - 3D Futuristic Dashboard */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* 3D Futuristic Screen/Dashboard */}
              <div className="relative w-full max-w-lg h-[500px] perspective-1000">
                {/* Main Screen Frame */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

                  {/* Screen Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>

                  {/* HUD Elements */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-cyan-400 font-mono">SYSTEM ONLINE</div>
                  </div>

                  {/* Earth Globe */}
                  <div className="absolute top-16 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-green-400 opacity-80">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Circular UI Elements */}
                  <div className="absolute top-20 right-12 space-y-4">
                    <div className="w-16 h-16 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-blue-400/50 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Charts */}
                  <div className="absolute bottom-20 left-8 right-8">
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-cyan-400 font-mono">ANALYTICS</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>

                      {/* Chart Bars */}
                      <div className="flex items-end justify-between h-16 space-x-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-cyan-400 to-blue-500 rounded-sm flex-1"
                            style={{ height: `${20 + Math.random() * 60}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Human Figure Silhouette */}
                  <div className="absolute bottom-8 right-8 w-12 h-20 bg-gradient-to-t from-slate-600 to-slate-400 rounded-lg opacity-60">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                  </div>

                  {/* Floating HUD Overlays */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Screen Frame Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Pricing Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-blue-600">Services</span></h2>
            <p className="text-xl text-gray-600">Choose from our premium PVA account offerings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Sale!</div>
              <div className="text-center mb-4">
                <Mail className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Gmail PVA Accounts</h3>
              <div className="text-center mb-4">
                <span className="text-gray-500 line-through">$15.00</span> — <span className="text-2xl font-bold text-blue-600">$500.00</span>
              </div>
              <Link href="/gmail-pva-accounts">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select options
                </button>
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Sale!</div>
              <div className="text-center mb-4">
                <Camera className="h-16 w-16 text-pink-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Instagram PVA Accounts</h3>
              <div className="text-center mb-4">
                <span className="text-gray-500 line-through">$12.00</span> — <span className="text-2xl font-bold text-blue-600">$500.00</span>
              </div>
              <Link href="/instagram-pva-accounts">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select options
                </button>
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Sale!</div>
              <div className="text-center mb-4">
                <ThumbsUp className="h-16 w-16 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Facebook PVA Accounts</h3>
              <div className="text-center mb-4">
                <span className="text-gray-500 line-through">$25.00</span> — <span className="text-2xl font-bold text-blue-600">$450.00</span>
              </div>
              <Link href="/facebook-pva-accounts">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select options
                </button>
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Sale!</div>
              <div className="text-center mb-4">
                <Bird className="h-16 w-16 text-sky-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Twitter PVA Accounts</h3>
              <div className="text-center mb-4">
                <span className="text-gray-500 line-through">$20.00</span> — <span className="text-2xl font-bold text-blue-600">$350.00</span>
              </div>
              <Link href="/twitter-pva-accounts">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select options
                </button>
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Sale!</div>
              <div className="text-center mb-4">
                <Play className="h-16 w-16 text-red-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">YouTube PVA Accounts</h3>
              <div className="text-center mb-4">
                <span className="text-gray-500 line-through">$40.00</span> — <span className="text-2xl font-bold text-blue-600">$800.00</span>
              </div>
              <Link href="/youtube-pva-accounts">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select options
                </button>
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Sale!</div>
              <div className="text-center mb-4">
                <Phone className="h-16 w-16 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Google Voice Accounts</h3>
              <div className="text-center mb-4">
                <span className="text-gray-500 line-through">$10.00</span> — <span className="text-2xl font-bold text-blue-600">$100.00</span>
              </div>
              <Link href="/google-voice-accounts">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Select options
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">PVAshore</span>?
            </h2>
            <p className="text-lg text-gray-600">Premium quality accounts with unparalleled service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                <div className="text-gray-600">Accounts Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-lg text-gray-600">Premium quality accounts with unparalleled service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">100% Verified</h3>
              <p className="text-gray-600 text-center">All accounts come with verified phone numbers and complete authentication</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Complete Setup</h3>
              <p className="text-gray-600 text-center">Profile ready to use immediately with all security features enabled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Multiple Ages</h3>
              <p className="text-gray-600 text-center">Fresh to aged accounts available for different marketing strategies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">US Numbers</h3>
              <p className="text-gray-600 text-center">Real verified US phone numbers for maximum platform compatibility</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Instant Delivery</h3>
              <p className="text-gray-600 text-center">Quick deployment after payment with automated delivery system</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">24/7 Support</h3>
              <p className="text-gray-600 text-center">Always available customer support through multiple channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-lg text-gray-600">Simple process to get your verified accounts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gray-300 z-0"></div>

            <div className="text-center relative z-10">
              <div className="bg-gray-100 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                <span>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Service</h3>
              <p className="text-gray-600 leading-relaxed">Select the platform and quantity you need from our comprehensive range of verified accounts</p>
            </div>

            <div className="text-center relative z-10">
              <div className="bg-gray-100 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                <span>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Payment</h3>
              <p className="text-gray-600 leading-relaxed">Secure checkout with multiple payment options including crypto, PayPal, and bank transfer</p>
            </div>

            <div className="text-center relative z-10">
              <div className="bg-gray-100 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                <span>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Receive your verified accounts immediately via email with full setup instructions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Customers Say</span>
            </h2>
            <p className="text-lg text-gray-600">Trusted by businesses worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-center italic">
                "PVAshore delivered exactly what they promised. All our Instagram accounts were fully verified and ready to use immediately. Excellent service!"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold mr-3">
                  JD
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-gray-600 text-sm">Marketing Director</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-center italic">
                "The Gmail PVA accounts we purchased have been performing flawlessly. PVAshore's quality control is outstanding. Highly recommended!"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold mr-3">
                  SM
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-gray-600 text-sm">Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-center italic">
                "Fast delivery, great support, and accounts that actually work. PVAshore has become our go-to provider for all PVA needs."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold mr-3">
                  RC
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Robert Chen</div>
                  <div className="text-gray-600 text-sm">Agency Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Join thousands of successful businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Accounts</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">99.8%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pink-600">15+</div>
                <div className="text-sm text-gray-600">Platforms</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center">
                <ShieldCheck className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-gray-700 font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Lock className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">Privacy Protected</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-purple-600 mr-2" />
                <span className="text-gray-700 font-medium">Verified Accounts</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-yellow-600 mr-2" />
                <span className="text-gray-700 font-medium">Instant Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know about our PVA accounts</p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Are all accounts phone-verified?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">Yes, all our PVA (Phone Verified Accounts) come with fully verified phone numbers. Each account undergoes our rigorous verification process to ensure maximum compatibility with social media platforms.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">How long does delivery take?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">Most orders are delivered instantly after payment confirmation. For larger bulk orders, delivery may take up to 24 hours. You'll receive login credentials via email immediately after processing.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">We accept Bitcoin, Perfect Money, USDT, Binance Pay, and PayPal. Crypto payments receive a 10% instant discount. All payments are processed securely through encrypted channels.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Do accounts come with US phone numbers?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">Yes, all our accounts include verified US phone numbers (+1 area codes) for maximum platform compatibility and trust scores. US numbers perform significantly better than international numbers.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">What's your refund policy?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">We offer a 100% money-back guarantee. If you're not satisfied with your accounts within 24 hours of delivery, contact our support team for a full refund. No questions asked.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Are accounts aged or fresh?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">We offer both fresh and aged accounts. Aged accounts (1-6 months old) have higher trust scores and better performance. Fresh accounts are perfect for immediate use and testing purposes.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Do you provide replacement if accounts get banned?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">We provide replacement for accounts banned within the first 30 days due to our verification issues (not client misuse). Our accounts have a 99.8% success rate and come with a 30-day replacement guarantee.</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Can I use accounts for multiple platforms?</h3>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-600">Each account is verified for its specific platform. We recommend using each account only on its intended platform to maintain optimal performance and avoid platform restrictions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Get Started Instantly */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Started Instantly</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Ready to boost your social media presence? Choose your service and get verified accounts delivered instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
          <div className="text-blue-200">
            <p className="text-lg">✓ Instant account delivery after payment</p>
            <p className="text-lg">✓ 24/7 customer support available</p>
            <p className="text-lg">✓ 100% money-back guarantee</p>
          </div>
        </div>
      </section>


      </div>
    </>
  )
}
