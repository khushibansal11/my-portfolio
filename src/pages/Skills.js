const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: ["C++", "Python","Java"],
    },
    {
      title: "Web Development",
      icon: "fas fa-globe",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "REST API",
        "Flask",
      ],
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Machine Learning",
      icon: "fas fa-brain",
      skills: [
        "Regression",
        "Classification",
        "Scikit-learn",
        "TensorFlow",
        "CNNs",
        "ANNs",
      ],
    },
    {
      title: "Other Skills",
      icon: "fas fa-tools",
      skills: ["Data Structures", "Algorithms", "OpenCV"],
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-5">Skills</h1>

        <div className="row">
          {skillCategories.map((category, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="card shadow-sm fade-in-up">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">
                    <i className={`${category.icon} me-2`}></i>
                    {category.title}
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
