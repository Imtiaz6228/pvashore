import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Instagram, Facebook, MessageCircle, Twitter, Play, CheckCircle, Zap, Shield, Headphones, Star, Users, Award, TrendingUp } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true)

    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    }))
    setParticles(newParticles)

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      const rect = document.documentElement.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialIcons = [
    { Icon: Instagram, color: 'hover:text-pink-400 group-hover:scale-125', name: 'Instagram', gradient: 'from-pink-500 to-orange-500' },
    { Icon: Facebook, color: 'hover:text-blue-400 group-hover:scale-125', name: 'Facebook', gradient: 'from-blue-600 to-blue-800' },
    { Icon: MessageCircle, color: 'hover:text-purple-400 group-hover:scale-125', name: 'Threads', gradient: 'from-purple-500 to-pink-500' },
    { Icon: Twitter, color: 'hover:text-blue-300 group-hover:scale-125', name: 'Twitter/X', gradient: 'from-blue-400 to-cyan-400' },
    { Icon: Play, color: 'hover:text-red-400 group-hover:scale-125', name: 'TikTok', gradient: 'from-red-500 to-pink-600' }
  ]

  const trustIndicators = [
    { Icon: Zap, text: 'Instant Delivery', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10' },
    { Icon: Shield, text: 'Secure Payments', color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { Icon: Headphones, text: '24/7 Support', color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    { Icon: Award, text: 'Verified Quality', color: 'text-purple-400', bgColor: 'bg-purple-400/10' }
  ]

  const stats = [
    { Icon: Users, value: '10K+', label: 'Happy Customers', color: 'text-blue-400' },
    { Icon: Star, value: '4.9/5', label: 'Customer Rating', color: 'text-yellow-400' },
    { Icon: TrendingUp, value: '99.8%', label: 'Success Rate', color: 'text-green-400' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-slate-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-shift"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full bg-white/10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float-particle ${particle.speed * 2}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Floating Social Media Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {socialIcons.map((social, index) => (
          <div
            key={social.name}
            className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center transition-all duration-1000 hover:scale-125 cursor-pointer group ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{
              left: `${15 + index * 15}%`,
              top: `${15 + (index % 2) * 50}%`,
              animationDelay: `${index * 0.3}s`,
              transform: `translate(${mousePosition.x * (index + 1) * 5}px, ${mousePosition.y * (index + 1) * 5}px)`
            }}
          >
            <social.Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
          </div>
        ))}
      </div>

      {/* Interactive Mouse Glow Effect */}
      <div
        className="absolute pointer-events-none w-96 h-96 rounded-full bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl transition-all duration-300"
        style={{
          left: `${50 + mousePosition.x * 20}%`,
          top: `${50 + mousePosition.y * 20}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Buy Verified Social Media
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Accounts Instantly
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              High-quality Instagram, Facebook, Threads & X accounts with instant delivery and 24/7 support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/#pricing">
                <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>

              <Link href="/#services">
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                  View Pricing
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm mb-6">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={indicator.text}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full ${indicator.bgColor} backdrop-blur-sm border border-white/10 transition-all duration-1000 hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${1.5 + index * 0.2}s` }}
                >
                  <indicator.Icon className={`w-4 h-4 ${indicator.color}`} />
                  <span className="text-gray-300 font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Stats */}
            <div className={`lg:hidden grid grid-cols-3 gap-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '2s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <stat.Icon className={`w-6 h-6 mx-auto mb-1 ${stat.color}`} />
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Element */}
          <div className={`hidden lg:flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.5s' }}>
            <div className="relative">
              {/* Central Device/Phone Mockup */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
                {/* Screen */}
                <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-2xl p-6 shadow-inner">
                  {/* Social Media Icons Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {socialIcons.map((social, index) => (
                      <div
                        key={social.name}
                        className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center transition-all duration-500 hover:bg-white/20 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${1 + index * 0.1}s` }}
                      >
                        <social.Icon className="w-8 h-8 text-white" />
                      </div>
                    ))}
                  </div>

                  {/* Floating Success Checkmark */}
                  <div className={`absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '2s' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-8 -left-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 animate-float' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1.2s' }}>
                <Zap className="w-6 h-6 text-white" />
              </div>

              <div className={`absolute -bottom-8 -right-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 animate-float-delayed' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '1.5s' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '2.5s' }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(7deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-4deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(6deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.2); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 5s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 8s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 6.5s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4.5s ease-in-out infinite 0.5s; }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>
    </section>
  )
}
