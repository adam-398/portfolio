import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

export default function HikeDetail({ hike, onClose }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <AnimatePresence>
      {hike && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Expanded Card */}
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 md:p-16">
            {/* Close button */}
            <motion.button
              className="absolute top-8 right-8 text-white text-sm tracking-widest uppercase opacity-70 hover:opacity-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            >
              Close ✕
            </motion.button>

            {/* Title */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-white/50 text-sm tracking-widest uppercase mb-2">
                {hike.location} · {hike.date}
              </p>
              <h2 className="text-white text-3xl md:text-5xl font-light">
                {hike.title}
              </h2>
            </motion.div>

            {/* Carousel */}
            <motion.div
              layoutId={`hike-image-${hike.id}`}
              className="w-full h-[80vh] overflow-hidden rounded-lg"
            >
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {[hike.heroImage, ...hike.images].map((photo, index) => (
                    <div key={index} className="flex-none w-full h-[60vh]">
                      <img
                        src={photo}
                        alt={`${hike.title} ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="flex gap-8 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={scrollPrev}
                className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-opacity"
              >
                ← Prev
              </button>
              <button
                onClick={scrollNext}
                className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-opacity"
              >
                Next →
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
