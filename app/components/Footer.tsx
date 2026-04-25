"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`🎉 Thanks for subscribing! You'll receive updates at ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300 mt-20">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LearnFlow
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering learners worldwide with quality education. Master new skills with expert-led courses.
            </p>
            
            {/* Creator Credit */}
            <div className="bg-gray-800/50 rounded-xl p-3 border border-gray-700">
              <p className="text-xs text-gray-400">Created by</p>
              <p className="text-sm font-semibold text-white">Anas Ali</p>
              <p className="text-xs text-blue-400">Full Stack Developer</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-gray-500">🎓 CS @ GCUF</span>
                <span className="text-xs text-gray-500">📚 FSC 2023</span>
                <span className="text-xs text-gray-500">📍 Okara</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.5-12.401c.002-.214.01-.426.018-.638A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 inline-block">🏠 Home</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 inline-block">📚 All Courses</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 inline-block">📊 Dashboard</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 inline-block">✨ About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2 inline-block">💬 Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Support
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block">❓ Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block">📜 Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block">🔒 Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block">🍪 Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 inline-block">💡 FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on new courses and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">📧</span>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Subscribe →
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3 flex items-center gap-1">
              <span>🔒</span> No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LearnFlow. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition">Privacy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition">Terms</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition">Sitemap</a>
          </div>

          <p className="text-gray-600 text-xs">
            Made with <span className="text-red-500">❤️</span> by <span className="text-blue-400">Anas Ali</span>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-gray-800/50">
          <span className="text-xs text-gray-500 flex items-center gap-1">✓ 500+ Courses</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">✓ 50K+ Students</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">✓ 100+ Experts</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">✓ 4.8 Rating</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">✓ 30-Day Guarantee</span>
        </div>
      </div>
    </footer>
  );
}