// Demo page showing how to use the Hero component
import Hero from './Hero'

export default function HeroDemo() {
  return (
    <div>
      <Hero />

      {/* Additional content sections can go here */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <p className="text-xl text-gray-600">More content sections...</p>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing</h2>
          <p className="text-xl text-gray-600">More content sections...</p>
        </div>
      </section>
    </div>
  )
}
