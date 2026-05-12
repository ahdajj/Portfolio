import './HeroStyle.css'
import ProfileCard from '../component/ProfileCard'
import Download from './Download'

const Languages = [{lang:'Arabic' , prog:'100%'} , {lang:'English' , prog:'100%'} , {lang:'Dutch' , prog:'70%'}]
export default function Hero() {
  return (
    <div id='Hero'>

      <div className='Profile'>
        <h1>PROFILE</h1>
        <p>Web Developer with hands-on experience in full-stack development using React, Node.js,Express, MongoDB, and WordPress. Experienced mentor who has guided junior developers through real-world projects and best practices. Strong problem-solver with a proactive mindset, currently seeking a junior mid Web Developer role in the Netherlands</p>
          <Download/>
      </div>

    </div>
  )
}