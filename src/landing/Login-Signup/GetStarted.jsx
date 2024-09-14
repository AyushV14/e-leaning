import React from "react";
import "./GetStarted.css"; // Import the CSS file for styling
import { useAuth0 } from "@auth0/auth0-react";

const GetStarted = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div className="getstated">
      {/* Navbar */}
      <nav className="navbar">
        <img src="images/logo.png" alt="Logo" className="logo" />
        <div className="navbar-details">
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Main Section */}
      <div className="main-section">
        <div className="main-content">
          <h1 className="site-name">Learning Path Dashboard</h1>
          <p className="site-description">
            Welcome to Learning Path Dashboard, a platform designed to enhance
            your skills with personalized learning paths and resources. Track
            your reading statistics, create and follow tailored learning paths,
            and monitor your progress seamlessly.
          </p>
          <div className="button-container">
            <button
              className="auth-button"
              onClick={() =>
                loginWithRedirect({
                  redirectUri: `${window.location.origin}/dashboard`,
                })
              }
            >
              Login / Sign up
            </button>
            {/* <button
              className="auth-button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Signup
            </button> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="features-section">
        <h2>Our Special Features</h2>
        <div className="feature">
          <h3>Personalized Learning Paths</h3>
          <p>Customize your learning journey with resources tailored to your needs.</p>
        </div>
        <div className="feature">
          <h3>Real-Time Progress Tracking</h3>
          <p>Monitor your progress with detailed statistics and insights.</p>
        </div>
        <div className="feature">
          <h3>Rich Resource Library</h3>
          <p>Access a diverse range of educational materials including PDFs, videos, and more.</p>
        </div>
      </div> */}
    </div>
  );
};

export default GetStarted;
