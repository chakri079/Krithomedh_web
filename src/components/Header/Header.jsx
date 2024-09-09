import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Screenshot 2024-06-14 111952.png'; // Ensure the logo path is correct

const Header = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <p className="logo-text">Krithomedh</p>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <div className="menu-toggle" id="mobile-menu" onClick={toggleSidebar}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`} id="sidebar">
                <nav className="sidebar-links">
                    <Link to="/" onClick={toggleSidebar}>Home</Link>
                    <Link to="/about" onClick={toggleSidebar}>About</Link>
                    <Link to="/events" onClick={toggleSidebar}>Events</Link>
                    <Link to="/team" onClick={toggleSidebar}>Team</Link>
                    <Link to="/login" onClick={toggleSidebar}>Login</Link>
                </nav>
            </div>
        </>
    );
};

export default Header;