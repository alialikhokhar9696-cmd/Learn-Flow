"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      
      {/* Animated Background Orbs - Simple Version */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat"
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center z-10">
        
        {/* Creator Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-white/90">✨ Created by</span>
          <span className="font-bold text-white">Anas Ali</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Master Skills
          </span>
          <span className="block mt-2 text-white">with LearnFlow</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Join <span className="text-purple-400 font-semibold">10,000+</span> students learning from industry experts. 
          Start your journey to become a <span className="text-blue-400 font-semibold">Full Stack Developer</span> today!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <Link
            href="/courses"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Explore Courses
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <Link
            href="/signup"
            className="px-8 py-4 bg-transparent border-2 border-purple-500 rounded-xl font-semibold text-white hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Get Started Free
            <span className="text-purple-400">→</span>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">👨‍🎓</div>
            <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
            <div className="text-sm text-gray-400">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-gray-400">Experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl md:text-3xl font-bold text-white">4.8</div>
            <div className="text-sm text-gray-400">Rating</div>
          </div>
        </div>

        {/* Education Strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/10">
              🎓 CS @ GCUF Faisalabad
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/10">
              📚 Inter @ Govt College Okara
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/10">
              📖 Sahiwal Board
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/10">
              ⚛️ Full Stack Developer
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}