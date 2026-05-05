import { useEffect, useRef, useState } from "react";
import hikes from "../data/hikes";
import HikeCard from "../components/hiking/HikeCard";
import HikeDetail from "../components/hiking/HikeDetail";

export default function HikingAdventures() {
  const heroRef = useRef(null);
  const [selectedHike, setSelectedHike] = useState(null);

  useEffect(() => {
    function handleScroll() {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden -mx-[calc(50vw-50%)] w-screen rounded-corners">
        <img
          ref={heroRef}
          src="/images/main.jpeg"
          alt="Hiking hero"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-35">
          <h1 className="text-4xl md:text-8xl text-white font-light tracking-wide">
            Hiking Adventures
          </h1>
          <p className="text-white text-base md:text-xl mt-4">
            Northern Sweden & beyond
          </p>
        </div>
      </section>

      {/* Hike Cards */}
      <section className="py-24 px-6 md:px-16 flex flex-col gap-24">
        {hikes.map((hike, index) => (
          <HikeCard
            key={hike.id}
            hike={hike}
            onClick={setSelectedHike}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      {/* Detail Overlay */}
      <HikeDetail hike={selectedHike} onClose={() => setSelectedHike(null)} />
    </div>
  );
}
