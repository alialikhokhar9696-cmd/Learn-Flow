"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    text: "LearnFlow transformed my career! The Next.js course was amazing. I got a job within 3 months. The practical projects and real-world examples really helped me understand complex concepts.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UI/UX Designer",
    text: "Best platform for learning design. The instructors are top-notch and very supportive. The Figma course helped me land my dream job as a UI/UX designer.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Full Stack Developer",
    text: "Amazing courses with practical examples. Highly recommended for beginners! The Full Stack course gave me the confidence to build my own projects.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "WordPress Developer",
    text: "The WordPress course was excellent! I learned everything from basics to advanced. Now I'm confidently building websites for clients.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span>💬</span> Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Join thousands of satisfied learners worldwide
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-6xl text-blue-100 font-serif">"</div>
            <div className="absolute bottom-6 right-6 text-6xl text-blue-100 font-serif rotate-180">"</div>
            
            <div className="p-8 md:p-10">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[activeIndex].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center md:text-left">
                {testimonials[activeIndex].text}
              </p>

              {/* User Info */}
              <div className="flex flex-col md:flex-row items-center gap-4 mt-8 pt-4 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? "w-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-green-500">✓</span> Verified Reviews
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-green-500">✓</span> Real Students
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-green-500">✓</span> 50K+ Learners
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}