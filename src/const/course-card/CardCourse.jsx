import React from 'react'
import "./CardCourse.css"

export default function CardCourse() {
  return (
    <div className='CardCourse'>
        <img src="images/coursecard-thumbnail.png" alt="thumbnail" className='thumbnail'/>
        <h3>AWS Certified Solutions Architect</h3>
        <div className="username">
            <img src="images/profile.png" alt="Profile" className='profile'/>
            <h3>Ayush ↓ </h3>
        </div>
        <img src="images/bardone.png" alt="" className='bar'/>
        <h4>Lesson 5 of 7</h4>
    </div>
  )
}
