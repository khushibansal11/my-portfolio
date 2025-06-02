const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} Khushi Bansal. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com/khushibansal11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-bansal-865170243/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:khushibansal635@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
