import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Skills from "./Skills"

const Home = () => {
  return (
    <>
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <h1 className="display-4 fw-bold mb-4 fade-in-up">Hi, I'm Khushi Bansal</h1>
            <p className="lead mb-4 fade-in-up">
              A final-year B.Tech student specializing in Computer Science with AI and Machine Learning at KIET Group of
              Institutions. I'm passionate about leveraging technology to solve real-world problems and continuously
              learning to build innovative and impactful solutions.
            </p>
            <div className="d-flex flex-wrap gap-3 fade-in-up">
              <a href="#portfolio" className="btn btn-primary btn-lg">
                <i className="fas fa-briefcase me-2"></i>
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                <i className="fas fa-envelope me-2"></i>
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
            <div className="profile-image-container fade-in-up">
              <img
                src="/images/profile.jpg"
                alt="Khushi Bansal"
                className="profile-image img-fluid rounded-circle shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <About id="about" />
    <Portfolio id="portfolio" />
    <Skills id="skills" />
    <Contact id="contact" />
    </>
  )
}

export default Home
