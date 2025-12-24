import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import { CreditCard, Bitcoin, DollarSign, MessageCircle, Send, Mail, CheckCircle, ShoppingCart } from 'lucide-react'

export default function Checkout() {
  const router = useRouter()
  const [selectedService, setSelectedService] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedPayment, setSelectedPayment] = useState('')
  const [selectedContact, setSelectedContact] = useState('')
  const [buyerDetails, setBuyerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  useEffect(() => {
    if (router.query.service) {
      setSelectedService(router.query.service)
    }
    if (router.query.quantity) {
      const qty = parseInt(router.query.quantity) || 1
      setQuantity(qty)
    }
  }, [router.query.service, router.query.quantity])

  const services = [
    { id: 'gmail', name: 'Gmail PVA Accounts', basePrice: 15 },
    { id: 'instagram', name: 'Instagram PVA Accounts', basePrice: 12 },
    { id: 'facebook', name: 'Facebook PVA Accounts', basePrice: 25 },
    { id: 'twitter', name: 'Twitter PVA Accounts', basePrice: 20 },
    { id: 'youtube', name: 'YouTube PVA Accounts', basePrice: 40 },
    { id: 'tiktok', name: 'TikTok PVA Accounts', basePrice: 5 },
    { id: 'google-voice', name: 'Google Voice Accounts', basePrice: 10 },
    { id: 'threads', name: 'Threads PVA Accounts', basePrice: 18 },
    { id: 'telegram', name: 'Telegram PVA Accounts', basePrice: 12 },
    { id: 'linkedin', name: 'LinkedIn PVA Accounts', basePrice: 35 },
    { id: 'wechat', name: 'WeChat Accounts', basePrice: 18 },
    { id: 'firstmail', name: 'Firstmail Accounts', basePrice: 15 },
    { id: 'snapchat', name: 'Snapchat Accounts', basePrice: 12 },
    { id: 'tinder', name: 'Tinder Accounts', basePrice: 15 },
    { id: 'yahoo', name: 'Yahoo PVA Accounts', basePrice: 14 }
  ]

  // Gmail pricing tiers
  const gmailPricingTiers = {
    fresh: {
      name: 'Fresh Gmail Accounts',
      prices: { 100: 30, 250: 75, 500: 140, 1000: 270 },
      description: 'Fresh PVA Account'
    },
    '1-6months': {
      name: '1-6 Months Old Gmail Accounts',
      prices: { 25: 25, 50: 40, 100: 70, 250: 150 },
      description: '1-6 Months Old PVA'
    },
    '1year': {
      name: '1 Year Old Gmail Accounts',
      prices: { 10: 34, 30: 68, 100: 195, 250: 500 },
      description: '1 Year Old PVA Account'
    },
    '2-3years': {
      name: '2-3 Years Old Gmail Accounts',
      prices: { 5: 25, 20: 70, 50: 150, 100: 250 },
      description: '2-3 Years Old PVA'
    },
    '5-10years': {
      name: '5-10 Years Old Gmail Accounts',
      prices: { 5: 30, 15: 75, 40: 150, 70: 250 },
      description: '5-10 Years Old PVA'
    }
  }

  // Instagram pricing tiers
  const instagramPricingTiers = {
    fresh: {
      name: 'Fresh Instagram Accounts',
      prices: { 100: 25, 200: 40, 500: 100, 1000: 190 },
      description: 'Fresh PVA Account'
    },
    '1-6months': {
      name: '1-6 Months Old Instagram Accounts',
      prices: { 10: 12, 50: 50, 100: 100, 600: 500 },
      description: '1-6 Months Old PVA'
    },
    '1year': {
      name: '1 Year Old Instagram Accounts',
      prices: { 5: 15, 25: 60, 60: 125, 100: 200 },
      description: '1 Year Old PVA'
    },
    '2years': {
      name: '2-3 Years Old Instagram Accounts',
      prices: { 5: 20, 15: 50, 40: 100, 90: 200 },
      description: '2-3 Years Old PVA'
    }
  }

  // Facebook pricing tiers
  const facebookPricingTiers = {
    fresh: {
      name: 'Fresh Facebook Accounts',
      prices: { 50: 50, 100: 95, 300: 275, 500: 450 },
      description: 'Fresh PVA Account'
    },
    '1-6months': {
      name: '1-6 Months Old Facebook Accounts',
      prices: { 8: 22, 20: 50, 70: 150, 150: 250 },
      description: '1-6 Months Old PVA'
    },
    '1-2years': {
      name: '1-2 Years Old Facebook Accounts',
      prices: { 10: 40, 25: 90, 75: 200, 150: 350 },
      description: '1-2 Years Old PVA'
    },
    '2-5years': {
      name: '2-5 Years Old Facebook Accounts',
      prices: { 5: 35, 15: 90, 50: 200, 100: 350 },
      description: '2-5 Years Old PVA'
    }
  }

  // Twitter pricing tiers
  const twitterPricingTiers = {
    fresh: {
      name: 'Fresh Twitter Accounts',
      prices: { 50: 25, 100: 50, 220: 100, 500: 220 },
      description: 'Fresh PVA Account'
    },
    '1-6months': {
      name: '1-6 Months Old Twitter Accounts',
      prices: { 25: 37.50, 50: 75, 110: 150, 250: 330 },
      description: '1-6 Months Old PVA'
    },
    '1year': {
      name: '1 Year Old Twitter Accounts',
      prices: { 25: 43.13, 50: 86.25, 110: 172.50, 250: 379.50 },
      description: '1 Year Old PVA'
    },
    '2years': {
      name: '2-3 Years Old Twitter Accounts',
      prices: { 25: 49.60, 50: 99.19, 110: 198.38, 250: 436.43 },
      description: '2-3 Years Old PVA'
    }
  }

  // YouTube pricing tiers
  const youtubePricingTiers = {
    fresh: {
      name: 'Fresh YouTube Accounts',
      prices: { 50: 30, 100: 75, 200: 140, 500: 270 },
      description: 'Fresh PVA Account'
    },
    '6months': {
      name: '1-6 Months Old YouTube Accounts',
      prices: { 50: 37.50, 100: 93.75, 200: 175, 500: 337.50 },
      description: '1-6 Months Old PVA'
    }
  }

  // Pinterest pricing tiers
  const pinterestPricingTiers = {
    fresh: {
      name: 'Fresh Pinterest Accounts',
      prices: { 50: 40, 100: 90, 300: 240, 500: 380 },
      description: 'Fresh PVA Account'
    },
    '1month': {
      name: '1-6 Months Old Pinterest Accounts',
      prices: { 50: 50, 100: 112.50, 300: 300, 500: 475 },
      description: '1-6 Months Old PVA'
    }
  }

  // iCloud pricing tiers
  const icloudPricingTiers = {
    fresh: {
      name: 'Fresh iCloud Accounts',
      prices: { 50: 35, 100: 80, 300: 220, 500: 350 },
      description: 'Fresh iCloud Account'
    },
    '1month': {
      name: '1-6 Months Old iCloud Accounts',
      prices: { 50: 43.75, 100: 100, 300: 275, 500: 437.50 },
      description: '1-6 Months Old iCloud'
    }
  }

  // TikTok pricing tiers
  const tiktokPricingTiers = {
    fresh: {
      name: 'Fresh TikTok Accounts',
      prices: { 50: 50, 100: 95, 300: 275, 500: 450 },
      description: 'Fresh PVA Account'
    },
    '1month': {
      name: '1-6 Months Old TikTok Accounts',
      prices: { 50: 62.50, 100: 118.75, 300: 343.75, 500: 562.50 },
      description: '1-6 Months Old PVA'
    }
  }

  // Google Voice pricing tiers
  const googleVoicePricingTiers = {
    standard: {
      name: 'Standard Google Voice Accounts',
      prices: { 1: 8, 5: 35, 10: 65, 25: 150 },
      description: 'Standard Google Voice Account'
    },
    premium: {
      name: 'Premium Google Voice Accounts',
      prices: { 1: 15, 5: 65, 10: 120, 25: 275 },
      description: 'Premium Google Voice Account'
    }
  }

  // Threads pricing tiers
  const threadsPricingTiers = {
    fresh: {
      name: 'Fresh Threads Accounts',
      prices: { 100: 25, 200: 65, 600: 125, 1000: 200 },
      description: 'Fresh PVA Account'
    },
    '1month': {
      name: '1-6 Months Old Threads Accounts',
      prices: { 100: 28.75, 200: 74.75, 600: 143.75, 1000: 230 },
      description: '1-6 Months Old PVA'
    }
  }

  // Telegram pricing tiers
  const telegramPricingTiers = {
    standard: {
      name: 'Standard Telegram Accounts',
      prices: { 1: 12, 5: 55, 10: 100, 25: 225 },
      description: 'Standard PVA Account'
    },
    premium: {
      name: 'Premium Telegram Accounts',
      prices: { 1: 20, 5: 90, 10: 165, 25: 375 },
      description: 'Premium PVA Account'
    }
  }

  // LinkedIn pricing tiers
  const linkedinPricingTiers = {
    standard: {
      name: 'Standard LinkedIn Accounts',
      prices: { 1: 35, 5: 155, 10: 280, 25: 625 },
      description: 'Standard PVA Account'
    },
    premium: {
      name: 'Premium LinkedIn Accounts',
      prices: { 1: 55, 5: 240, 10: 430, 25: 950 },
      description: 'Premium PVA Account'
    }
  }

  // WeChat pricing tiers
  const wechatPricingTiers = {
    standard: {
      name: 'Standard WeChat Accounts',
      prices: { 1: 18, 5: 80, 10: 145, 25: 330 },
      description: 'Standard PVA Account'
    },
    premium: {
      name: 'Premium WeChat Accounts',
      prices: { 1: 28, 5: 125, 10: 225, 25: 500 },
      description: 'Premium PVA Account'
    }
  }

  // Firstmail pricing tiers
  const firstmailPricingTiers = {
    standard: {
      name: 'Standard Firstmail Accounts',
      prices: { 1: 15, 5: 68, 10: 125, 25: 275 },
      description: 'Standard Account'
    },
    premium: {
      name: 'Premium Firstmail Accounts',
      prices: { 1: 25, 5: 110, 10: 200, 25: 425 },
      description: 'Premium Account'
    }
  }

  // Snapchat pricing tiers
  const snapchatPricingTiers = {
    standard: {
      name: 'Standard Snapchat Accounts',
      prices: { 1: 12, 5: 55, 10: 100, 25: 220 },
      description: 'Standard PVA Account'
    },
    premium: {
      name: 'Premium Snapchat Accounts',
      prices: { 1: 20, 5: 90, 10: 160, 25: 350 },
      description: 'Premium PVA Account'
    }
  }

  // Tinder pricing tiers
  const tinderPricingTiers = {
    standard: {
      name: 'Standard Tinder Accounts',
      prices: { 1: 15, 5: 68, 10: 125, 25: 275 },
      description: 'Standard PVA Account'
    },
    premium: {
      name: 'Premium Tinder Accounts',
      prices: { 1: 25, 5: 110, 10: 200, 25: 425 },
      description: 'Premium PVA Account'
    }
  }

  // Yahoo pricing tiers
  const yahooPricingTiers = {
    standard: {
      name: 'Standard Yahoo Accounts',
      prices: { 1: 14, 5: 65, 10: 120, 25: 265 },
      description: 'Standard PVA Account'
    },
    premium: {
      name: 'Premium Yahoo Accounts',
      prices: { 1: 22, 5: 100, 10: 180, 25: 390 },
      description: 'Premium PVA Account'
    }
  }

  // Get pricing tier from URL or default to fresh
  const getPricingTier = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const tier = urlParams.get('tier') || 'standard'

    switch(selectedService) {
      case 'gmail':
        return gmailPricingTiers[tier] || gmailPricingTiers.fresh
      case 'instagram':
        return instagramPricingTiers[tier] || instagramPricingTiers.fresh
      case 'facebook':
        return facebookPricingTiers[tier] || facebookPricingTiers.fresh
      case 'twitter':
        return twitterPricingTiers[tier] || twitterPricingTiers.fresh
      case 'youtube':
        return youtubePricingTiers[tier] || youtubePricingTiers.fresh
      case 'pinterest':
        return pinterestPricingTiers[tier] || pinterestPricingTiers.fresh
      case 'icloud':
        return icloudPricingTiers[tier] || icloudPricingTiers.fresh
      case 'tiktok':
        return tiktokPricingTiers[tier] || tiktokPricingTiers.fresh
      case 'google-voice':
        return googleVoicePricingTiers[tier] || googleVoicePricingTiers.standard
      case 'threads':
        return threadsPricingTiers[tier] || threadsPricingTiers.fresh
      case 'telegram':
        return telegramPricingTiers[tier] || telegramPricingTiers.standard
      case 'linkedin':
        return linkedinPricingTiers[tier] || linkedinPricingTiers.standard
      case 'wechat':
        return wechatPricingTiers[tier] || wechatPricingTiers.standard
      case 'firstmail':
        return firstmailPricingTiers[tier] || firstmailPricingTiers.standard
      case 'snapchat':
        return snapchatPricingTiers[tier] || snapchatPricingTiers.standard
      case 'tinder':
        return tinderPricingTiers[tier] || tinderPricingTiers.standard
      case 'yahoo':
        return yahooPricingTiers[tier] || yahooPricingTiers.standard
      default:
        return null
    }
  }

  const selectedServiceData = services.find(service => service.id === selectedService)
  const pricingTier = getPricingTier()

  // For services with direct pricing, use pricingTier.prices; for others, use multiplier calculation
  const totalPrice = pricingTier
    ? ((selectedService === 'gmail' || selectedService === 'instagram' || selectedService === 'facebook' || selectedService === 'twitter' || selectedService === 'threads' || selectedService === 'youtube' || selectedService === 'pinterest' || selectedService === 'icloud' || selectedService === 'tiktok' || selectedService === 'google-voice' || selectedService === 'telegram' || selectedService === 'linkedin' || selectedService === 'wechat' || selectedService === 'firstmail' || selectedService === 'snapchat' || selectedService === 'tinder' || selectedService === 'yahoo') && pricingTier.prices
        ? pricingTier.prices[quantity] || (selectedServiceData.basePrice * quantity)
        : selectedServiceData.basePrice * pricingTier.multiplier * quantity)
    : (selectedServiceData?.basePrice * quantity || 0)

  const pricePerAccount = quantity > 0 ? totalPrice / quantity : 0

  const paymentMethods = [
    { id: 'bitcoin', name: 'Bitcoin', icon: Bitcoin, description: 'Cryptocurrency payment' },
    { id: 'paypal', name: 'PayPal', icon: DollarSign, description: 'PayPal account transfer' },
    { id: 'payoneer', name: 'Payoneer', icon: CreditCard, description: 'Payoneer wallet transfer' }
  ]

  const contactMethods = [
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageCircle, color: 'bg-green-500', link: 'https://wa.me/923064586476' },
    { id: 'telegram', name: 'Telegram', icon: Send, color: 'bg-blue-500', link: 'https://t.me/Stupendous9' },
    { id: 'email', name: 'Email', icon: Mail, color: 'bg-red-500', link: 'mailto:orders@pvashore.com' }
  ]



  const handleOrderSubmit = (e) => {
    e.preventDefault()
    if (!selectedService || !selectedPayment || !selectedContact || !buyerDetails.name || !buyerDetails.email || !buyerDetails.phone) {
      alert('Please fill in all required fields (service, buyer details, payment method, and contact method).')
      return
    }
    setOrderPlaced(true)
  }

  const handleContactClick = (method) => {
    setSelectedContact(method.id)
    const contactMethod = contactMethods.find(m => m.id === method.id)
    if (contactMethod) {
      // In a real app, this would open the respective app or email client
      window.open(contactMethod.link, '_blank')
    }
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your order. Our team will contact you shortly via your selected contact method.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="text-left">
                <p><strong>Service:</strong> {selectedServiceData?.name}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                <p><strong>Payment Method:</strong> {paymentMethods.find(m => m.id === selectedPayment)?.name}</p>
                <p><strong>Contact Method:</strong> {contactMethods.find(m => m.id === selectedContact)?.name}</p>
                <p className="text-2xl font-bold text-blue-600 mt-4">Total: ${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={() => setOrderPlaced(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Secure Checkout
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Complete your order securely with multiple payment options
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <ShoppingCart className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Place Your Order</h2>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-8">
              {/* Selected Service Display */}
              {selectedServiceData && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Selected Package</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        {pricingTier ? pricingTier.name : selectedServiceData.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {quantity} Account{quantity > 1 ? 's' : ''} × ${pricePerAccount.toFixed(2)} each
                      </p>
                      <p className="text-2xl font-bold text-blue-600">Total: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              )}



              {/* Buyer Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Buyer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={buyerDetails.name}
                      onChange={(e) => setBuyerDetails({...buyerDetails, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={buyerDetails.email}
                      onChange={(e) => setBuyerDetails({...buyerDetails, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={buyerDetails.phone}
                      onChange={(e) => setBuyerDetails({...buyerDetails, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      value={buyerDetails.company}
                      onChange={(e) => setBuyerDetails({...buyerDetails, company: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPayment === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <method.icon className="h-8 w-8 text-gray-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-900">{method.name}</h4>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        {selectedPayment === method.id && (
                          <CheckCircle className="h-6 w-6 text-blue-600 ml-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Method Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How would you like to be contacted?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {contactMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => handleContactClick(method)}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedContact === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center mr-3`}>
                          <method.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{method.name}</h4>
                          <p className="text-sm text-gray-600">Click to open {method.name}</p>
                        </div>
                        {selectedContact === method.id && (
                          <CheckCircle className="h-6 w-6 text-blue-600 ml-auto" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
                {selectedServiceData ? (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{pricingTier ? pricingTier.name : selectedServiceData.name}</span>
                      <span>${pricePerAccount.toFixed(2)} each</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity: {quantity}</span>
                      <span>×{quantity}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">Please select a service to see order summary</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Complete Order
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  By placing your order, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
