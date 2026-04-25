import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedCourses from "./components/FeaturedCourses";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <Testimonials />
    </>
  );
}