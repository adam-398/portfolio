export default function HikeCard({ hike, onClick }) {
  return (
    <div
      className="flex flex-col md:flex-row gap-8 md:gap-16 cursor-pointer group"
      onClick={() => onClick(hike)}
    >
      {/* Hero Image */}
      <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-lg">
        <img
          src={hike.heroImage}
          alt={hike.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
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
