import './PagesStyle.css'
import Hero from '../Components/Hero'
import SkillsCard from '../Components/SkillsCard'
import NewCard from '../Components/NewCard'
import TimeLine from '../Components/TimeLine'
import ProfileCard from '../component/ProfileCard'
import MeCard from'../Components/MeCard'

export default function Home() {
  return (
    <div id='Home'>
      <div className='leftpart'>
          <ProfileCard
            name="Ahmad Ajjawe"
            title="Web developer"
            handle=""
            status=""
            contactText="Contact Me"
            avatarUrl="/path/to/avatar.jpg"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl="/assets/demo/iconpattern.png"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
      </div>
      <div className='rightpart'>
        <div id="stars"></div>
        <Hero/> 
        <SkillsCard/>
        <NewCard/>
        <TimeLine/>
      </div>
    </div>
  )
}
