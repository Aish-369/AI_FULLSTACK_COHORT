import "./App.css";

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">AP<span>.</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <a className="contact-btn" href="mailto:yourmail@example.com">
          Let's Connect →
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <p className="tag">👋 HELLO, I'M</p>

            <h1>
              Aishwarya
              <br />
              <span>Pawar.</span>
            </h1>

            <p className="intro">
              BCS Computer Science graduate who loves building things,
              learning technology and turning ideas into real projects.
            </p>

            <div className="buttons">
              <a href="#projects" className="primary-btn">
                View My Work ↗
              </a>

              <a href="#about" className="secondary-btn">
                About Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"></div>

            <div className="profile-circle">AP</div>

            <h2>Future Builder.</h2>
            <p>Data • Technology • Ideas</p>

            <div className="mini-stats">
              <div>
                <strong>BCS</strong>
                <span>Computer Science</span>
              </div>

              <div>
                <strong>3+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            Curious mind.
            <br />
            <span>Builder mindset.</span>
          </h2>

          <p className="about-text">
            I'm Aishwarya, a Computer Science graduate interested in
            technology, data, AI and product building. I enjoy learning by
            creating real projects instead of only studying theory.
          </p>

          <div className="info-grid">
            <div className="info-box">
              <span>Education</span>
              <strong>BCS Computer Science</strong>
            </div>

            <div className="info-box">
              <span>Current Focus</span>
              <strong>Data Analytics + Development</strong>
            </div>

            <div className="info-box">
              <span>Learning</span>
              <strong>JavaScript + React</strong>
            </div>

            <div className="info-box">
              <span>Mindset</span>
              <strong>Learn → Build → Improve</strong>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <p className="section-label">02 — SKILLS</p>

          <h2>
            Things I <span>work with.</span>
          </h2>

          <div className="skills">
            <span>Python</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git & GitHub</span>
            <span>Data Visualization</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="section-label">03 — PROJECTS</p>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <div className="projects">
            <article className="project-card">
              <div className="project-number">01</div>

              <h3>SoulTalk</h3>

              <p>
                An AI-based emotional support application designed to provide
                a warm, supportive conversational experience.
              </p>

              <div className="project-tags">
                <span>AI</span>
                <span>Android</span>
                <span>RAG</span>
              </div>
            </article>

            <article className="project-card">
              <div className="project-number">02</div>

              <h3>Health Alarm</h3>

              <p>
                A reminder and healthcare management application for
                medicines, water, checkups and appointments.
              </p>

              <div className="project-tags">
                <span>Java</span>
                <span>PostgreSQL</span>
                <span>Swing</span>
              </div>
            </article>
          </div>
        </section>

        {/* CURRENT */}
        <section className="cta">
          <p>WHAT'S NEXT?</p>

          <h2>
            Learning today.
            <br />
            <span>Building tomorrow.</span>
          </h2>

          <p>
            Currently exploring JavaScript and React while growing my skills
            in data, technology and product building.
          </p>

          <a href="#top" className="primary-btn">
            Back to Top ↑
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Aishwarya Pawar</p>
        <p>Built while learning React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;