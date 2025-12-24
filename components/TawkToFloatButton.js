import { useEffect } from 'react'
import { MessageSquare } from 'lucide-react'

const TawkToFloatButton = () => {
  useEffect(() => {
    // Load Tawk.to widget script
    // Replace 'YOUR_TAWK_TO_ID' with your actual Tawk.to widget ID from your Tawk.to dashboard
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/default'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)

    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    // Cleanup function
    return () => {
      // Remove Tawk.to script if component unmounts
      const tawkScript = document.querySelector('script[src*="embed.tawk.to"]')
      if (tawkScript) {
        tawkScript.remove()
      }
      // Hide Tawk.to widget
      if (window.Tawk_API && window.Tawk_API.hide) {
        window.Tawk_API.hide()
      }
    }
  }, [])

  const handleClick = () => {
    // Toggle Tawk.to chat widget
    if (window.Tawk_API && window.Tawk_API.toggle) {
      window.Tawk_API.toggle()
    } else {
      // Fallback: try to open chat
      if (window.Tawk_API && window.Tawk_API.showWidget) {
        window.Tawk_API.showWidget()
      }
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative group">
        {/* Main Chat Button */}
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Start live chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Live Chat Support
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>

        {/* Pulsing Indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

export default TawkToFloatButton
