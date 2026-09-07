import  { useEffect, useState } from "react";
import './MenuStyle.css'
import { IconUserFilled , IconLayoutDashboardFilled ,IconGitFork ,IconPhoneFilled  } from '@tabler/icons-react';

const sections = ["Hero", "Skills", "Portfolio", "Contact"];
const svg=[
            <IconUserFilled stroke={2} color="#ffffff" size='32'/> , 
            <IconLayoutDashboardFilled stroke={2} color="#ffffff" size='34'/>, 
            <IconGitFork stroke={2} color="#ffffff" size='34' />, 
            <IconPhoneFilled stroke={2} color="#ffffff" size='32' />
          ]

export default function CyberNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNav = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id);

            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cyber-signboard">
      <div className="cyber-switch">

        {sections.map((section, index) => (
          <button
            key={section}
            className={`cyber-label ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleNav(section)}
          >
            {svg[index]}
          </button>
        ))}

        <div
          className="cyber-highlight"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        >
          <div className="highlight-inner"></div>
        </div>

      </div>
    </div>
  );
}