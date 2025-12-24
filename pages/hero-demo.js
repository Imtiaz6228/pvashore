import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* The new Hero component */}
      <Hero />

      {/* Additional content sections for demo */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">✨ Experience the Magic</h2>
          <p className="text-xl text-gray-600 mb-12">The enhanced hero section includes:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">🖱️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Interactive Mouse Effects</h3>
              <p className="text-gray-600 text-sm">Move your mouse to see dynamic parallax effects</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Floating Particles</h3>
              <p className="text-gray-600 text-sm">20 animated particles floating in the background</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Enhanced Phone Mockup</h3>
              <p className="text-gray-600 text-sm">Realistic device with social media icons</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Animations</h3>
              <p className="text-gray-600 text-sm">Staggered fade-ins, floats, and hover effects</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <p className="text-xl text-gray-600 mb-12">Choose from our premium PVA account offerings</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Instagram PVA</h3>
              <p className="text-gray-600 mb-4">Phone-verified Instagram accounts for marketing and growth</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Pricing
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Facebook PVA</h3>
              <p className="text-gray-600 mb-4">Verified Facebook accounts with phone authentication</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Pricing
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Twitter PVA</h3>
              <p className="text-gray-600 mb-4">Phone-verified Twitter/X accounts ready to use</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>
          <p className="text-xl text-gray-600 mb-12">Choose the perfect plan for your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$29<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  5 PVA Accounts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Instant Delivery
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 rounded-bl-lg rounded-tr-lg font-bold text-sm">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$79<span className="text-lg opacity-75">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  25 PVA Accounts
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Advanced Features
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$199<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited PVA Accounts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 Premium Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom Solutions
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied customers using our PVA services</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  )
}
