import './PortfolioCardStyle.css';
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const HProjects = [
  {
    id: 1,
    name: 'Job Portal / Recruitment Platform',
    description: 'A fully functional platform to connect job seekers with companies, user Authentication and Autherization , Posting and commenting .',
    technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap' , 'Responsief'],
    link: '#',
    image: 'https://salsability.nl/'
  },
  {
    id: 2,
    name: 'Language Learning platform',
    description: 'A fully functional platform with dutch lessons, track user progress,user Authentication and Autherization ',
    technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap' , 'Responsief'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+Management'
  },
  {
    id: 3,
    name: 'Blog Platform',
    description: 'A modern blog platform with markdown support, categories, and user comments.',
    technologies: ['React', 'WordPress', 'PHP', 'MySQL'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Blog+Platform'
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing design and development skills.',
    technologies: ['React', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Portfolio'
  },
  {
    id: 5,
    name: 'Social Media Dashboard',
    description: 'A dashboard to manage multiple social media accounts and analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/00f2fe/ffffff?text=Social+Dashboard'
  },
  {
    id: 6,
    name: 'Weather App',
    description: 'A real-time weather application with location-based forecasts and alerts.',
    technologies: ['React', 'API Integration', 'Bootstrap', 'JavaScript'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/43e97b/ffffff?text=Weather+App'
  },
  {
    id: 7,
    name: 'Video Streaming Platform',
    description: 'A Netflix-like video streaming application with recommendations and user profiles.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/fa709a/ffffff?text=Video+Streaming'
  },
  {
    id: 8,
    name: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking app with workouts, nutrition, and progress analytics.',
    technologies: ['React', 'Firebase', 'Chart.js', 'Bootstrap'],
    link: '#',
    image: 'https://via.placeholder.com/400x250/fee140/ffffff?text=Fitness+Tracker'
  }
];
const WordPressProjects = [
  {
    id: 1,
    name: 'E-Commerce Store',
    description: 'A fully functional multilanguages e-commerce platform with product listing, shopping cart, checkout functionality and event management.',
    technologies: ['WordPress', 'SEO', 'Responsief', 'UI/UX'],
    link: 'https://salsability.nl/',
    image: 'https://salsability.nl/'
  },
  {
    id: 2,
    name: 'Event Management App',
    description: 'A fully functional multilanguages dance school platform with course booking, event management, flexible scheduling, and custom quote requests for workshops and private events.',
    technologies: ['WordPress', 'SEO', 'Responsief', 'UI/UX'],
    link: 'https://clubcadans.nl/',
    image: 'https://clubcadans.nl/'
  },
  {
    id: 3,
    name: 'Portfolio Platform',
    description: 'A modern Portfolio platform with services, about, and contact.',
    technologies: ['WordPress', 'SEO', 'Responsief', 'UI/UX'],
    link: 'https://3flogistiek.nl/',
    image: 'https://3flogistiek.nl/'
  },
 {
    id: 4,
    name: 'Portfolio Platform',
    description: 'A modern Portfolio platform with services, about, and contact.',
    technologies: ['WordPress', 'SEO', 'Responsief', 'UI/UX'],
    link: 'https://ajvestor.com/',
    image: 'https://ajvestor.com/'
  }]
export default function PortfolioCard() {
  const [projects , setprojects] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const startIndex = currentPage * itemsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handleProjects = (currentproject)=>{
    setprojects(currentproject)
    setCurrentPage(0)
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="portfolio">
      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Check out the websites and apps I've built</p>
      </div>
      <div className="project-nav-buttons">
        <Button variant="primary" onClick={()=>handleProjects(WordPressProjects)} className="btn-WP" disabled={projects===WordPressProjects}>
           WordPress Projects
          </Button>
          <Button variant="outline-secondary" onClick={()=>handleProjects(HProjects)} className="btn-H" disabled={projects===HProjects}>
            High Code Projects
          </Button>
      </div>
      <Row className="portfolio-grid">
        {displayedProjects.map((project) => (
          <Col key={project.id} md={6} lg={6} xl={3} className="portfolio-col">
            <Card className="portfolio-card">
              {/* <img 
                src={project.image} 
                alt={project.name}
                className="project-image"
              /> */}
              <iframe src={project.image} className="project-image" ></iframe>
              <Card.Body>
                <Card.Title className="project-title">{project.name}</Card.Title>
                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <Button variant="primary" href={project.link} className="btn-view">
                    View Project
                  </Button>
                  <Button variant="outline-secondary" href={project.link} className="btn-code">
                    Source Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

        { projects.length>0 && 
      <div className="pagination-controls">
        <Button 
          variant="primary" 
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="nav-btn"
        >
          ← Previous
        </Button>
        <span className="page-indicator">
          Page {currentPage + 1} of {totalPages}
        </span>
        <Button 
          variant="primary" 
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="nav-btn"
        >
          Next →
        </Button>
      </div>
      }
    </div>
  );
}
