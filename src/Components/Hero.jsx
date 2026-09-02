import './HeroStyle.css'
import Download from './Download'
import ProfileCard from './ProfileCard'
import Socialicons from '../Components/Socialicons'
export default function Hero() {
  return (
    <div id='Hero'>

      <section className='hero-intro'>
         <ProfileCard
          name="" 
          title=""
          handle=""
          status=""
          contactText="Contact Me"
          avatarUrl="ZWfv6.jpg"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
          behindGlowColor="rgb(255, 255, 255)"
          iconUrl="/assets/demo/iconpattern.png"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
        <div className='hero-text'>
          <h2>Ahmad Ajjawe</h2>
          <h5>Web Developer</h5>
        </div>
      </section>
     
      <section className='Profile'>
          <h1>PROFILE</h1>
          <p>Full-stack web developer building responsive applications with React, JavaScript, Node.js, Express, and MongoDB. Experienced in REST APIs, UI/UX, and WordPress development, with a focus on performance, SEO, and engaging user experiences</p>
          <Download/>
      </section>

      <aside  className="social-links">
        <Socialicons/>
      </aside>
      
    </div>
  )
}