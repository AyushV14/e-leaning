import React from "react";
import Navbar from "../../const/Navbar/Navbar";
import "./CoursePage.css";
import CardCourse from "../../const/course-card/CardCourse";
import { useAuth0 } from "@auth0/auth0-react";

export default function CoursePage() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  console.log(user);
  
  if (isLoading) {
    return <div>Dashboard is Loading ...</div>;
  }
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }
  return (
    isAuthenticated && (
      <div className="CoursePage">
        <Navbar />
        <div className="resume-course">
          <div className="text-view-history">
            <h2>Welcome {user.name}, ready for your next lesson?</h2>
            <h4>View History</h4>
          </div>
          <div className="cards">
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </div>
        </div>
      </div>
    )
  );
}
