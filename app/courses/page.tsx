"use client";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/coursesData";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Web Development", "Graphic Designing", "Digital Marketing", "WordPress"];

  const filtered = courses.filter(c => 
    (category === "All" || c.category === category) &&
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">All Courses</h1>
      
      <input type="text" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full md:w-96 px-4 py-2 border rounded-lg mb-6" />
      
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(c => (
          <button key={c} onClick={() => setCategory(c)} className={`px-4 py-2 rounded-full transition ${category === c ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}`}>{c}</button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
}