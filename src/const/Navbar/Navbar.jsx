import React, { useState } from 'react';
import "./Navbar.css";
import { useAuth0, User } from "@auth0/auth0-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useAuth0();

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };
  
  return (
    <div className='navbar'>
      <nav>
        <img src="images/logo.png" alt="Logo" className='logo'/>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Careers</li>
          <li>Blogs</li>
          <li>Contact Us</li>
        </ul>
        <div className="profile-section" onClick={toggleDropdown}>
          <img src="images/profile.png" alt="Profile" className='profile'/>
          <h3>Ayush ↓ </h3>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
