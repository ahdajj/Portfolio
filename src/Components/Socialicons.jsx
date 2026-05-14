import React from 'react'
import './SocialiconsStyle.css'
import { IconPhoneFilled , IconMailFilled ,IconBrandGithubFilled  , IconBrandLinkedinFilled   } from '@tabler/icons-react';

export default function Socialicons() {
  return (
    <div className="button-container">
  <button className="Sbutton flex-center">
    <a href='tel:0638232573'> 
        <IconPhoneFilled size='32px'color='white' className='btn-svg' />
    </a>
    <div class="tooltip">0638232573</div>
  </button>
  <button className="Sbutton flex-center">
    <a href='mailto:ahd.ajjawe@gmail.com'> 
        <IconMailFilled size='32px'color='white' className='btn-svg' />
    </a>
    <div class="tooltip">ahd.ajjawe@gmail.com</div>
  </button>
    
  <button className="Sbutton flex-center">
    <a href='https://github.com/ahdajj' target='blank'>
    <IconBrandGithubFilled  size='32px'color='white' className='btn-svg' />
    <div class="tooltip">Github</div>
    </a>
  </button>
  <button className="Sbutton flex-center">
    <a href='https://www.linkedin.com/in/ahmad-ajjawe-438916219' target='blank'> 
    <IconBrandLinkedinFilled size='32px'color='white' className='btn-svg'/>
    <div class="tooltip">LinkedIn</div>
    </a>
  </button>
</div>
  )
}
