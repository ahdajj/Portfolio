import './PagesStyle.css'
import Hero from '../Components/Hero'
import SkillsCard from '../Components/SkillsCard'
import PortfolioCard from '../Components/PortfolioCard'
import Contact from '../Components/Contact'
import Menu from "../Components/Menu"

export default function Home() {
  return (
    <div id='Home'>
        <Menu/>
        <Hero/> 
        <SkillsCard/>
        <PortfolioCard/>
        <Contact/>
    </div>
  )
}