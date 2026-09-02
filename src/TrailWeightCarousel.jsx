import useEmblaCarousel from "embla-carousel-react";
import trailweight1 from "./assets/trailweight1.png";
import trailweight2 from "./assets/trailweight2.png";
import trailweight3 from "./assets/trailweight3.png";

export default function TrailWeightCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const images = [trailweight1, trailweight2, trailweight3];

  return (
    <div className="mt-4">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-none w-full" key={index}>
              <img
                src={image}
                alt={`Trail Weight screenshot ${index + 1}`}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="text-[#aa3bff] text-2xl hover:opacity-70"
        >
          ‹
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="text-[#aa3bff] text-2xl hover:opacity-70"
        >
          ›
        </button>
      </div>
    </div>
  );
}
