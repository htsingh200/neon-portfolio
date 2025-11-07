import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/experience', label: 'Experience', icon: <FaBriefcase /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="glitch" data-text="<HS/>">{'<HS/>'}</span>
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
