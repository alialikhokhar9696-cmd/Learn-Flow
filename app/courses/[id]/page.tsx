"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// TEMP DATA (kyun ke coursesData file delete ho chuki hai)
const courses = [
  {
    id: 1,
    title: "Next.js Mastery",
    price: 49,
    image: "/course.jpg",
    instructor: "Ali Khan",
    duration: "10h",
    category: "Web Dev",
    level: "Beginner",
    description: "Learn Next.js from scratch"
  }
];

function getCourseById(id: number) {
  return courses.find((c) => c.id === id);
}

export default function SingleCoursePage() {
  const params = useParams();
  const id = Number(params?.id);

  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-4xl mb-2">🔍</div>
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses" className="text-blue-600">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link href="/courses" className="text-blue-600">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>

      <p className="text-gray-600 mt-2">{course.description}</p>

      <div className="mt-4 text-lg font-semibold">
        Price: ${course.price}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        Instructor: {course.instructor} | Duration: {course.duration}
      </div>
    </div>
  );
}