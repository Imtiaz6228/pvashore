import { useState, useEffect } from 'react'
import { X, Bitcoin, CreditCard, DollarSign, MessageCircle } from 'lucide-react'

const PaymentAnnouncementPopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup on every page visit after a brief delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])



  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-20 z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-announcement-title"
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full max-h-[95vh] sm:max-h-[90vh] relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Close announcement"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[85vh]">
            {/* Illustration/Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Headline */}
            <h2
              id="payment-announcement-title"
              className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 leading-tight"
            >
              🔥 PayPal is Working Now !!!
            </h2>

            {/* Announcement Items */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Bitcoin className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-800 font-medium">
                  Checkout via Bitcoin – Get <span className="text-blue-600 font-bold">10% Instant Discount</span> with instant delivery
                </p>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CreditCard className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-800 font-medium">
                  Checkout via Perfect Money – Get <span className="text-green-600 font-bold">10% Instant Discount</span> with instant delivery
                </p>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <DollarSign className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-800 font-medium">
                  USDT Payment Acceptable
                </p>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <MessageCircle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-800 font-medium">
                  Binance Payment Acceptable
                </p>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-2 border-red-200 shadow-sm">
                <svg className="w-8 h-8 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div>
                  <p className="text-base md:text-lg text-gray-800 font-bold">
                    WhatsApp Support
                  </p>
                  <p className="text-lg md:text-xl text-red-600 font-black tracking-wide">
                    +923064586476
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-cyan-50 rounded-lg border-2 border-cyan-200 shadow-sm">
                <svg className="w-8 h-8 text-cyan-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <div>
                  <p className="text-base md:text-lg text-gray-800 font-bold">
                    Telegram Support
                  </p>
                  <p className="text-lg md:text-xl text-cyan-600 font-black tracking-wide">
                    @Stupendous9
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Start Shopping Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentAnnouncementPopup
