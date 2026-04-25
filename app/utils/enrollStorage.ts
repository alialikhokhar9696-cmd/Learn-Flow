// ============================================
// ENROLLMENT STORAGE UTILITY
// ============================================

export interface Course {
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

export interface EnrolledCourse extends Course {
  enrolledDate: string;
  progress: number;
  completed: boolean;
}

const STORAGE_KEY = "enrolledCourses";

// Get all enrolled courses
export const getEnrolledCourses = (): EnrolledCourse[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Check if course is already enrolled
export const isCourseEnrolled = (courseId: number): boolean => {
  const enrolled = getEnrolledCourses();
  return enrolled.some(course => course.id === courseId);
};

// Enroll in a course
export const enrollInCourse = (course: Course): boolean => {
  if (isCourseEnrolled(course.id)) return false;
  
  const enrolledCourses = getEnrolledCourses();
  const newEnrolled: EnrolledCourse = {
    ...course,
    enrolledDate: new Date().toISOString(),
    progress: 0,
    completed: false,
  };
  
  enrolledCourses.push(newEnrolled);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(enrolledCourses));
  return true;
};

// Update course progress
export const updateProgress = (courseId: number, progress: number): void => {
  const enrolledCourses = getEnrolledCourses();
  const updated = enrolledCourses.map(course => 
    course.id === courseId ? { ...course, progress, completed: progress === 100 } : course
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

// Get enrolled courses count
export const getEnrolledCount = (): number => {
  return getEnrolledCourses().length;
};

// Get total progress percentage
export const getTotalProgress = (): number => {
  const enrolled = getEnrolledCourses();
  if (enrolled.length === 0) return 0;
  const total = enrolled.reduce((sum, course) => sum + course.progress, 0);
  return Math.floor(total / enrolled.length);
};