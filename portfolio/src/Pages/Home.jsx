import Hero from '../Components/Hero'
import SkillsCard from '../Components/SkillsCard'
import './PagesStyle.css'
import NewCard from '../Components/NewCard'
import TimeLine from '../Components/TimeLine'

export default function Home() {
  return (
    <div id='Home'>

      <Hero/> 
      <SkillsCard/>
      <NewCard/>
      <TimeLine/>
      
    </div>
  )
}
