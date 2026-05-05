import hikes from "../data/hikes";
import HikeCard from "../components/hiking/HikeCard";

export default function HikingAdventures() {
  function handleHikeClick(hike) {
    console.log("clicked", hike.title);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden -mx-[calc(50vw-50%)] w-screen">
        <img
          src="/images/main.jpeg"
          alt="Hiking hero"
          className="absolute inset-0 w-full h-full object-cover"
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
        {hikes.map((hike) => (
          <HikeCard key={hike.id} hike={hike} onClick={handleHikeClick} />
        ))}
      </section>
    </div>
  );
}
