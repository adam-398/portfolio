import useEmblaCarousel from "embla-carousel-react";
import kindred1 from "./assets/kindred1.png";
import kindred2 from "./assets/kindred2.png";
import kindred3 from "./assets/kindred3.png";

export default function KindredCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const images = [kindred1, kindred2, kindred3];

  return (
    <div className="mt-4">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-none w-full" key={index}>
              <img
                src={image}
                alt={`Kindred screenshot ${index + 1}`}
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
