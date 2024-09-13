import React from 'react'
import Navbar from '../../const/Navbar/Navbar'
import "./CoursePage.css"
import CardCourse from '../../const/course-card/CardCourse'

export default function CoursePage() {
  return (
    <div className='CoursePage'>
        <Navbar/>
        <div className='resume-course'>
          <div className="text-view-history">
            <h2>Welcome back, ready for your next lesson?</h2>
            <h4>View History</h4>
          </div>
          <div className="cards">
            <CardCourse/>
            <CardCourse/>
            <CardCourse/>
            
          </div>
        </div>
    </div>
  )
}
