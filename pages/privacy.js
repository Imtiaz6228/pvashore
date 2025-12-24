import Head from 'next/head'
import Navbar from '../components/Navbar'
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | PVAshore - Data Protection & User Rights</title>
        <meta name="description" content="PVAshore Privacy Policy - Learn how we protect your personal information, data security measures, user rights, and privacy practices. GDPR compliant privacy protection." />
        <meta name="keywords" content="privacy policy, data protection, user rights, GDPR compliance, personal information, data security, privacy practices, pva accounts privacy" />
        <link rel="canonical" href="https://yourdomain.com/privacy" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/privacy" />
        <meta property="og:title" content="Privacy Policy | PVAshore - Data Protection & User Rights" />
        <meta property="og:description" content="Learn how PVAshore protects your personal information, data security measures, and privacy practices." />
        <meta property="og:image" content="https://yourdomain.com/images/privacy-policy-og.jpg" />
        <meta property="og:image:alt" content="PVAshore Privacy Policy - Data Protection" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/privacy" />
        <meta property="twitter:title" content="Privacy Policy | PVAshore - Data Protection & User Rights" />
        <meta property="twitter:description" content="Learn how PVAshore protects your personal information, data security measures, and privacy practices." />
        <meta property="twitter:image" content="https://yourdomain.com/images/privacy-policy-og.jpg" />
        <meta property="twitter:image:alt" content="PVAshore Privacy Policy - Data Protection" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PVAshore" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org WebPage markup for Privacy Policy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "PVAshore Privacy Policy explaining data collection, usage, protection, and user rights.",
              "url": "https://yourdomain.com/privacy",
              "publisher": {
                "@type": "Organization",
                "name": "PVAshore",
                "url": "https://yourdomain.com",
                "logo": "https://yourdomain.com/images/pvashore-logo.png"
              },
              "mainEntity": {
                "@type": "CreativeWork",
                "name": "PVAshore Privacy Policy",
                "description": "Comprehensive privacy policy outlining data protection practices, user rights, and security measures.",
                "dateModified": "2025-12-01",
                "author": {
                  "@type": "Organization",
                  "name": "PVAshore Legal Team"
                },
                "about": [
                  {
                    "@type": "Thing",
                    "name": "Data Protection"
                  },
                  {
                    "@type": "Thing",
                    "name": "Privacy Rights"
                  },
                  {
                    "@type": "Thing",
                    "name": "GDPR Compliance"
                  }
                ]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://yourdomain.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Privacy Policy",
                    "item": "https://yourdomain.com/privacy"
                  }
                ]
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
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your privacy and security are our top priorities at PVAshore
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">Last updated: December 2025</p>
              <p className="text-gray-700">
                At PVAshore, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <p>
                    We may collect personal information such as your name, email address, phone number, and billing information
                    when you register for our services or make a purchase.
                  </p>

                  <h3 className="text-lg font-semibold">Usage Information</h3>
                  <p>
                    We collect information about how you use our website and services, including IP addresses, browser type,
                    pages visited, and time spent on our site.
                  </p>

                  <h3 className="text-lg font-semibold">Payment Information</h3>
                  <p>
                    Payment information is processed securely through our payment processors. We do not store credit card
                    details on our servers.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Provide and maintain our services
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Process transactions and send related information
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Send you technical notices and support messages
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Communicate with you about products, services, and promotions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Improve our services and develop new features
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                  except as described in this policy:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred as part of the transaction
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Lock className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction. This includes encryption of sensitive data, secure server infrastructure,
                  and regular security audits. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Access:</strong> Request access to the personal information we hold about you
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Deletion:</strong> Request deletion of your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <strong>Opt-out:</strong> Opt out of marketing communications
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-700">
                  We use cookies and similar technologies to enhance your experience on our website. Cookies help us
                  remember your preferences and understand how you use our site. You can control cookie settings
                  through your browser preferences.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites or services. We are not responsible for the
                  privacy practices of these third parties. We encourage you to review the privacy policies of any
                  third-party services you use.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If we become aware that we have collected personal
                  information from a child under 13, we will take steps to delete such information.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                  the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to
                  review this Privacy Policy periodically.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="text-gray-700">
                  <p><strong>Email:</strong> privacy@pvashore.com</p>
                  <p><strong>Address:</strong> PVAshore Privacy Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
