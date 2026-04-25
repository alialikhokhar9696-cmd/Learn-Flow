"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo with gradient animation */}
          <Link
            href="/"
            className="group relative text-2xl md:text-3xl font-extrabold"
          >
            <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-500"></span>
            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              LearnFlow
            </span>
          </Link>

          {/* Desktop Navigation - Premium */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", path: "/", icon: "🏠" },
              { name: "Courses", path: "/courses", icon: "📚" },
              { name: "Dashboard", path: "/dashboard", icon: "📊" },
              { name: "About", path: "/about", icon: "✨" },
              { name: "Contact", path: "/contact", icon: "💬" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative px-4 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 group font-medium rounded-lg"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Buttons - Premium */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="relative px-5 py-2.5 text-blue-600 font-semibold overflow-hidden group rounded-xl"
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="/signup"
              className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Get Started →</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown - Premium */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl px-4">
            {[
              { name: "Home", path: "/", icon: "🏠" },
              { name: "Courses", path: "/courses", icon: "📚" },
              { name: "Dashboard", path: "/dashboard", icon: "📊" },
              { name: "About", path: "/about", icon: "✨" },
              { name: "Contact", path: "/contact", icon: "💬" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                className="block py-3 px-4 text-center text-blue-600 font-semibold border border-blue-600 rounded-xl hover:bg-blue-50 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block py-3 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </nav>
  );
}