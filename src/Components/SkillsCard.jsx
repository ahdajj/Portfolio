import './SkillsCardStyle.css'

import { IconCode ,IconBrandCss3 ,IconBrandJavascript ,IconBrandNodejs ,IconBrandReact ,IconBrandWordpress ,IconBrandGit ,IconBrandGithub  ,  IconBrandNpm,IconBrandPython , IconBrandDjango , IconBrandMongodb , IconCodeAsterisk , IconCodeDots ,IconApiApp  } from '@tabler/icons-react';

export default function SkillsCard() {

const technicalSkills=[
  {
    label:'HTML' , 
    svg: <IconCode stroke={2} size='28' />
  },
  {
    label:'CSS' , 
    svg:  <IconBrandCss3 stroke={2}   size='28'/>
  },
  {
    label:'JavaScript' , 
    svg:  <IconBrandJavascript stroke={2}   size='28'/>
  },
  {
    label:'React' , 
    svg:  <IconBrandReact stroke={2}  size='28' />
  },
  {
    label:'jQuery' , 
    svg:  <IconCodeAsterisk stroke={2}   size='28'/>
  },
  {
    label:'Node.js' , 
    svg:  <IconBrandNodejs stroke={2}  size='28' />
  },
  {
    label:'Express.js' , 
    svg:  <IconCodeDots stroke={2}  size='28'/>
  },
  {
    label:'Python' , 
    svg:  <IconBrandPython stroke={2}  size='28' />
  },
  {
    label:'Django/DjRest' , 
    svg:  <IconBrandDjango stroke={2}  size='28' />
  },
  {
    label:'MongoDB' , 
    svg:  <IconBrandMongodb stroke={2}  size='28'/>
  },
  {
    label:'API' , 
    svg:  <IconApiApp stroke={2}  size='28'/>
  },
  {
    label:'WordPress' , 
    svg:  <IconBrandWordpress stroke={2}  size='28'/>
  },
  {
    label:'NPM' , 
    svg:  <IconBrandNpm stroke={2}   size='28'/>
  },
  {
    label:'Git' , 
    svg: <IconBrandGit stroke={2}   size='28'/>
  },
  {
    label:'GitHub' , 
    svg:  <IconBrandGithub stroke={2}  size='28'/>
  }
]

  return (
    <div id='Skills'>
      <div className="skills-container">
        
        <div className="technical-skills-section">
          <h2 className="skills-title">Core Technical Skills</h2>
          <div className="tech-skills-grid">
            {technicalSkills.map((tech, index) => (
              <div key={index} className="tech-skill-item">
                <span className="tech-skill-text">{tech.svg}</span>
                <span className="tech-skill-text">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

         <div className='Achivment'>
          <p> <span>+4</span> Satisfied clints</p>
          <p><span>+4</span> Wprdpress Websites</p>
          <p><span>+5</span> High code full projects</p>
          <p><span>+12 </span> High code small projects</p>

        </div> 

      </div>
    </div>
  );
}