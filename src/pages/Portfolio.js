import AidBridgeImg from "../Images/aidbridge.png";
import ChatAppImg from "../Images/chatapp.png";
import CrimeGuardImg from "../Images/crimeguard.png";
import MovieRecomendImg from "../Images/movierecomend.png";


const Portfolio = () => {
  const projects = [
    {
    id: 1,
    title: "CrimeGuard",
    description:
      "Real-time violence detection system using CNNs and OpenCV, with a React and Flask interface showing crime trends and notifications.",
    image: CrimeGuardImg,
    tags: ["Python", "CNN", "OpenCV", "React", "Flask"],
    githubUrl: "https://github.com/khushibansal11/MP6-CrimeGuard",
    demoUrl: "https://crime-guard.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommender System",
    description:
      "NLP-based movie recommendation engine using cosine similarity and CountVectorizer, deployed with Flask.",
    image: MovieRecomendImg,
    tags: ["Python", "NLP", "Flask", "Machine Learning"],
    githubUrl: "https://github.com/khushibansal11/MovieRecommenderSystem",
    demoUrl: "https://movierecommendersystemwebsite.streamlit.app/",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description:
      "A full-stack real-time chat app with Socket.IO, Node.js backend, and React frontend.",
    image: ChatAppImg,
    tags: ["JavaScript", "Node.js", "Socket.IO", "React", "Express"],
    githubUrl: "https://github.com/khushibansal11/Real-Time-Chat-Application",
    demoUrl: "https://real-time-chat-application-two-gamma.vercel.app/",
  },
  {
    id: 4,
    title: "AidBridge",
    description:
      "Full-stack web app connecting seekers and helpers by location and skills using React, Node.js, Express, MongoDB, JWT, and cloud storage.",
    image: AidBridgeImg,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/khushibansal11/AidBridgeMernProject",
    demoUrl: "https://aidbridgemernproject-frontend.onrender.com/",
  },
];

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-2">Portfolio</h1>
        <p className="text-center text-muted mb-5 lead">
          Showcasing my projects in AI, machine learning, and web development
        </p>

        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-6 mb-4" key={project.id}>
              <div className="card project-card shadow-sm fade-in-up">
                <img
                  src={project.image || "/placeholder.svg"}
                  className="card-img-top project-image"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge bg-secondary me-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="fab fa-github me-1"></i>
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fas fa-external-link-alt me-1"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
