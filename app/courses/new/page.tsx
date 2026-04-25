"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", description: "", price: "", instructor: "", duration: "", level: "Beginner", category: "Web Development" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Course created successfully!");
    router.push("/courses");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Create New Course</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-5">
        <input type="text" placeholder="Course Title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
        <textarea placeholder="Description" rows={4} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
        <div className="grid grid-cols-2 gap-4">
          <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className="px-4 py-2 border rounded-lg" required />
          <input type="text" placeholder="Duration (e.g., 10 hours)" value={form.duration} onChange={(e) => setForm({...form, duration: e.target.value})} className="px-4 py-2 border rounded-lg" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Instructor" value={form.instructor} onChange={(e) => setForm({...form, instructor: e.target.value})} className="px-4 py-2 border rounded-lg" required />
          <select value={form.level} onChange={(e) => setForm({...form, level: e.target.value})} className="px-4 py-2 border rounded-lg">
            <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
          </select>
        </div>
        <select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg">
          <option>Web Development</option><option>Graphic Designing</option><option>Digital Marketing</option><option>WordPress</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Create Course</button>
      </form>
    </div>
  );
}