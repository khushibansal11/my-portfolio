const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h1 className="text-center mb-5">About Me</h1>

        <div className="row">
          
          {/* 
          <div className="col-lg-4 mb-4">
            <div className="text-center">
              <img
                src="/images/profile.jpg"
                alt="Khushi Bansal"
                className="img-fluid rounded-circle mb-3 shadow"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
              <h3>Khushi Bansal</h3>
              <p className="text-muted">B.Tech Student in Computer Science (AI & ML)</p>
            </div>
          </div> 
          */}

          <div className="col-12">
            <div className="row">
              {/* Education Section */}
              <div className="col-lg-4 mb-4">
                <h3 className="mb-4">
                  <i className="fas fa-graduation-cap text-primary me-2"></i>
                  Education
                </h3>

                <div className="card mb-3 fade-in-up">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="mb-0">B.Tech Computer Science (AI & ML)</h5>
                      <span className="badge bg-primary">80.02%</span>
                    </div>
                    <p className="text-muted mb-1">KIET Group of Institutions, Ghaziabad</p>
                    <small className="text-muted">2021 - 2025</small>
                  </div>
                </div>

                <div className="card mb-3 fade-in-up">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="mb-0">12th Grade, CBSE</h5>
                      <span className="badge bg-primary">92.8%</span>
                    </div>
                    <p className="text-muted mb-1">Modern Public School, Bhiwadi</p>
                    <small className="text-muted">Mar 2021</small>
                  </div>
                </div>

                <div className="card mb-3 fade-in-up">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="mb-0">10th Grade, CBSE</h5>
                      <span className="badge bg-primary">92.6%</span>
                    </div>
                    <p className="text-muted mb-1">Modern Public School, Bhiwadi</p>
                    <small className="text-muted">Mar 2019</small>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="col-lg-4 mb-4">
                <h3 className="mb-4">
                  <i className="fas fa-briefcase text-primary me-2"></i>
                  Work Experience
                </h3>

                <div className="card mb-3 fade-in-up">
                  <div className="card-body">
                    <h5>AI-ML Virtual Internship</h5>
                    <p className="text-muted mb-1">AICTE Eduskills</p>
                    <small className="text-muted">Oct 2024 – Dec 2024</small>
                  </div>
                </div>

                <div className="card mb-3 fade-in-up">
                  <div className="card-body">
                    <h5>Machine Learning Intern</h5>
                    <p className="text-muted mb-1">YBI Foundation</p>
                    <small className="text-muted">Aug 2023</small>
                  </div>
                </div>
              </div>

              {/* Achievements & Certifications Section */}
              <div className="col-lg-4 mb-4">
                <h3 className="mb-4">
                  <i className="fas fa-trophy text-primary me-2"></i>
                  Achievements & Certifications
                </h3>

                <div className="d-flex flex-wrap gap-2 mb-3 fade-in-up">
                  <span className="badge bg-success p-2">DSA</span>
                  <span>Solved 350+ DSA problems on GeeksforGeeks</span>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-3 fade-in-up">
                  <span className="badge bg-success p-2">Presentation</span>
                  <span>Presented at Innotech 2024</span>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-3 fade-in-up">
                  <span className="badge bg-success p-2">Certificate</span>
                  <span>Data Analysis certification from Freecodecamp</span>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-3 fade-in-up">
                  <span className="badge bg-success p-2">Certificate</span>
                  <span>AI Foundations certification from LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
