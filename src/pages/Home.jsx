import { FaDownload, FaReact, FaAngular, FaJava, FaDocker, FaBrain, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiJenkins } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import './Home.css';

const Home = () => {
  const skills = [
    { name: 'Angular', icon: <FaAngular />, color: '#dd0031' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
    { name: 'Jenkins', icon: <SiJenkins />, color: '#d24939' },
    { name: 'Azure', icon: <VscAzure />, color: '#0078d4' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
    { name: 'AI/LLM', icon: <FaBrain />, color: '#00ffff' }
  ];

  const interests = [
    { title: 'AI Model Creation', icon: <FaBrain />, description: 'Building intelligent systems' },
    { title: 'Full Stack Development', icon: <FaCode />, description: 'End-to-end solutions' },
    { title: 'Programming', icon: <FaReact />, description: 'Clean, efficient code' },
    { title: 'Problem Solving', icon: <FaJava />, description: 'Algorithmic thinking' }
  ];

  const handleDownloadResume = () => {
    // Download resume from public folder
    const link = document.createElement('a');
    link.href = '/resume.txt'; // Replace with actual resume.pdf
    link.download = 'Harshit_Singh_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-tag">
              <span className="tag-bracket neon-text">{'<'}</span>
              <span className="tag-text">Hello World</span>
              <span className="tag-bracket neon-text">{'/>'}</span>
            </div>
            
            <h1 className="hero-title">
              I'm <span className="glitch neon-text" data-text="Harshit Singh">Harshit Singh</span>
            </h1>
            
            <div className="hero-subtitle">
              <span className="typing-text neon-text-purple">Full Stack Developer</span>
              <span className="typing-cursor">|</span>
            </div>
            
            <p className="hero-description">
              Crafting innovative solutions with <span className="highlight">2+ years</span> of experience 
              in cutting-edge technologies. Passionate about AI, full-stack development, and solving complex problems.
            </p>

            <div className="hero-stats">
              <div className="stat-item neon-card">
                <div className="stat-number neon-text">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item neon-card">
                <div className="stat-number neon-text-pink">8+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item neon-card">
                <div className="stat-number neon-text-purple">∞</div>
                <div className="stat-label">Projects Built</div>
              </div>
            </div>

            <button className="neon-button download-btn" onClick={handleDownloadResume}>
              <FaDownload />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="hero-visual slide-in-right">
            <div className="visual-container">
              <div className="orbiting-circle circle-1"></div>
              <div className="orbiting-circle circle-2"></div>
              <div className="orbiting-circle circle-3"></div>
              <div className="center-orb pulse">
                <div className="orb-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-tag neon-text">{'<'}</span>
            Tech Arsenal
            <span className="title-tag neon-text">{'/>'}</span>
          </h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card neon-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-glow" style={{ background: skill.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-tag neon-text">{'<'}</span>
            Areas of Interest
            <span className="title-tag neon-text">{'/>'}</span>
          </h2>
          
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className="interest-card neon-card slide-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="interest-icon neon-text-pink">
                  {interest.icon}
                </div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
                <div className="interest-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content neon-border">
            <h2 className="cta-title neon-text">Ready to Build Something Amazing?</h2>
            <p className="cta-description">
              Let's collaborate and create innovative solutions together
            </p>
            <a href="/contact" className="neon-button">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
