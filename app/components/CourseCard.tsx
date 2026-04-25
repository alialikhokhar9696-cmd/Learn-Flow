"use client";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  instructor: string;
  duration: string;
  level: string;
  category: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${
            course.level === "Beginner" ? "bg-green-100 text-green-700" :
            course.level === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700"
          }`}>{course.level}</span>
        </div>
        <p className="text-gray-500 text-sm mb-3">{course.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-500">👨‍🏫 {course.instructor}</span>
          <span className="text-xs text-gray-500">⏱️ {course.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${course.price}</span>
          <Link href={`/courses/${course.id}`} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
}