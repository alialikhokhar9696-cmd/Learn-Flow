"use client";
import Link from "next/link";
import CourseCard from "./CourseCard";

const featuredCourses = [
  // ============================================
  // WEB DEVELOPMENT COURSES
  // ============================================
  {
    id: 1,
    title: "Next.js 15 Mastery",
    description: "Build production-ready apps with App Router, Server Components, and more.",
    price: 49,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    instructor: "Anas Ali",
    duration: "10 hours",
    level: "Intermediate",
    category: "Web Development",
  },
  {
    id: 2,
    title: "React.js Complete Guide",
    description: "Master React.js with Hooks, Context API, and Redux Toolkit.",
    price: 59,
    image: "https://images.unsplash.com/photo-1633356122104-3fe601e05bd2?w=400",
    instructor: "Anas Ali",
    duration: "12 hours",
    level: "Beginner",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Master frontend & backend with Next.js, Node.js, Express, MongoDB.",
    price: 79,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    instructor: "Mike Johnson",
    duration: "15 hours",
    level: "Advanced",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Tailwind CSS Pro",
    description: "Create stunning designs rapidly with utility-first CSS framework.",
    price: 39,
    image: "https://images.unsplash.com/photo-1507721999477-2c442d3f5a2e?w=400",
    instructor: "Jane Smith",
    duration: "5 hours",
    level: "Beginner",
    category: "Web Development",
  },
  {
    id: 5,
    title: "TypeScript Mastery",
    description: "Learn TypeScript from zero to hero with practical projects.",
    price: 44,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
    instructor: "Anas Ali",
    duration: "8 hours",
    level: "Intermediate",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Node.js & Express API",
    description: "Build RESTful APIs with Node.js, Express, and MongoDB.",
    price: 54,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
    instructor: "David Wilson",
    duration: "10 hours",
    level: "Intermediate",
    category: "Web Development",
  },

  // ============================================
  // GRAPHIC DESIGNING COURSES
  // ============================================
  {
    id: 7,
    title: "Graphic Design Masterclass",
    description: "Learn Photoshop, Illustrator, and design principles from scratch.",
    price: 49,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400",
    instructor: "Emily Davis",
    duration: "12 hours",
    level: "Beginner",
    category: "Graphic Designing",
  },
  {
    id: 8,
    title: "Adobe Photoshop Pro",
    description: "Master photo editing, retouching, and digital art in Photoshop.",
    price: 39,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    instructor: "Sarah Lee",
    duration: "8 hours",
    level: "Beginner",
    category: "Graphic Designing",
  },
  {
    id: 9,
    title: "Adobe Illustrator Bootcamp",
    description: "Create logos, icons, and vector illustrations like a pro.",
    price: 44,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
    instructor: "Chris Evans",
    duration: "7 hours",
    level: "Intermediate",
    category: "Graphic Designing",
  },
  {
    id: 10,
    title: "Figma UI/UX Design",
    description: "Design stunning user interfaces and prototypes in Figma.",
    price: 49,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400",
    instructor: "Anas Ali",
    duration: "6 hours",
    level: "Beginner",
    category: "Graphic Designing",
  },

  // ============================================
  // DIGITAL MARKETING COURSES
  // ============================================
  {
    id: 11,
    title: "Digital Marketing Mastery",
    description: "Learn SEO, Social Media Marketing, Email Marketing, and more.",
    price: 69,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400",
    instructor: "Maria Khan",
    duration: "15 hours",
    level: "Beginner",
    category: "Digital Marketing",
  },
  {
    id: 12,
    title: "SEO Complete Course",
    description: "Rank #1 on Google with advanced SEO strategies.",
    price: 49,
    image: "https://images.unsplash.com/photo-1571781926291-c4771a8928fa?w=400",
    instructor: "Alex Turner",
    duration: "8 hours",
    level: "Intermediate",
    category: "Digital Marketing",
  },
  {
    id: 13,
    title: "Social Media Marketing",
    description: "Master Facebook, Instagram, LinkedIn, and TikTok marketing.",
    price: 44,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400",
    instructor: "Lisa Wong",
    duration: "10 hours",
    level: "Beginner",
    category: "Digital Marketing",
  },
  {
    id: 14,
    title: "Google Ads & PPC",
    description: "Run profitable Google Ads campaigns and master PPC.",
    price: 59,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400",
    instructor: "Mark Thompson",
    duration: "7 hours",
    level: "Advanced",
    category: "Digital Marketing",
  },

  // ============================================
  // WORDPRESS COURSES
  // ============================================
  {
    id: 15,
    title: "WordPress Complete Guide",
    description: "Build stunning websites with WordPress from scratch.",
    price: 39,
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3ab0b?w=400",
    instructor: "Anas Ali",
    duration: "10 hours",
    level: "Beginner",
    category: "WordPress",
  },
  {
    id: 16,
    title: "Elementor Page Builder",
    description: "Create professional websites with Elementor drag & drop.",
    price: 34,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
    instructor: "John Carter",
    duration: "5 hours",
    level: "Beginner",
    category: "WordPress",
  },
  {
    id: 17,
    title: "WooCommerce Development",
    description: "Build powerful e-commerce stores with WooCommerce.",
    price: 49,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400",
    instructor: "Anas Ali",
    duration: "8 hours",
    level: "Intermediate",
    category: "WordPress",
  },
];

export default function FeaturedCourses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Courses
        </h2>
        <p className="text-gray-500 mt-2">Most popular courses loved by our students</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {["All", "Web Development", "Graphic Designing", "Digital Marketing", "WordPress"].map((category) => (
          <button
            key={category}
            onClick={() => {
              // Filter functionality
              const buttons = document.querySelectorAll(".cat-btn");
              buttons.forEach(btn => btn.classList.remove("bg-blue-600", "text-white"));
              const currentBtn = document.getElementById(`cat-${category}`);
              currentBtn?.classList.add("bg-blue-600", "text-white");
              
              const cards = document.querySelectorAll(".course-card");
              cards.forEach(card => {
                if (category === "All" || card.getAttribute("data-category") === category) {
                  card.classList.remove("hidden");
                } else {
                  card.classList.add("hidden");
                }
              });
            }}
            id={`cat-${category}`}
            className={`cat-btn px-5 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white transition ${
              category === "All" ? "bg-blue-600 text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCourses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            data-category={course.category}
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/courses" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition hover:scale-105">
          View All Courses →
        </Link>
      </div>
    </div>
  );
}