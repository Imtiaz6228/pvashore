import Head from 'next/head'
import Navbar from '../components/Navbar'
import { ShieldCheck, Users, Award, Globe, Clock, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <>
      <Head>
        <title>About PVAshore | Premium Phone-Verified Accounts Provider | 5+ Years Experience</title>
        <meta name="description" content="Learn about PVAshore - trusted provider of premium phone-verified accounts since 2019. 10,000+ satisfied customers, 50,000+ accounts delivered, 99.8% success rate. Quality PVA accounts for social media marketing." />
        <meta name="keywords" content="about pvashore, pva accounts company, phone verified accounts provider, social media accounts supplier, trusted pva provider, pva accounts business" />
        <link rel="canonical" href="https://yourdomain.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:title" content="About PVAshore | Premium Phone-Verified Accounts Provider" />
        <meta property="og:description" content="Trusted provider of premium phone-verified accounts since 2019. 10,000+ satisfied customers, 50,000+ accounts delivered." />
        <meta property="og:image" content="https://yourdomain.com/images/pvashore-about-og.jpg" />
        <meta property="og:image:alt" content="PVAshore - Premium PVA Accounts Provider" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/about" />
        <meta property="twitter:title" content="About PVAshore | Premium Phone-Verified Accounts Provider" />
        <meta property="twitter:description" content="Trusted provider of premium phone-verified accounts since 2019. 10,000+ satisfied customers, 50,000+ accounts delivered." />
        <meta property="twitter:image" content="https://yourdomain.com/images/pvashore-about-og.jpg" />
        <meta property="twitter:image:alt" content="PVAshore - Premium PVA Accounts Provider" />

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
              "@type": "AboutPage",
              "name": "About PVAshore",
              "description": "Learn about PVAshore, a trusted provider of premium phone-verified accounts for social media marketing since 2019.",
              "url": "https://yourdomain.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "PVAshore",
                "description": "Premium phone-verified PVA accounts provider serving businesses and marketers worldwide since 2019.",
                "foundingDate": "2019",
                "url": "https://yourdomain.com",
                "logo": "https://yourdomain.com/images/pvashore-logo.png",
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
                "areaServed": "Worldwide",
                "numberOfEmployees": "50",
                "knowsAbout": [
                  "Phone Verified Accounts",
                  "Social Media Marketing",
                  "PVA Accounts",
                  "Instagram PVA",
                  "Facebook PVA",
                  "Twitter PVA",
                  "Gmail PVA"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "PVA Accounts Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Instagram PVA Accounts",
                        "description": "Phone-verified Instagram accounts for social media marketing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Facebook PVA Accounts",
                        "description": "Verified Facebook accounts for business and marketing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Twitter PVA Accounts",
                        "description": "Phone-verified Twitter accounts for social media"
                      }
                    }
                  ]
                }
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About PVAshore
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for premium phone-verified accounts across all major social media platforms
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At PVAshore, we believe that quality should never be compromised. We're dedicated to providing
              businesses and marketers with the highest quality phone-verified accounts that meet their
              social media marketing needs. Our commitment to excellence has made us a trusted name in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <ShieldCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Every account undergoes rigorous verification to ensure 100% phone-verified status</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">Over 10,000 satisfied customers trust us for their social media marketing needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Leader</h3>
              <p className="text-gray-600">5+ years of experience delivering premium PVA accounts across all platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, PVAshore began with a simple mission: to provide businesses with
                  reliable, high-quality phone-verified accounts that they could trust. We recognized
                  that many companies were struggling with account verification processes and decided
                  to create a solution.
                </p>
                <p>
                  Over the years, we've grown from a small operation to one of the most trusted names
                  in the PVA industry. Our commitment to quality, customer service, and innovation
                  has been the driving force behind our success.
                </p>
                <p>
                  Today, we serve clients worldwide, from small businesses to large enterprises,
                  providing them with the tools they need to succeed in the competitive world of
                  social media marketing.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg">
              <div className="text-center">
                <Globe className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">Serving customers in 50+ countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PVAshore by Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Accounts Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Platforms Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PVAshore?</h2>
            <p className="text-xl text-gray-600">What sets us apart from the competition</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Most orders are delivered within minutes of payment confirmation</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600">All accounts are personally verified and tested before delivery</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your information is protected with enterprise-grade security</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our customer support team is always available to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience PVAshore?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied customers and elevate your social media marketing</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
      </div>
    </>
  )
}
