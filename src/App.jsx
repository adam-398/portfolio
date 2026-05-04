import "./App.css";
import waymark1 from "./assets/waymark1.png";
import kindred1 from "./assets/kindred1.png";
import kindred2 from "./assets/kindred2.png";
import kindred3 from "./assets/kindred3.png";
import fivecut from "./assets/fivecut.png";
import norrsken1 from "./assets/norrsken1.png";

export default function App() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-start px-16">
        <h1 className="text-4xl md:text-7xl mb-10">Adam Hodges</h1>
        <p className="text-lg md:text-xl pb-2">
          Building Android apps, cross-platform tools and web experiences
        </p>
        <p className="text-base md:text-base pb-2">
          BSc Computing & IT with the Open University, available June 2026
        </p>
        <a
          className="text-lg md:text-md text-[#aa3bff] hover:underline"
          href="https://github.com/adam-398"
        >
          GitHub →
        </a>
      </section>

      <section className="project" id="waymark">
        <div className="project-sticky">
          <h2>Waymark</h2>
          <p>Full-stack hiking app</p>
          <img
            src={waymark1}
            alt="Waymark app screenshot"
            style={{ maxWidth: "100%", marginTop: "1rem" }}
          />
        </div>
        <div className="project-content">
          <p>
            A full-stack Android application for outdoor enthusiasts, primarily
            focused on northern Sweden, built as a final year dissertation
            project with the Open University.
          </p>
          <p>
            Waymark features GPS tracking and a full range of features and
            entity types, including vindskydd (wind shelters), stugor (mountain
            huts), parking spots, camping spots, foraging spots and route
            creation. Each entity features unique attributes and user-generated
            content including photos, notes and QR codes alongside GPX file
            import and export.
          </p>
          <p>
            Built with Kotlin and Jetpack Compose, with mapping provided by
            MapLibre and tile data from Lantmäteriet (the Swedish mapping
            authority). Backend hosted on Supabase with the PostGIS extension
            for geospatial queries.
          </p>
        </div>
      </section>

      <section className="project" id="kindred">
        <div className="project-sticky">
          <h2>Kindred</h2>
          <p>Media tracker with AI recommendations</p>
          <img src={kindred1} alt="Kindred app screenshot" />
          <img src={kindred2} alt="Kindred app screenshot" />
          <img src={kindred3} alt="Kindred app screenshot" />
        </div>
        <div className="project-content">
          <p>
            A media tracking app for movies, TV shows, books, and audiobooks.
          </p>
          <p>
            Kindred lets you log and organise your media across four categories,
            track what you have watched or read, manage wishlists, and import
            your existing Audible library directly from a JSON export.
            Authentication and data storage are handled via Supabase.
          </p>
          <p>
            Currently implementing AI-powered recommendations, audiobook
            suggested titles are generated for users based on titles they have
            enjoyed while weighting the attributes which matter most to them,
            powered via the Gemini API.
          </p>
          <p>
            Coming soon, AI-powered recommendations for movies, TV shows and
            books.
          </p>
          <p>Built with Kotlin and Jetpack Compose</p>
          <a href="https://github.com/adam-398/kindred">GitHub →</a>
        </div>
      </section>

      <section className="project" id="norrsken">
        <div className="project-sticky">
          <h2>Norrsken</h2>
          <p>Weather & aurora forecasting</p>
          <img src={norrsken1} alt="Norrsken app screenshot" />
        </div>
        <div className="project-content">
          <p>A weather and aurora forecasting app for the Nordic skies</p>

          <p>
            Norrsken features real-time weather data and live aurora tracking to
            help users plan their outdoor activities around the weather and
            northern lights visibility. The app includes reactive
            temperature-based colour coding, custom animated weather effects for
            rain and snow, and clean scrollable UI cards all built natively.
          </p>
          <p>Built with Kotlin and Jetpack Compose</p>
          <a href="https://github.com/adam-398/norrsken-kotlin">GitHub →</a>
        </div>
      </section>

      <section className="project" id="fivecut">
        <div className="project-sticky">
          <h2>5 Cut Calculator</h2>
          <p>Woodworking utility</p>
          <img src={fivecut} alt="5 Cut Calculator screenshot" />
        </div>
        <div className="project-content">
          <p>
            A simple woodworking utility application, able to implement "the 5
            cut method" for table fence adjustment. Includes a simple inch to mm
            converter.
          </p>
          <p>Built with Kotlin and Jetpack Compose</p>
          <a href="https://github.com/adam-398/5-cut-calculator-kotlin">
            GitHub (Kotlin version) →
          </a>
          <p>With a version written with React Native</p>
          <a href="https://github.com/adam-398/5-cut-calculator">GitHub →</a>
        </div>
      </section>

      <footer>
        <p>Adam Hodges · adamfhodges@protonmail.com</p>
      </footer>
    </div>
  );
}
