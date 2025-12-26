import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Close mobile menu when navigating
  const closeMobileMenu = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  const services = [
    { name: 'Gmail PVA Accounts', href: '/gmail-pva-accounts' },
    { name: 'Instagram PVA Accounts', href: '/instagram-pva-accounts' },
    { name: 'Facebook PVA Accounts', href: '/facebook-pva-accounts' },
    { name: 'Twitter/X PVA Accounts', href: '/twitter-pva-accounts' },
    { name: 'Threads PVA Accounts', href: '/threads-pva-accounts' },
    { name: 'YouTube PVA Accounts', href: '/youtube-pva-accounts' },
    { name: 'TikTok PVA Accounts', href: '/tiktok-pva-accounts' },
    { name: 'Pinterest PVA Accounts', href: '/pinterest-pva-accounts' },
    { name: 'iCloud Accounts', href: '/icloud-accounts' },
    { name: 'Google Voice Accounts', href: '/google-voice-accounts' },
    { name: 'Telegram PVA Accounts', href: '/telegram-pva-accounts' },
    { name: 'LinkedIn PVA Accounts', href: '/linkedin-pva-accounts' },
    { name: 'WeChat Accounts', href: '/wechat-accounts' },
    { name: 'Firstmail Accounts', href: '/firstmail-accounts' },
    { name: 'Snapchat Accounts', href: '/snapchat-accounts' },
    { name: 'Tinder Accounts', href: '/tinder-accounts' },
    { name: 'Yahoo PVA Accounts', href: '/yahoo-pva-accounts' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Privacy
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1 max-h-96 overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/#services" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={closeMobileMenu}>
                About
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={closeMobileMenu}>
                Blog
              </Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={closeMobileMenu}>
                Privacy
              </Link>

              {/* Mobile Services */}
              <div className="py-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
  <div
    id="mobile-services-menu"
    className={`overflow-y-auto transition-all duration-300 ease-in-out ${
      mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}
    aria-hidden={!mobileServicesOpen}
  >
                  <div className="pl-6 space-y-1 mt-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/#services" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" onClick={closeMobileMenu}>
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
