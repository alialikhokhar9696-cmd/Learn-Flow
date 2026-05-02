"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [counts, setCounts] = useState({ students: 0, courses: 0, experts: 0 });

  useEffect(() => {
    const targets = { students: 50000, courses: 500, experts: 100 };
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        students: Math.min(Math.floor((targets.students * currentStep) / steps), targets.students),
        courses: Math.min(Math.floor((targets.courses * currentStep) / steps), targets.courses),
        experts: Math.min(Math.floor((targets.experts * currentStep) / steps), targets.experts),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, stepTime);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center bg-linear-to-br from-blue-600 via-purple-600 to-indigo-700">
      
      {/* Simple Background Orbs - No animations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 text-center z-10">
        
        {/* Badge - No bounce animation */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-white/90">✨ Created by</span>
          <span className="font-bold text-white">Anas Ali</span>
          <span className="text-white/60 text-xs">• Full Stack Developer</span>
        </div>
        
        {/* Main Heading - No gradient animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-white">Master Skills</span>
          <span className="block text-yellow-300 mt-2">with LearnFlow</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
          Join <span className="font-bold text-yellow-300">50,000+</span> students learning from industry experts. 
          Start your journey to become a <span className="font-bold text-yellow-300">Professional Developer</span> today!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <Link
            href="/courses"
            className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore Courses
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          <Link
            href="/signup"
            className="px-8 py-4 bg-transparent border-2 border-white rounded-xl font-bold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Get Started Free</span>
            <span>→</span>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-2">👨‍🎓</div>
            <div className="text-3xl font-bold text-white">{counts.students.toLocaleString()}+</div>
            <div className="text-sm text-blue-100">Happy Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-white">{counts.courses}+</div>
            <div className="text-sm text-blue-100">Expert-Led Courses</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-white">{counts.experts}+</div>
            <div className="text-sm text-blue-100">Industry Experts</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Certificate Included</span>
          </div>
        </div>

        {/* Education Info */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-200 backdrop-blur-sm border border-white/10">
              🎓 Computer Science @ GCUF Faisalabad
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-200 backdrop-blur-sm border border-white/10">
              📚 Intermediate @ Govt College Okara (2023)
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-200 backdrop-blur-sm border border-white/10">
              📖 Matriculation @ Sahiwal Board
            </span>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator - No animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}