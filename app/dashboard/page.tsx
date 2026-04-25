"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getEnrolledCourses, getEnrolledCount, getTotalProgress, updateProgress } from "../utils/enrollStorage";

export default function DashboardPage() {
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    const courses = getEnrolledCourses();
    setEnrolledCourses(courses);
    setEnrolledCount(getEnrolledCount());
    setTotalProgress(getTotalProgress());
  }, []);

  const handleProgressUpdate = (courseId: number, progress: number) => {
    updateProgress(courseId, progress);
    setEnrolledCourses(getEnrolledCourses());
    setTotalProgress(getTotalProgress());
  };

  // Demo data when no courses enrolled
  const demoData = [
    { id: 1, title: "Next.js 15 Mastery", instructor: "Anas Ali", progress: 45, completed: false, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400" },
    { id: 2, title: "Tailwind CSS Pro", instructor: "Jane Smith", progress: 30, completed: false, image: "https://images.unsplash.com/photo-1507721999477-2c442d3f5a2e?w=400" },
  ];

  const displayCourses = enrolledCount > 0 ? enrolledCourses : demoData;
  const progressValue = totalProgress > 0 ? totalProgress : 25;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-10">
          <p className="text-blue-100 text-lg">{greeting}! 👋</p>
          <h1 className="text-4xl font-bold mt-1">Anas Ali</h1>
          <p className="text-blue-100 mt-2">Track your learning journey</p>
          
          {/* Progress Ring */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle cx="40" cy="40" r="35" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="none"/>
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none" strokeDasharray={`${2 * Math.PI * 35}`} strokeDashoffset={`${2 * Math.PI * 35 * (1 - progressValue / 100)}`} className="transition-all duration-500"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">{progressValue}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Enrolled</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{enrolledCount || 2}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition">
                📚
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Progress</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{progressValue}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition">
                📊
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 rounded-full transition-all" style={{ width: `${progressValue}%` }} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Hours</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{Math.floor((enrolledCount || 2) * 6)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition">
                ⏱️
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Certificates</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{enrolledCourses.filter(c => c.completed).length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition">
                🎓
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-2xl">📖</span> My Courses
          </h2>
          <Link href="/courses" className="text-blue-600 text-sm hover:underline flex items-center gap-1 group">
            Browse All
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>

        {/* Courses List */}
        <div className="space-y-4 mb-8">
          {displayCourses.slice(0, 3).map((course, idx) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row">
                <img src={course.image} alt={course.title} className="w-full sm:w-40 h-28 object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none" />
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="font-bold text-gray-800">{course.title}</h3>
                      <p className="text-gray-500 text-sm">👨‍🏫 {course.instructor}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      course.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {course.completed ? "✓ Completed" : "In Progress"}
                    </span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Course Progress</span>
                      <span className="font-medium text-blue-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-3">
                    {!course.completed && (
                      <button 
                        onClick={() => handleProgressUpdate(course.id, Math.min(course.progress + 10, 100))}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:shadow-md transition-all"
                      >
                        +10% Progress
                      </button>
                    )}
                    <Link href={`/courses/${course.id}`} className="px-3 py-1.5 border border-blue-600 text-blue-600 text-sm rounded-lg hover:bg-blue-50 transition-all">
                      {course.completed ? "Review Course" : "Continue Learning"} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-5">
            {/* Quick Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-3">🚀</div>
                <h3 className="text-xl font-bold">Ready to learn more?</h3>
                <p className="text-sm opacity-90 mt-1">Explore new courses</p>
                <Link href="/courses" className="inline-block mt-4 px-5 py-2 bg-white text-purple-600 rounded-xl text-sm font-semibold hover:shadow-lg transition-all">
                  Explore Courses →
                </Link>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                  👨‍💻
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Anas Ali</h3>
                  <p className="text-gray-500 text-sm">Full Stack Developer</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">📍 Okara</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">🎓 GCUF</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-around text-center">
                <div>
                  <p className="text-lg font-bold text-gray-800">{enrolledCount || 2}</p>
                  <p className="text-xs text-gray-500">Courses</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">{progressValue}%</p>
                  <p className="text-xs text-gray-500">Progress</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800">{Math.floor((enrolledCount || 2) * 6)}</p>
                  <p className="text-xs text-gray-500">Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">🎯</span> Recommended For You
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all cursor-pointer group">
                  <span className="text-2xl">⚛️</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">Advanced Next.js Patterns</p>
                    <p className="text-xs text-gray-500">Advanced</p>
                  </div>
                  <Link href="/courses" className="text-blue-600 text-sm group-hover:translate-x-1 transition">Enroll →</Link>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all cursor-pointer group">
                  <span className="text-2xl">📡</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">GraphQL with Apollo</p>
                    <p className="text-xs text-gray-500">Intermediate</p>
                  </div>
                  <Link href="/courses" className="text-blue-600 text-sm group-hover:translate-x-1 transition">Enroll →</Link>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all cursor-pointer group">
                  <span className="text-2xl">☁️</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm">AWS Cloud Practitioner</p>
                    <p className="text-xs text-gray-500">Beginner</p>
                  </div>
                  <Link href="/courses" className="text-blue-600 text-sm group-hover:translate-x-1 transition">Enroll →</Link>
                </div>
              </div>
            </div>

            {/* Study Tip */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💡</span>
                <div>
                  <h3 className="font-bold text-lg">Study Tip</h3>
                  <p className="text-sm opacity-90 mt-1">30 minutes daily = 180 hours yearly! Stay consistent.</p>
                  <div className="flex gap-3 mt-3 text-xs opacity-75">
                    <span>📅 Daily</span>
                    <span>🎯 Consistent</span>
                    <span>🚀 Results</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Goal */}
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span> Weekly Goal
              </h3>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">This week's target</span>
                <span className="font-semibold text-blue-600">{Math.min(progressValue / 2, 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(progressValue / 2, 100)}%` }} />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">Complete 2 more lessons to reach your goal!</p>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        {progressValue > 0 && progressValue < 100 && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 text-center border border-blue-100">
            <p className="text-gray-700">🎉 You're <span className="font-bold text-blue-600">{progressValue}%</span> complete! Keep pushing forward! 🎉</p>
            <div className="w-48 mx-auto mt-3 bg-gray-200 rounded-full h-1">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full" style={{ width: `${progressValue}%` }} />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-xs">
          <p>🎓 Keep learning, keep growing — Your success story starts here!</p>
        </div>
      </div>
    </div>
  );
}