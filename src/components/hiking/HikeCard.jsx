import { motion } from "framer-motion";

export default function HikeCard({ hike, onClick, reverse }) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 cursor-pointer group text-left w-full`}
      onClick={() => onClick(hike)}
    >
      {/* Hero Image */}
      <motion.div
        layoutId={`hike-image-${hike.id}`}
        className="w-full md:w-2/3 h-[70vh] overflow-hidden"
      >
        <img
          src={hike.heroImage}
          alt={hike.title}
          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
      </motion.div>

      {/* Details */}
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <p className="text-sm tracking-widest uppercase opacity-50 mb-2">
          {hike.location} · {hike.date}
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-4">{hike.title}</h2>
        <p className="opacity-70 leading-relaxed">{hike.description}</p>
        <p className="mt-6 text-sm tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
          View adventure →
        </p>
      </div>
    </div>
  );
}
