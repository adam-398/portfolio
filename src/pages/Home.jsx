import "../App.css";
import waymark1 from "../assets/waymark1.png";
import norrsken1 from "../assets/norrsken1.png";
import KindredCarousel from "../KindredCarousel";
import TrailWeightCarousel from "../TrailWeightCarousel";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="min-h-screen flex flex-col justify-center items-start px-16">
        <h1 className="text-4xl md:text-7xl mb-6">Adam Hodges</h1>
        <p className="text-lg md:text-xl pb-2">
          Building Android apps, cross-platform tools and web experiences
        </p>
        <p className="text-base md:text-base pb-2">
          BSc Computing & IT with the Open University, available immediately.
        </p>
        <a
          className="text-lg md:text-md text-[#aa3bff] hover:underline"
          href="https://github.com/adam-398"
        >
          GitHub →
        </a>
      </section>

      <section className="flex flex-col md:flex-row gap-16 p-16 border-t border-[#2e303a] min-h-screen">
        <div className="w-72 shrink-0 md:sticky md:top-8 md:h-fit">
          <h2 className="text-2xl md:text-3xl">Waymark</h2>
          <p>Full-stack hiking app</p>
          <img
            src={waymark1}
            alt="Waymark app screenshot"
            className="rounded-2xl mt-4 shadow-2xl w-full mx-auto"
          />
        </div>
        <div className="flex-1">
          <p className="text-base md:text-md pb-3">
            A full-stack Android application for outdoor enthusiasts, primarily
            focused on northern Sweden, built as a final year dissertation
            project with the Open University.
          </p>
          <p className="text-base md:text-md pb-3">
            Waymark features GPS tracking and a full range of features and
            entity types, including vindskydd (wind shelters), stugor (mountain
            huts), parking spots, camping spots, foraging spots and route
            creation. Each entity features unique attributes and user-generated
            content including photos, notes and QR codes alongside GPX file
            import and export.
          </p>
          <p className="text-base md:text-md pb-3">
            Built with Kotlin and Jetpack Compose, with mapping provided by
            MapLibre and tile data from Lantmäteriet (the Swedish mapping
            authority). Backend hosted on Supabase with the PostGIS extension
            for geospatial queries.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-16 p-16 border-t border-[#2e303a] min-h-screen">
        <div className="w-72 shrink-0 md:sticky md:top-8 md:h-fit">
          <h2 className="text-2xl md:text-3xl">Trail Weight</h2>
          <p>Gear tracking for hikers</p>
          <TrailWeightCarousel />
        </div>
        <div className="flex-1">
          <p className="text-base md:text-md pb-3">
            A gear tracking app for hikers and ultralight backpackers, available
            on the Google Play Store.
          </p>
          <p className="text-base md:text-md pb-3">
            Trail Weight lets users build and share gear lists, log item weights
            by category, and visualise total pack weight as a pie chart ordered
            heaviest to lightest. The app supports metric and imperial units and
            includes full light and dark mode.
          </p>
          <p className="text-base md:text-md pb-3">
            Transactional email — account confirmation and password reset — is
            handled via a custom domain setup using Cloudflare and Resend rather
            than a default provider.
          </p>
          <p className="text-base md:text-md pb-3">
            Built with Kotlin and Jetpack Compose. Backend hosted on Supabase
            with PostgreSQL.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=dev.auroralaboratories.trailweight&hl=sv"
            className="text-[#aa3bff] hover:underline"
          >
            Play Store →
          </a>
          <span className="mx-2">·</span>
          <a
            href="https://github.com/adam-398/trail-weight"
            className="text-[#aa3bff] hover:underline"
          >
            GitHub →
          </a>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-16 p-16 border-t border-[#2e303a] min-h-screen">
        <div className="w-72 shrink-0 md:sticky md:top-8 md:h-fit">
          <h2 className="text-2xl md:text-3xl">Kindred</h2>
          <p>Media tracker with AI recommendations</p>
          <KindredCarousel />
        </div>
        <div className="flex-1">
          <p className="text-base md:text-md pb-3">
            A media tracking app for movies, TV shows, books, and audiobooks.
          </p>
          <p className="text-base md:text-md pb-3">
            Kindred lets you log and organise your media across four categories,
            track what you have watched or read, manage wishlists, and import
            your existing Audible library directly from a JSON export.
            Authentication and data storage are handled via Supabase.
          </p>
          <p className="text-base md:text-md pb-3">
            Audiobook suggested titles are generated for users based on titles
            they have enjoyed while weighting the attributes which matter most
            to them, powered via the Gemini API.
          </p>
          <p className="text-base md:text-md pb-3">
            Built with Kotlin and Jetpack Compose
          </p>
          <a
            href="https://github.com/adam-398/kindred"
            className="text-[#aa3bff] hover:underline"
          >
            GitHub →
          </a>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-16 p-16 border-t border-[#2e303a] min-h-screen">
        <div className="w-72 shrink-0 md:sticky md:top-8 md:h-fit">
          <h2 className="text-2xl md:text-3xl">Norrsken</h2>
          <p>Weather & aurora forecasting</p>
          <img
            src={norrsken1}
            className="rounded-2xl mt-4 shadow-2xl w-full mx-auto"
            alt="Norrsken app screenshot"
          />
        </div>
        <div className="flex-1">
          <p className="text-base md:text-md pb-3">
            A weather and aurora forecasting app for the Nordic skies
          </p>

          <p className="text-base md:text-md pb-3">
            Norrsken features real-time weather data and live aurora tracking to
            help users plan their outdoor activities around the weather and
            northern lights visibility. The app includes reactive
            temperature-based colour coding, custom animated weather effects for
            rain and snow, and clean scrollable UI cards all built natively.
          </p>
          <p className="text-base md:text-md pb-3">
            Built with Kotlin and Jetpack Compose
          </p>
          <a
            href="https://github.com/adam-398/norrsken-kotlin"
            className="text-[#aa3bff] hover:underline"
          >
            GitHub →
          </a>
        </div>
      </section>

      <footer>
        <p>Adam Hodges · adamfhodges@protonmail.com</p>
      </footer>
    </div>
  );
}
