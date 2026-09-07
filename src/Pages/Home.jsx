import './PagesStyle.css'
import Hero from '../Components/Hero'
import SkillsCard from '../Components/SkillsCard'
import TimeLine from '../Components/TimeLine'
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





// import './PagesStyle.css'
// import Hero from '../Components/Hero'
// import SkillsCard from '../Components/SkillsCard'
// import TimeLine from '../Components/TimeLine'
// import ProfileCard from '../Components/ProfileCard'
// import PortfolioCard from '../Components/PortfolioCard'
// import Menu from "../Components/Menu"
// import Socialicons from '../Components/Socialicons'
// export default function Home() {
//   return (
//     <div id='Home'>
//        <div className='leftpart'>
//           <ProfileCard
//             name="Ahmad Ajjawe" 
//             title="Web developer"
//             handle=""
//             status=""
//             contactText="Contact Me"
//             avatarUrl="ZWfv6.jpg"
//             showUserInfo={false}
//             enableTilt={true}
//             enableMobileTilt={false}
//             onContactClick={() => console.log('Contact clicked')}
//             behindGlowColor="rgba(125, 190, 255, 0.67)"
//             iconUrl="/assets/demo/iconpattern.png"
//             behindGlowEnabled
//             innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
//           />
//           <Socialicons/>
//       </div>
//       <div className='rightpart'>
//         <div id="stars"></div> 
//          <ProfileCard
//             name="Ahmad Ajjawe" 
//             title="Web developer"
//             handle=""
//             status=""
//             contactText="Contact Me"
//             avatarUrl="ZWfv6.jpg"
//             showUserInfo={false}
//             enableTilt={true}
//             enableMobileTilt={false}
//             onContactClick={() => console.log('Contact clicked')}
//             behindGlowColor="rgba(125, 190, 255, 0.67)"
//             iconUrl="/assets/demo/iconpattern.png"
//             behindGlowEnabled
//             innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
//           />
//           <Socialicons/>
//         <Menu/>
//         <Hero/> 
//         <SkillsCard/>
//         <PortfolioCard/>
//         <TimeLine/>
//       </div>
//     </div>
//   )
// }
