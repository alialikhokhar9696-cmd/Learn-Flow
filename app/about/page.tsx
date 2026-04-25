"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* ========== HERO SECTION ========== */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          About LearnFlow
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Empowering learners worldwide with quality education
        </p>
      </div>

      {/* ========== CREATOR PROFILE - COMPLETE WITH PICTURE ========== */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Profile Image - Real Picture Placeholder (Replace with your actual image) */}
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl shadow-xl ring-4 ring-white overflow-hidden">
              {/* Replace this with your actual image */}
              {/* <Image src="/anas-ali.jpg" alt="Anas Ali" width={176} height={176} className="object-cover" /> */}
              <span className="text-7xl"><img src="tech.jpg" alt="" />👨‍💻</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-4 border-white">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Anas Ali
            </h2>
            <p className="text-blue-600 font-semibold text-lg mt-1">Founder & Full Stack Developer</p>
            
            {/* Location & Experience */}
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
              <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-600">
                📍 Okara, Pakistan
              </span>
              <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-600">
                💼 2+ Years Experience
              </span>
              <span className="px-3 py-1 bg-white/80 rounded-full text-sm text-gray-600">
                🎓 CS @ GCUF Faisalabad
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                📅 FSC Completed 2023
              </span>
            </div>
            
            {/* Bio */}
            <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
              Passionate Full Stack Developer from <strong>Okara, Pakistan</strong> with <strong>2+ years of experience</strong> in building modern web applications. 
              Completed <strong>Intermediate (FSC) in 2023 from Govt College Okara (Sahiwal Board)</strong>. 
              Currently pursuing <strong>Computer Science at GCUF Faisalabad</strong>. 
              Started coding journey from <strong>Sahiwal Board</strong>. 
              Now building <strong>LearnFlow</strong> to help others learn and grow.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Next.js 15</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">React.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">MongoDB</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Express.js</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Git & GitHub</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.5-12.401c.002-.214.01-.426.018-.638A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========== TEAM MEMBERS SECTION WITH PICTURES ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">👥 Meet Our Team</h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Passionate educators and industry experts dedicated to your success
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Team Member 1 - Anas Ali (Founder) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg overflow-hidden">
                {/* <Image src="/anas-ali.jpg" alt="Anas Ali" width={112} height={112} className="object-cover" /> */}
                <span>👨‍💻</span>
              </div>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Founder</div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">Anas Ali</h3>
              <p className="text-blue-600 font-medium text-sm">Full Stack Developer</p>
              <p className="text-gray-500 text-xs mt-1">📍 Okara, Pakistan</p>
              <p className="text-gray-500 text-xs">📅 FSC 2023 | CS Student</p>
              <p className="text-gray-600 text-sm mt-3">2+ years experience. Expert in Next.js, React, and Node.js.</p>
              <div className="flex flex-wrap gap-1 justify-center mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">TypeScript</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition">📘</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition">🔗</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">🐦</a>
              </div>
            </div>
          </div>

          {/* Team Member 2 - Sarah Johnson with Picture */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative h-48 bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg overflow-hidden">
                <span>🎨</span>
              </div>
              <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Lead Instructor</div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-pink-600 font-medium text-sm">Graphic Design Expert</p>
              <p className="text-gray-500 text-xs mt-1">📍 New York, USA</p>
              <p className="text-gray-600 text-sm mt-3">8+ years in Adobe Creative Suite. Teaches design with practical projects.</p>
              <div className="flex flex-wrap gap-1 justify-center mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Photoshop</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Illustrator</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Figma</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition">📘</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition">🔗</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">🐦</a>
              </div>
            </div>
          </div>

          {/* Team Member 3 - Mike Johnson with Picture */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative h-48 bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg overflow-hidden">
                <span>⚙️</span>
              </div>
              <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">Senior Dev</div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">Mike Johnson</h3>
              <p className="text-emerald-600 font-medium text-sm">Backend Developer</p>
              <p className="text-gray-500 text-xs mt-1">📍 London, UK</p>
              <p className="text-gray-600 text-sm mt-3">Expert in Node.js, Python, and database management systems.</p>
              <div className="flex flex-wrap gap-1 justify-center mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">MongoDB</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition">📘</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition">🔗</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">🐦</a>
              </div>
            </div>
          </div>

          {/* Team Member 4 - Emily Davis with Picture */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative h-48 bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg overflow-hidden">
                <span>📈</span>
              </div>
              <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Marketing Head</div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800">Emily Davis</h3>
              <p className="text-orange-600 font-medium text-sm">Digital Marketing Expert</p>
              <p className="text-gray-500 text-xs mt-1">📍 Sydney, Australia</p>
              <p className="text-gray-600 text-sm mt-3">SEO specialist helping businesses grow online presence.</p>
              <div className="flex flex-wrap gap-1 justify-center mt-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">SEO</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Social Media</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Google Ads</span>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition">📘</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition">🔗</a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== EDUCATION TIMELINE (UPDATED WITH FSC 2023) ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">🎓 Education Journey</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-bold text-gray-800">Computer Science</h3>
            <p className="text-blue-600 text-sm">GCUF Faisalabad</p>
            <p className="text-gray-500 text-xs">2023 - 2027</p>
            <p className="text-gray-600 text-sm mt-2">Bachelor's degree in Computer Science (Continue)</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-bold text-gray-800">Intermediate (FSC)</h3>
            <p className="text-purple-600 text-sm">Govt College Okara</p>
            <p className="text-gray-500 text-xs">2021 - 2023</p>
            <p className="text-gray-600 text-sm mt-2">Sahiwal Board | Completed in 2023</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="font-bold text-gray-800">Matriculation</h3>
            <p className="text-green-600 text-sm">Sahiwal Board</p>
            <p className="text-gray-500 text-xs">2019 - 2021</p>
            <p className="text-gray-600 text-sm mt-2">High School Education</p>
          </div>
        </div>
      </div>

      {/* ========== EXPERIENCE SECTION ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">💼 Work Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold text-gray-800">Full Stack Developer</h3>
                <p className="text-blue-600 text-sm">LearnFlow (2024 - Present)</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Building modern web applications with Next.js, React, and Tailwind CSS. Creating online learning platform for students worldwide.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="font-bold text-gray-800">Freelance Developer</h3>
                <p className="text-blue-600 text-sm">Upwork / Fiverr (2023 - Present)</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Completed 20+ projects for international clients. Specialized in frontend development and responsive design.</p>
          </div>
        </div>
      </div>

      {/* ========== PROJECTS SECTION ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">🚀 Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-5 rounded-xl text-white shadow-lg hover:scale-105 transition">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-bold">LearnFlow</h3>
            <p className="text-sm opacity-90 mt-1">Online learning platform with 17+ courses</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-xl text-white shadow-lg hover:scale-105 transition">
            <div className="text-3xl mb-2">🛒</div>
            <h3 className="font-bold">E-Commerce Store</h3>
            <p className="text-sm opacity-90 mt-1">Full stack e-commerce with Next.js & MongoDB</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-5 rounded-xl text-white shadow-lg hover:scale-105 transition">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold">Dashboard Admin</h3>
            <p className="text-sm opacity-90 mt-1">Analytics dashboard with charts and graphs</p>
          </div>
        </div>
      </div>

      {/* ========== ACHIEVEMENTS & CERTIFICATIONS ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">🏆 Achievements & Certifications</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">🏅 Next.js Certification</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">⭐ React Mastery</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">🎯 TypeScript Pro</span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">🚀 20+ Freelance Projects</span>
          <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">📈 500+ Students Impacted</span>
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">📅 FSC 2023</span>
        </div>
      </div>

      {/* ========== STATS SECTION ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">LearnFlow by Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl text-white text-center shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm opacity-90">Courses</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white text-center shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">👨‍🎓</div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm opacity-90">Students</div>
          </div>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-2xl text-white text-center shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm opacity-90">Experts</div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-2xl text-white text-center shadow-lg hover:scale-105 transition">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm opacity-90">Rating</div>
          </div>
        </div>
      </div>

      {/* ========== MISSION & VISION ========== */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-3">🎯</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">To make quality education accessible to everyone, everywhere. We believe learning should be engaging, flexible, and tailored to individual needs.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-3">👁️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">To become the world's leading platform for skill development and career growth, empowering millions of learners globally.</p>
          <p className="text-sm text-gray-400 mt-3">Founded by Anas Ali • 2024 • Okara, Pakistan</p>
        </div>
      </div>

      {/* ========== INTERESTS & HOBBIES ========== */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">💡 Interests & Hobbies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">💻 Coding</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">📚 Reading Tech Blogs</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">🎮 Gaming</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">🏏 Cricket</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">🎧 Music</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">📝 Teaching</span>
        </div>
      </div>

      {/* ========== CONTACT CTA ========== */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h2>
        <p className="mb-5">Join thousands of students learning new skills today</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/courses" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition">
            Explore Courses →
          </Link>
          <Link href="/contact" className="px-6 py-2 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 hover:scale-105 transition">
            Contact Me
          </Link>
        </div>
        <p className="text-sm opacity-75 mt-5">📍 Based in Okara, Pakistan | 💼 2+ Years Experience | 📅 FSC 2023</p>
      </div>
    </div>
  );
}