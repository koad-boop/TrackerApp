import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {  Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import { Darklightmode } from "./Darklightmode";
import { getStreakFromStorage } from "../utils/streakUtils";
import "../App.css";
import "../css/navbar.css";

export const Navbaar = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const { streak } = getStreakFromStorage();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow-lg">
      <div className="container font">
        <Link className="navbar-brand  " to="/">TrackerApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            
            

            

            {isLoggedIn ? (
              <>
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                <span className=" nav-link streak">🔥 Streak: {streak} day{streak !== 1 && "s"}</span>
                <div className="profile-wrapper">
                  <img src={user.photo} alt="profile" className="profile-pic" />
                </div>
                <button onClick={logout} className="logout-btn">Logout</button>
              </>
            ) : (
              <>
              <ScrollLink to="home" smooth={true} duration={500} className="nav-link">Home</ScrollLink>
            <ScrollLink to="Features" smooth={true} duration={500} offset={-100} className="nav-link">Features</ScrollLink>
            <ScrollLink to="Guidence" smooth={true} duration={500} offset={-100} className="nav-link">Guidence</ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={500}  offset={-100} className="nav-link">Contact Us</ScrollLink>
              <div className="auth-buttons ">
                <Link to="/signupForm"><button className="nav-btn">Sign Up</button></Link>
                <Link to="/logInForm"><button className="nav-btn">Log In</button></Link>
              </div>
              </>
            )}
          </div>
                 <div className="nav-link">
                      <Darklightmode />
                  </div>
        </div>
      </div>
    </nav>
  );
};
