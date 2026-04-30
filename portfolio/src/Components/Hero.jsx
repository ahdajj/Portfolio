import MeCard from'../Components/MeCard'
import './HeroStyle.css'
import ProfileCard from '../component/ProfileCard'

const Languages = [{lang:'Arabic' , prog:'100%'} , {lang:'English' , prog:'100%'} , {lang:'Dutch' , prog:'70%'}]
export default function Hero() {
  return (
    <div className='Hero'>

      <div className='Profile'>
        <h1>PROFIEL</h1>
        <p>Webontwikkelaar met praktijkervaring in full stack ontwikkeling met React, Node.js, Express, MongoDB en WordPress. Ervaren mentor die junior ontwikkelaars heeft begeleid bij echtprojecten en best practices. Oplossingsgerichten proactief, momenteel op zoek naar een junior–medior Web Developer functie in Nederland.</p>
        <a href="Ahmad Ajjawe NL CV.pdf" download>
          <button>Download mijn CV</button>
        </a>
      </div>

      <div class="langauges-container">
        <h1>Languages</h1>
        {Languages.map((item)=>(
            <div class="skill-box">
              <span class="title">{item.lang}</span>
              <div class="skill-bar">
                <span class="skill-per" style={{ width: item.prog }}>
                  <span class="tooltip">{item.prog}</span>
                </span>
              </div>
            </div>
        ))}
      </div>

    </div>
  )
}