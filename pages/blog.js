import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Shield } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Phone-Verified Accounts in 2025",
      excerpt: "Learn everything you need to know about PVA accounts and how they can boost your social media marketing efforts.",
      author: "PVAshore Team",
      date: "December 15, 2025",
      readTime: "8 min read",
      category: "Guide",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Why Fresh PVA Accounts Are Essential for Instagram Growth",
      excerpt: "Discover why using fresh phone-verified accounts can significantly improve your Instagram marketing results.",
      author: "Marketing Expert",
      date: "December 12, 2025",
      readTime: "6 min read",
      category: "Instagram",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Social Media Algorithm Changes: How PVA Accounts Help",
      excerpt: "Stay ahead of platform algorithm changes with properly verified accounts that maintain account health.",
      author: "Tech Analyst",
      date: "December 10, 2025",
      readTime: "5 min read",
      category: "Strategy",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "The ROI of Premium PVA Accounts for Businesses",
      excerpt: "Calculate the return on investment when using high-quality phone-verified accounts for your marketing campaigns.",
      author: "Business Advisor",
      date: "December 8, 2025",
      readTime: "7 min read",
      category: "Business",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Best Practices for Managing Multiple PVA Accounts",
      excerpt: "Learn the best practices for managing multiple phone-verified accounts safely and effectively.",
      author: "Account Manager",
      date: "December 5, 2025",
      readTime: "4 min read",
      category: "Management",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Future of Social Media Verification: What to Expect",
      excerpt: "Explore upcoming changes in social media verification processes and how to prepare your marketing strategy.",
      author: "Industry Analyst",
      date: "December 3, 2025",
      readTime: "6 min read",
      category: "Trends",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = [
    { name: "All Posts", count: 24, icon: BookOpen },
    { name: "Guides", count: 8, icon: BookOpen },
    { name: "Strategy", count: 6, icon: TrendingUp },
    { name: "Security", count: 5, icon: Shield },
    { name: "Business", count: 5, icon: TrendingUp }
  ]

  return (
    <>
      <Head>
        <title>PVAshore Blog | PVA Accounts Guide, Social Media Marketing Tips & Industry Updates</title>
        <meta name="description" content="Stay updated with PVAshore blog featuring guides on phone-verified accounts, social media marketing strategies, PVA account management tips, and industry trends. Expert insights for marketers and businesses." />
        <meta name="keywords" content="pva accounts blog, phone verified accounts guide, social media marketing tips, pva account management, instagram marketing, facebook advertising, twitter growth, linkedin b2b" />
        <link rel="canonical" href="https://yourdomain.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta property="og:title" content="PVAshore Blog | PVA Accounts Guide & Social Media Marketing Tips" />
        <meta property="og:description" content="Expert guides on phone-verified accounts, social media marketing strategies, and PVA account management tips." />
        <meta property="og:image" content="https://yourdomain.com/images/pvashore-blog-og.jpg" />
        <meta property="og:image:alt" content="PVAshore Blog - PVA Accounts & Social Media Marketing" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/blog" />
        <meta property="twitter:title" content="PVAshore Blog | PVA Accounts Guide & Social Media Marketing Tips" />
        <meta property="twitter:description" content="Expert guides on phone-verified accounts, social media marketing strategies, and PVA account management tips." />
        <meta property="twitter:image" content="https://yourdomain.com/images/pvashore-blog-og.jpg" />
        <meta property="twitter:image:alt" content="PVAshore Blog - PVA Accounts & Social Media Marketing" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PVAshore" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org Blog markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "PVAshore Blog",
              "description": "Expert guides on phone-verified accounts, social media marketing strategies, and PVA account management tips.",
              "url": "https://yourdomain.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "PVAshore",
                "logo": "https://yourdomain.com/images/pvashore-logo.png",
                "url": "https://yourdomain.com"
              },
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": "The Ultimate Guide to Phone-Verified Accounts in 2025",
                  "description": "Learn everything you need to know about PVA accounts and how they can boost your social media marketing efforts.",
                  "author": {
                    "@type": "Organization",
                    "name": "PVAshore Team"
                  },
                  "datePublished": "2025-12-15",
                  "url": "https://yourdomain.com/blog/the-ultimate-guide-to-phone-verified-accounts-2025",
                  "image": "https://yourdomain.com/images/blog/pva-guide-2025.jpg",
                  "keywords": ["PVA accounts", "phone verified accounts", "social media marketing"],
                  "articleSection": "Guide"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Why Fresh PVA Accounts Are Essential for Instagram Growth",
                  "description": "Discover why using fresh phone-verified accounts can significantly improve your Instagram marketing results.",
                  "author": {
                    "@type": "Person",
                    "name": "Marketing Expert"
                  },
                  "datePublished": "2025-12-12",
                  "url": "https://yourdomain.com/blog/fresh-pva-accounts-instagram-growth",
                  "image": "https://yourdomain.com/images/blog/instagram-pva.jpg",
                  "keywords": ["Instagram PVA", "fresh accounts", "Instagram growth"],
                  "articleSection": "Instagram"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Social Media Algorithm Changes: How PVA Accounts Help",
                  "description": "Stay ahead of platform algorithm changes with properly verified accounts that maintain account health.",
                  "author": {
                    "@type": "Person",
                    "name": "Tech Analyst"
                  },
                  "datePublished": "2025-12-10",
                  "url": "https://yourdomain.com/blog/social-media-algorithm-changes-pva-accounts",
                  "image": "https://yourdomain.com/images/blog/algorithm-changes.jpg",
                  "keywords": ["social media algorithm", "PVA accounts", "account health"],
                  "articleSection": "Strategy"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "The ROI of Premium PVA Accounts for Businesses",
                  "description": "Calculate the return on investment when using high-quality phone-verified accounts for your marketing campaigns.",
                  "author": {
                    "@type": "Person",
                    "name": "Business Advisor"
                  },
                  "datePublished": "2025-12-08",
                  "url": "https://yourdomain.com/blog/roi-premium-pva-accounts-businesses",
                  "image": "https://yourdomain.com/images/blog/pva-roi.jpg",
                  "keywords": ["PVA ROI", "business marketing", "return on investment"],
                  "articleSection": "Business"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Best Practices for Managing Multiple PVA Accounts",
                  "description": "Learn the best practices for managing multiple phone-verified accounts safely and effectively.",
                  "author": {
                    "@type": "Person",
                    "name": "Account Manager"
                  },
                  "datePublished": "2025-12-05",
                  "url": "https://yourdomain.com/blog/best-practices-managing-multiple-pva-accounts",
                  "image": "https://yourdomain.com/images/blog/account-management.jpg",
                  "keywords": ["account management", "PVA best practices", "multiple accounts"],
                  "articleSection": "Management"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "Future of Social Media Verification: What to Expect",
                  "description": "Explore upcoming changes in social media verification processes and how to prepare your marketing strategy.",
                  "author": {
                    "@type": "Person",
                    "name": "Industry Analyst"
                  },
                  "datePublished": "2025-12-03",
                  "url": "https://yourdomain.com/blog/future-social-media-verification",
                  "image": "https://yourdomain.com/images/blog/future-verification.jpg",
                  "keywords": ["social media verification", "future trends", "marketing strategy"],
                  "articleSection": "Trends"
                }
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourdomain.com/blog"
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
            PVAshore Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Insights, guides, and industry updates on phone-verified accounts and social media marketing
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.find(post => post.featured) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts.find(post => post.featured).image}
                    alt={blogPosts.find(post => post.featured).title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {blogPosts.find(post => post.featured).category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts.find(post => post.featured).title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {blogPosts.find(post => post.featured).excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{blogPosts.find(post => post.featured).author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{blogPosts.find(post => post.featured).date}</span>
                    <span>{blogPosts.find(post => post.featured).readTime}</span>
                  </div>
                  <Link href={`/blog/${blogPosts.find(post => post.featured).id}`}>
                    <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Topics</h2>
            <p className="text-xl text-gray-600">Find articles that interest you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <category.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest insights and trends</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link href={`/blog/${post.id}`}>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for the latest insights on PVA accounts and social media marketing
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
