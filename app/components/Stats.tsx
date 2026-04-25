"use client";
import { useState, useEffect } from "react";

const statsData = [
  { id: 1, number: "500", label: "Courses", icon: "📚", suffix: "+", color: "from-blue-600 to-blue-400", bgLight: "bg-blue-50" },
  { id: 2, number: "50", label: "Students", icon: "👨‍🎓", suffix: "K+", color: "from-purple-600 to-purple-400", bgLight: "bg-purple-50" },
  { id: 3, number: "100", label: "Experts", icon: "🏆", suffix: "+", color: "from-emerald-600 to-emerald-400", bgLight: "bg-emerald-50" },
  { id: 4, number: "4.8", label: "Rating", icon: "⭐", suffix: "", color: "from-amber-600 to-amber-400", bgLight: "bg-amber-50" },
];

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const timers = statsData.map((stat, index) => {
      const target = parseInt(stat.number);
      let current = 0;
      const interval = setInterval(() => {
        if (current < target) {
          current += Math.ceil(target / 30);
          if (current > target) current = target;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        } else {
          clearInterval(interval);
        }
      }, 30);
      return interval;
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          LearnFlow by the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Numbers</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Trusted by thousands of learners worldwide
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {statsData.map((stat, index) => (
          <div
            key={stat.id}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Content */}
            <div className="relative p-6 text-center group-hover:text-white transition-colors duration-500">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-500 inline-block">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold">
                {counts[index]}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm font-medium mt-2 text-gray-500 group-hover:text-white/90">
                {stat.label}
              </div>
            </div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Trusted globally
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Best instructors
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          Lifetime access
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          Certificate included
        </div>
      </div>
    </div>
  );
}