"use client";
import { useState } from "react";

export default function DataPage() {
  const [activeTab, setActiveTab] = useState("courses");

  const coursesData = {
    totalCourses: 29,
    categories: [
      { name: "Web Development", count: 8, icon: "💻", color: "bg-blue-500" },
      { name: "Graphic Designing", count: 6, icon: "🎨", color: "bg-purple-500" },
      { name: "Digital Marketing", count: 6, icon: "📈", color: "bg-green-500" },
      { name: "WordPress", count: 5, icon: "📝", color: "bg-orange-500" },
      { name: "Additional", count: 4, icon: "✨", color: "bg-pink-500" },
    ],
    recentCourses: [
      { id: 1, title: "Next.js 15 Mastery", price: 49, students: 1250, rating: 4.8 },
      { id: 2, title: "React.js Complete Guide", price: 59, students: 980, rating: 4.7 },
      { id: 3, title: "TypeScript Mastery", price: 44, students: 890, rating: 4.8 },
      { id: 4, title: "JavaScript Mastery", price: 49, students: 3200, rating: 4.9 },
    ]
  };

  const usersData = {
    totalStudents: 50000,
    totalInstructors: 100,
    totalEnrollments: 125000,
    recentUsers: [
      { id: 1, name: "Sarah Johnson", email: "sarah@example.com", enrolled: "2024-01-15", status: "Active" },
      { id: 2, name: "Michael Chen", email: "michael@example.com", enrolled: "2024-01-20", status: "Active" },
      { id: 3, name: "Priya Sharma", email: "priya@example.com", enrolled: "2024-01-25", status: "Active" },
      { id: 4, name: "David Wilson", email: "david@example.com", enrolled: "2024-02-01", status: "Inactive" },
    ]
  };

  const enrollmentsData = {
    total: 125000,
    monthlyGrowth: 15,
    completion: 68,
    averageProgress: 45,
    recentActivities: [
      { id: 1, course: "Next.js 15 Mastery", user: "Anas Ali", date: "2024-02-10", status: "Completed" },
      { id: 2, course: "Tailwind CSS Pro", user: "Sarah Johnson", date: "2024-02-09", status: "In Progress" },
      { id: 3, course: "Full Stack Development", user: "Mike Johnson", date: "2024-02-08", status: "Started" },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Platform Data Overview
        </h1>
        <p className="text-gray-600 mt-2">Real-time statistics and insights</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("courses")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "courses"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          📚 Courses
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "users"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          👥 Users
        </button>
        <button
          onClick={() => setActiveTab("enrollments")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "enrollments"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          📊 Enrollments
        </button>
      </div>

      {/* Courses Tab */}
      {activeTab === "courses" && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-3xl font-bold text-gray-800">{coursesData.totalCourses}</div>
              <div className="text-gray-500">Total Courses</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-bold text-gray-800">4.8</div>
              <div className="text-gray-500">Average Rating</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">👨‍🎓</div>
              <div className="text-3xl font-bold text-gray-800">50K+</div>
              <div className="text-gray-500">Total Students</div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Course Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursesData.categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-12 h-12 ${cat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{cat.name}</p>
                    <p className="text-sm text-gray-500">{cat.count} courses</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Courses */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Courses</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Course</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Price</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Students</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {coursesData.recentCourses.map((course) => (
                    <tr key={course.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{course.title}</td>
                      <td className="px-4 py-3 text-blue-600 font-semibold">${course.price}</td>
                      <td className="px-4 py-3 text-gray-600">{course.students}</td>
                      <td className="px-4 py-3 text-yellow-500">⭐ {course.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">👨‍🎓</div>
              <div className="text-3xl font-bold text-gray-800">{usersData.totalStudents.toLocaleString()}</div>
              <div className="text-gray-500">Total Students</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">👨‍🏫</div>
              <div className="text-3xl font-bold text-gray-800">{usersData.totalInstructors}</div>
              <div className="text-gray-500">Expert Instructors</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-3xl font-bold text-gray-800">{usersData.totalEnrollments.toLocaleString()}</div>
              <div className="text-gray-500">Total Enrollments</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Name</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Email</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Enrolled</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.recentUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{user.name}</td>
                      <td className="px-4 py-3 text-gray-600">{user.email}</td>
                      <td className="px-4 py-3 text-gray-600">{user.enrolled}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Enrollments Tab */}
      {activeTab === "enrollments" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-3xl font-bold text-gray-800">{enrollmentsData.total.toLocaleString()}</div>
              <div className="text-gray-500">Total Enrollments</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-3xl font-bold text-green-600">{enrollmentsData.monthlyGrowth}%</div>
              <div className="text-gray-500">Monthly Growth</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-3xl font-bold text-gray-800">{enrollmentsData.completion}%</div>
              <div className="text-gray-500">Completion Rate</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-3xl font-bold text-gray-800">{enrollmentsData.averageProgress}%</div>
              <div className="text-gray-500">Average Progress</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {enrollmentsData.recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">{activity.course}</p>
                    <p className="text-sm text-gray-500">by {activity.user}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{activity.date}</p>
                    <span className={`text-xs font-medium ${
                      activity.status === "Completed" ? "text-green-600" : 
                      activity.status === "In Progress" ? "text-yellow-600" : "text-blue-600"
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}