import { FaGraduationCap, FaBook, FaTrophy, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'XYZ Institute of Technology',
      location: 'City, State',
      duration: '2018 - 2022',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering and Artificial Intelligence',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Winner of Annual Hackathon 2021',
        'Published research paper on Machine Learning'
      ]
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'ABC Senior Secondary School',
      location: 'City, State',
      duration: '2016 - 2018',
      grade: 'Percentage: 92%',
      description: 'Science Stream with Computer Science',
      achievements: [
        'School Topper in Computer Science',
        'State Level Science Exhibition Winner'
      ]
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'ABC Senior Secondary School',
      location: 'City, State',
      duration: '2015 - 2016',
      grade: 'CGPA: 9.2/10',
      description: 'Strong foundation in Mathematics and Science',
      achievements: [
        'Academic Excellence Award',
        'Best Student in Mathematics'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      name: 'Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023'
    },
    {
      name: 'Professional Scrum Master (PSM I)',
      issuer: 'Scrum.org',
      date: '2022'
    },
    {
      name: 'Advanced Angular Development',
      issuer: 'Udemy',
      date: '2022'
    }
  ];

  const skills = {
    'Frontend': ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS'],
    'Backend': ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'GraphQL'],
    'Database': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    'DevOps': ['Jenkins', 'Azure DevOps', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Hugging Face']
  };

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1 className="page-title">
            <span className="title-tag neon-text">{'<'}</span>
            About Me
            <span className="title-tag neon-text">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            My educational background and professional journey
          </p>
        </div>

        {/* About Section */}
        <section className="about-section fade-in">
          <div className="about-content neon-card">
            <div className="about-image">
              <div className="image-placeholder">
                <FaLaptopCode className="placeholder-icon" />
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-heading neon-text-cyan">Who Am I?</h2>
              <p className="about-description">
                I'm a passionate Full Stack Developer with 2+ years of experience in building 
                scalable web applications and integrating cutting-edge AI technologies. My journey 
                in tech started with a curiosity for how things work and evolved into a love for 
                creating innovative solutions that make a difference.
              </p>
              <p className="about-description">
                I specialize in modern web technologies like Angular, React, Java Spring Boot, and 
                have hands-on experience with cloud platforms and DevOps practices. I'm particularly 
                interested in AI/ML and exploring how AI can enhance user experiences and solve 
                complex problems.
              </p>
              <p className="about-description">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="section-title">
            <FaGraduationCap className="section-icon" />
            Education
          </h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="education-card neon-card fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="card-corner"></div>
                <div className="edu-header">
                  <div className="edu-icon">
                    <FaBook />
                  </div>
                  <div className="edu-details">
                    <h3 className="edu-degree neon-text-purple">{edu.degree}</h3>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <div className="edu-meta">
                      <span className="edu-duration">{edu.duration}</span>
                      <span className="edu-location">{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="edu-grade">{edu.grade}</div>
                <p className="edu-description">{edu.description}</p>
                {edu.achievements && (
                  <div className="achievements">
                    <h5 className="achievements-title">
                      <FaTrophy /> Achievements
                    </h5>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">
            <FaLaptopCode className="section-icon" />
            Technical Skills
          </h2>
          <div className="skills-container">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={category} 
                className="skill-category neon-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="category-title neon-text">{category}</h3>
                <div className="skill-tags">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="skill-tag neon-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certifications-section">
          <h2 className="section-title">
            <FaTrophy className="section-icon" />
            Certifications
          </h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="cert-card neon-card slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-badge">
                  <FaTrophy />
                </div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
