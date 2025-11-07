import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot Platform',
      description: 'Built an intelligent chatbot platform using LLM models for customer support automation with real-time responses and context-aware conversations.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/00ffff?text=AI+Chatbot',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      color: 'cyan'
    },
    {
      id: 2,
      title: 'E-Commerce Microservices',
      description: 'Developed a scalable e-commerce platform using microservices architecture with Spring Boot, implementing payment gateway and inventory management.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/9d00ff?text=E-Commerce',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'Kubernetes'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Created a comprehensive analytics dashboard with real-time data visualization, featuring interactive charts and customizable widgets.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/ff00ff?text=Analytics',
      technologies: ['React', 'D3.js', 'WebSocket', 'Express', 'Redis'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      color: 'pink'
    },
    {
      id: 4,
      title: 'DevOps Automation Pipeline',
      description: 'Implemented automated CI/CD pipelines using Jenkins and Azure DevOps, reducing deployment time by 60% and improving code quality.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/00ff88?text=DevOps',
      technologies: ['Jenkins', 'Azure DevOps', 'Docker', 'Terraform', 'Kubernetes'],
      github: 'https://github.com',
      demo: null,
      featured: false,
      color: 'green'
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Full-stack task management application with drag-and-drop interface, team collaboration features, and real-time updates.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/0080ff?text=Task+Manager',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
      color: 'blue'
    },
    {
      id: 6,
      title: 'Machine Learning Model API',
      description: 'RESTful API for serving machine learning models with endpoint for predictions, model versioning, and performance monitoring.',
      image: 'https://via.placeholder.com/600x400/0a0a0f/ffff00?text=ML+API',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'Docker', 'PostgreSQL'],
      github: 'https://github.com',
      demo: null,
      featured: false,
      color: 'yellow'
    }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      cyan: 'neon-text',
      purple: 'neon-text-purple',
      pink: 'neon-text-pink',
      green: 'neon-text',
      blue: 'neon-text-purple',
      yellow: 'neon-text-pink'
    };
    return colorMap[color] || 'neon-text';
  };

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header fade-in">
          <h1 className="page-title">
            <span className="title-tag neon-text">{'<'}</span>
            My Projects
            <span className="title-tag neon-text">{'/>'}</span>
          </h1>
          <p className="page-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <section className="featured-section">
          <h2 className="section-heading">
            <FaCode className="section-icon" />
            Featured Projects
          </h2>
          <div className="featured-grid">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={project.id} 
                className="project-card featured-card neon-card fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="overlay-link"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className={`project-title ${getColorClass(project.color)}`}>
                    {project.title}
                  </h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge neon-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link neon-button"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link neon-button"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="other-projects-section">
          <h2 className="section-heading">
            <FaCode className="section-icon" />
            Other Projects
          </h2>
          <div className="projects-grid">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.id} 
                className="project-card neon-card slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="overlay-link"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className={`project-title ${getColorClass(project.color)}`}>
                    {project.title}
                  </h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge neon-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link neon-button"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link neon-button"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
