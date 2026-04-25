export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  rating?: number;
  students?: number;
}

export const courses: Course[] = [
  // ========== WEB DEVELOPMENT (8 Courses) ==========
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
    rating: 4.8,
    students: 1250
  },
  { 
    id: 2, 
    title: "React.js Complete Guide", 
    description: "Master React.js with Hooks, Context API, and Redux Toolkit.", 
    price: 59, 
    image: "rect pic.jfif", 
    instructor: "Anas Ali", 
    duration: "12 hours", 
    level: "Beginner", 
    category: "Web Development",
    rating: 4.7,
    students: 980
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
    rating: 4.9,
    students: 750
  },
  { 
    id: 4, 
    title: "Tailwind CSS Pro", 
    description: "Create stunning designs rapidly with utility-first CSS framework.", 
    price: 39, 
    image: "tailwind.jfif", 
    instructor: "Jane Smith", 
    duration: "5 hours", 
    level: "Beginner", 
    category: "Web Development",
    rating: 4.6,
    students: 2100
  },
  { 
    id: 11, 
    title: "TypeScript Mastery", 
    description: "Learn TypeScript from zero to hero with practical projects.", 
    price: 44, 
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400", 
    instructor: "Anas Ali", 
    duration: "8 hours", 
    level: "Intermediate", 
    category: "Web Development",
    rating: 4.8,
    students: 890
  },
  { 
    id: 12, 
    title: "Node.js & Express API", 
    description: "Build RESTful APIs with Node.js, Express, and MongoDB.", 
    price: 54, 
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400", 
    instructor: "David Wilson", 
    duration: "10 hours", 
    level: "Intermediate", 
    category: "Web Development",
    rating: 4.7,
    students: 670
  },
  { 
    id: 13, 
    title: "GraphQL with Apollo", 
    description: "Master GraphQL with Apollo Client and Server.", 
    price: 64, 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400", 
    instructor: "Sarah Lee", 
    duration: "7 hours", 
    level: "Advanced", 
    category: "Web Development",
    rating: 4.8,
    students: 450
  },
  { 
    id: 14, 
    title: "Python for Beginners", 
    description: "Learn Python programming from scratch with projects.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400", 
    instructor: "John Doe", 
    duration: "12 hours", 
    level: "Beginner", 
    category: "Web Development",
    rating: 4.7,
    students: 1560
  },

  // ========== GRAPHIC DESIGNING (6 Courses) ==========
  { 
    id: 5, 
    title: "Graphic Design Masterclass", 
    description: "Learn Photoshop, Illustrator, and design principles from scratch.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400", 
    instructor: "Emily Davis", 
    duration: "12 hours", 
    level: "Beginner", 
    category: "Graphic Designing",
    rating: 4.8,
    students: 1560
  },
  { 
    id: 6, 
    title: "Figma UI/UX Design", 
    description: "Design stunning user interfaces and prototypes in Figma.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400", 
    instructor: "Anas Ali", 
    duration: "6 hours", 
    level: "Beginner", 
    category: "Graphic Designing",
    rating: 4.9,
    students: 980
  },
  { 
    id: 15, 
    title: "Adobe Photoshop Pro", 
    description: "Master photo editing, retouching, and digital art in Photoshop.", 
    price: 44, 
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400", 
    instructor: "Chris Evans", 
    duration: "8 hours", 
    level: "Beginner", 
    category: "Graphic Designing",
    rating: 4.7,
    students: 1890
  },
  { 
    id: 16, 
    title: "Adobe Illustrator Bootcamp", 
    description: "Create logos, icons, and vector illustrations like a pro.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400", 
    instructor: "Sarah Johnson", 
    duration: "7 hours", 
    level: "Intermediate", 
    category: "Graphic Designing",
    rating: 4.8,
    students: 1230
  },
  { 
    id: 17, 
    title: "Canva Mastery", 
    description: "Create stunning social media graphics with Canva.", 
    price: 29, 
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400", 
    instructor: "Lisa Wong", 
    duration: "4 hours", 
    level: "Beginner", 
    category: "Graphic Designing",
    rating: 4.6,
    students: 2340
  },
  { 
    id: 18, 
    title: "After Effects Animation", 
    description: "Learn motion graphics and animation in After Effects.", 
    price: 69, 
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400", 
    instructor: "Mike Lee", 
    duration: "10 hours", 
    level: "Advanced", 
    category: "Graphic Designing",
    rating: 4.8,
    students: 670
  },

  // ========== DIGITAL MARKETING (6 Courses) ==========
  { 
    id: 7, 
    title: "Digital Marketing Mastery", 
    description: "Learn SEO, Social Media Marketing, Email Marketing, and more.", 
    price: 69, 
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400", 
    instructor: "Maria Khan", 
    duration: "15 hours", 
    level: "Beginner", 
    category: "Digital Marketing",
    rating: 4.8,
    students: 2340
  },
  { 
    id: 8, 
    title: "SEO Complete Course", 
    description: "Rank #1 on Google with advanced SEO strategies.", 
    price: 49, 
    image: "seo.jfif", 
    instructor: "Alex Turner", 
    duration: "8 hours", 
    level: "Intermediate", 
    category: "Digital Marketing",
    rating: 4.7,
    students: 1670
  },
  { 
    id: 19, 
    title: "Social Media Marketing", 
    description: "Master Facebook, Instagram, LinkedIn, and TikTok marketing.", 
    price: 54, 
    image: "wordpress.png", 
    instructor: "Lisa Wong", 
    duration: "10 hours", 
    level: "Beginner", 
    category: "Digital Marketing",
    rating: 4.7,
    students: 1980
  },
  { 
    id: 20, 
    title: "Google Ads & PPC", 
    description: "Run profitable Google Ads campaigns and master PPC.", 
    price: 59, 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400", 
    instructor: "Mark Thompson", 
    duration: "7 hours", 
    level: "Advanced", 
    category: "Digital Marketing",
    rating: 4.8,
    students: 890
  },
  { 
    id: 21, 
    title: "Email Marketing Pro", 
    description: "Build email lists and create converting email campaigns.", 
    price: 44, 
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400", 
    instructor: "Anna Smith", 
    duration: "6 hours", 
    level: "Intermediate", 
    category: "Digital Marketing",
    rating: 4.6,
    students: 1120
  },
  { 
    id: 22, 
    title: "Content Marketing", 
    description: "Create content that ranks and converts.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400", 
    instructor: "David Brown", 
    duration: "8 hours", 
    level: "Beginner", 
    category: "Digital Marketing",
    rating: 4.7,
    students: 1450
  },

  // ========== WORDPRESS (5 Courses) ==========
  { 
    id: 9, 
    title: "WordPress Complete Guide", 
    description: "Build stunning websites with WordPress from scratch.", 
    price: 39, 
    image: "wordpress.png", 
    instructor: "Anas Ali", 
    duration: "10 hours", 
    level: "Beginner", 
    category: "WordPress",
    rating: 4.8,
    students: 2450
  },
  { 
    id: 10, 
    title: "WooCommerce Development", 
    description: "Build powerful e-commerce stores with WooCommerce.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400", 
    instructor: "Anas Ali", 
    duration: "8 hours", 
    level: "Intermediate", 
    category: "WordPress",
    rating: 4.8,
    students: 1120
  },
  { 
    id: 23, 
    title: "Elementor Page Builder", 
    description: "Create professional websites with Elementor drag & drop.", 
    price: 34, 
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400", 
    instructor: "John Carter", 
    duration: "5 hours", 
    level: "Beginner", 
    category: "WordPress",
    rating: 4.6,
    students: 1890
  },
  { 
    id: 24, 
    title: "WordPress Theme Development", 
    description: "Build custom WordPress themes from scratch.", 
    price: 59, 
    image: "wordpress.png", 
    instructor: "Chris Williams", 
    duration: "12 hours", 
    level: "Advanced", 
    category: "WordPress",
    rating: 4.7,
    students: 780
  },
  { 
    id: 25, 
    title: "WordPress Security", 
    description: "Secure your WordPress website from hackers.", 
    price: 44, 
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400", 
    instructor: "Sarah Lee", 
    duration: "6 hours", 
    level: "Intermediate", 
    category: "WordPress",
    rating: 4.8,
    students: 950
  },

  // ========== ADDITIONAL COURSES (4 Courses) ==========
  { 
    id: 26, 
    title: "JavaScript Mastery", 
    description: "Master JavaScript with ES6+ and modern concepts.", 
    price: 49, 
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400", 
    instructor: "Anas Ali", 
    duration: "14 hours", 
    level: "Beginner", 
    category: "Web Development",
    rating: 4.9,
    students: 3200
  },
  { 
    id: 27, 
    title: "MongoDB Essentials", 
    description: "Learn MongoDB database from scratch.", 
    price: 44, 
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400", 
    instructor: "David Wilson", 
    duration: "6 hours", 
    level: "Intermediate", 
    category: "Web Development",
    rating: 4.7,
    students: 890
  },
  { 
    id: 28, 
    title: "Docker & Kubernetes", 
    description: "Master containerization with Docker and Kubernetes.", 
    price: 79, 
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400", 
    instructor: "Mike Johnson", 
    duration: "10 hours", 
    level: "Advanced", 
    category: "Web Development",
    rating: 4.9,
    students: 560
  },
  { 
    id: 29, 
    title: "Data Science with Python", 
    description: "Learn data analysis and visualization with Python.", 
    price: 89, 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", 
    instructor: "Dr. Smith", 
    duration: "20 hours", 
    level: "Advanced", 
    category: "Web Development",
    rating: 4.9,
    students: 890
  },
];

// Helper Functions
export const getCourseById = (id: number) => courses.find(course => course.id === id);
export const getCoursesByCategory = (category: string) => courses.filter(course => course.category === category);
export const getFeaturedCourses = () => courses.slice(0, 8);
export const getPopularCourses = () => [...courses].sort((a, b) => (b.students || 0) - (a.students || 0)).slice(0, 6);
export const getTopRatedCourses = () => [...courses].sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 6);