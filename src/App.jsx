export default function App() {
  return (
    <div>

      <section className="hero">
        <h1>Adam Hodges</h1>
        <p>Android & full-stack developer</p>
        <a href="https://github.com/adam-398">GitHub →</a>
      </section>

      <section className="project" id="waymark">
        <div className="project-sticky">
          <h2>Waymark</h2>
          <p>Full-stack hiking app</p>
        </div>
        <div className="project-content">
          <p>Content goes here</p>
        </div>
      </section>

      <section className="project" id="kindred">
        <div className="project-sticky">
          <h2>Kindred</h2>
          <p>Media tracker with AI recommendations</p>
        </div>
        <div className="project-content">
          <p>Content goes here</p>
        </div>
      </section>

      <section className="project" id="norrsken">
        <div className="project-sticky">
          <h2>Norrsken</h2>
          <p>Weather & aurora forecasting</p>
        </div>
        <div className="project-content">
          <p>Content goes here</p>
        </div>
      </section>

      <section className="project" id="fivecut">
        <div className="project-sticky">
          <h2>5 Cut Calculator</h2>
          <p>Woodworking utility</p>
        </div>
        <div className="project-content">
          <p>Content goes here</p>
        </div>
      </section>

      <footer>
        <p>Adam Hodges · adamfhodges@protonmail.com</p>
      </footer>

    </div>
  )
}