import './SkillsCardStyle.css'

export default function SkillsCard() {

  const skills = [
    'Clear communication.',
    'Time management',
    'Team collaborations',
    'Ability to learn quickly',
    'Focused',
  ];

  const technicalSkills = [
    'CSS/HTML',
    'JavaScript',
    'React',
    'jQuery',
    'Node.js',
    'Express.js',
    'Python',
    'Django/Django Rest',
    'MongoDB',
    'WordPress',
    'SEO',
    'Git'
  ];

  return (
    <div id='Skills'>
      <div className="skills-container">
        <div className="skills-section">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="technical-skills-section">
          <h2 className="skills-title">Core Technical Skills</h2>
          <div className="tech-skills-grid">
            {technicalSkills.map((tech, index) => (
              <div key={index} className="tech-skill-item">
                <span className="tech-skill-text">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
