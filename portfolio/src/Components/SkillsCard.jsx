import './SkillsCardStyle.css'

export default function SkillsCard() {
  const skills = [
    'UI/UX Design',
    'Web Development',
    'Problem Solving',
    'Project Management',
    'Communication',
    'Team Work'
  ];

  const technicalSkills = [
    'JavaScript',
    'React',
    'CSS/HTML',
    'Node.js',
    'MongoDB',
    'Git'
  ];

  return (
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
  );
}
