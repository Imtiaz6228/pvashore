import React from 'react'
import { MessageCircle, Mail, X } from 'lucide-react'

export default function ContactPopup({ isOpen, onClose, service, quantity, tier }) {
  console.log('ContactPopup called with isOpen:', isOpen)
  if (!isOpen) return null
  console.log('ContactPopup rendering popup for', service, quantity, tier)

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in ordering ${quantity} ${service} PVA accounts (${tier} tier). Please provide payment and order details.`
    const whatsappUrl = `https://wa.me/923064586476?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleTelegram = () => {
    const message = `Hi! I'm interested in ordering ${quantity} ${service} PVA accounts (${tier} tier). Please provide payment and order details.`
    const telegramUrl = `https://t.me/Stupendous9?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank')
  }

  const handleEmail = () => {
    const subject = `Order Inquiry: ${quantity} ${service} PVA Accounts (${tier} tier)`
    const body = `Hi PVAshore Team,

I'm interested in ordering ${quantity} ${service} PVA accounts (${tier} tier).

Please provide payment details and order information.

Best regards,
[Your Name]`
    const emailUrl = `mailto:support@pvashore.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = emailUrl
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="text-center">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Us for Payments & Info
          </h3>
          <p className="text-gray-600 mb-6">
            Get in touch with us to complete your order for {quantity} {service} PVA accounts ({tier} tier)
          </p>

          <div className="space-y-3">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleTelegram}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle size={20} />
              <span>Telegram</span>
            </button>

            <button
              onClick={handleEmail}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="mt-4 text-gray-500 hover:text-gray-700 text-sm underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
