import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: 'Jan 2023 - Present',
      type: 'Full-time',
      description: 'Leading full-stack development projects with focus on scalable architectures and modern technologies.',
      responsibilities: [
        'Developed and maintained enterprise-level Angular applications with 50,000+ daily active users',
        'Built RESTful APIs using Java Spring Boot with microservices architecture',
        'Implemented CI/CD pipelines using Jenkins and Azure DevOps, reducing deployment time by 60%',
        'Containerized applications using Docker and orchestrated with Kubernetes',
        'Integrated AI/LLM models for intelligent features and automation',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'Jenkins', 'Azure', 'Docker', 'AI/LLM', 'Kubernetes'],
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Innovation Labs',
      location: 'Hybrid',
      duration: 'Jun 2022 - Dec 2022',
      type: 'Full-time',
      description: 'Worked on cutting-edge projects involving AI integration and cloud infrastructure.',
      responsibilities: [
        'Developed responsive web applications using Angular and React frameworks',
        'Designed and implemented backend services with Java and Spring Boot',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Optimized application performance, achieving 40% faster load times',
        'Implemented Azure cloud solutions for scalability and reliability',
        'Participated in Agile ceremonies and sprint planning'
      ],
      technologies: ['React', 'Angular', 'Java', 'Spring Boot', 'Azure', 'PostgreSQL', 'Git'],
      color: 'purple'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'On-site',
      duration: 'Jan 2022 - May 2022',
      type: 'Internship',
      description: 'Gained hands-on experience in web development and learned industry best practices.',
      responsibilities: [
        'Assisted in developing web applications using modern JavaScript frameworks',
        'Wrote clean, maintainable code following industry standards',
        'Fixed bugs and implemented new features based on user feedback',
        'Participated in daily standups and team collaboration sessions',
        'Learned Docker containerization and deployment strategies',
        'Contributed to documentation and knowledge sharing'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Docker'],
      color: 'pink'
    }
  ];

  const getTechColor = (color) => {
    const colors = {
      cyan: 'var(--neon-cyan)',
      purple: 'var(--neon-purple)',
      pink: 'var(--neon-pink)'
    };
    return colors[color] || 'var(--neon-cyan)';
  };

  return (
    <div className="experience-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1 className="page-title">
            <span className="title-tag neon-text">{'<'}</span>
            Work Experience
            <span className="title-tag neon-text">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            My professional journey in software development
          </p>
        </div>

        {/* Total Experience Summary - Moved to Top */}
        <div className="experience-summary neon-border fade-in" style={{ marginBottom: '4rem' }}>
          <h3 className="summary-title neon-text">Total Experience Summary</h3>
          <div className="summary-stats">
            <div className="summary-stat">
              <div className="stat-value neon-text-purple">2+</div>
              <div className="stat-text">Years of Experience</div>
            </div>
            <div className="summary-stat">
              <div className="stat-value neon-text-pink">3</div>
              <div className="stat-text">Companies Worked</div>
            </div>
            <div className="summary-stat">
              <div className="stat-value neon-text">15+</div>
              <div className="stat-text">Projects Delivered</div>
            </div>
          </div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot" style={{ 
                boxShadow: `0 0 20px ${getTechColor(exp.color)}`,
                borderColor: getTechColor(exp.color)
              }}></div>
              
              <div className="experience-card neon-card">
                <div className="card-header">
                  <div className="company-badge" style={{ 
                    borderColor: getTechColor(exp.color),
                    color: getTechColor(exp.color)
                  }}>
                    <FaBriefcase />
                  </div>
                  <div className="header-content">
                    <h3 className="job-title" style={{ color: getTechColor(exp.color) }}>
                      {exp.title}
                    </h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <span className="job-type" style={{ 
                    borderColor: getTechColor(exp.color),
                    color: getTechColor(exp.color)
                  }}>
                    {exp.type}
                  </span>
                </div>

                <div className="card-meta">
                  <div className="meta-item">
                    <FaCalendar />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="responsibilities">
                  <h5 className="section-subtitle">
                    <FaCode /> Key Responsibilities
                  </h5>
                  <ul className="responsibility-list">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="responsibility-item">
                        <span className="bullet" style={{ color: getTechColor(exp.color) }}>▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h5 className="section-subtitle">Technologies Used</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag"
                        style={{ 
                          borderColor: getTechColor(exp.color),
                          color: getTechColor(exp.color)
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
