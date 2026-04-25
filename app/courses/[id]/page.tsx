"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCourseById } from "../../data/coursesData";
import EnrollButton from "../../components/EnrollButton";

export default function SingleCoursePage() {
  const params = useParams();
  const id = Number(params.id);
  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-800">Course not found</h1>
        <p className="text-gray-500 mt-2">The course you're looking for doesn't exist.</p>
        <Link href="/courses" className="inline-block mt-4 text-blue-600 hover:underline">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <Link href="/courses" className="inline-flex items-center gap-1 text-blue-600 hover:underline mb-6">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Courses
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-6">{course.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-500">
            <span className="flex items-center gap-1">👨‍🏫 {course.instructor}</span>
            <span className="flex items-center gap-1">⏱️ {course.duration}</span>
            <span className="flex items-center gap-1">📚 {course.category}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              course.level === "Beginner" ? "bg-green-100 text-green-700" :
              course.level === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
              "bg-red-100 text-red-700"
            }`}>
              {course.level}
            </span>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">About this course</h2>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </div>

          {/* What you'll learn */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">What you'll learn</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Build real-world projects
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Get certificate of completion
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Lifetime access to materials
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Support from instructors
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Enroll Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600">${course.price}</div>
            <div className="text-sm text-gray-500 mt-1">Full lifetime access</div>
            
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">✓ {course.duration} of video content</div>
              <div className="flex items-center gap-2">✓ Certificate of completion</div>
              <div className="flex items-center gap-2">✓ Lifetime access</div>
              <div className="flex items-center gap-2">✓ Downloadable resources</div>
              <div className="flex items-center gap-2">✓ 30-day money-back guarantee</div>
            </div>

            <div className="mt-6">
              <EnrollButton course={course} />
            </div>

            <div className="mt-4 text-center text-xs text-gray-400">
              <p>30-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}