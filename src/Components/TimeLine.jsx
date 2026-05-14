import React from 'react'
import './TimelineStyle.css'
export default function TimeLine() {
  return (
    <div id='Timeline'>
  <div className="time-line">
    <h1>Timeline</h1>
    <div className="tl-container left">
      <div className="content">
        <h2>2023</h2>
        <p>WEB DEVELOPER & MENTOR.</p>
        <p>at Code Matrix Zone</p>
      </div>
    </div>
    <div className="tl-container right">
      <div className="content">
        <h2>2023</h2>
        <p>MERN STACK COURSE</p>
        <p>at Code Matrix Zone</p>
      </div>
    </div>
    <div className="tl-container left">
      <div className="content">
        <h2>2020</h2>
        <p>MARKETING AND OPERATION</p>
        <p>Legend Shipping Agency</p>
      </div>
    </div>
    <div className="tl-container right">
      <div className="content">
        <h2>2017</h2>
        <p>BACHELOR’S DEGREE IN TELECOMMUNICATION & ELECTRONIC ENGINEERING</p>
        <p>Damascus University</p>
      </div>
    </div>
  </div>
</div>
  )
}
