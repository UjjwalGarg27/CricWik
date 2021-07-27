import React from 'react';
import {Link} from 'react-router-dom';
import "./nav-style.css";

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="btn">
                    <Link to="/Home" className="btn-items"> Home </Link>
                    <Link to="/Tableau" className="btn-items"> Data Visualization </Link>
                    <Link to="/KeyFindings" className="btn-items"> Key Findings </Link>
                    <Link to="/AboutUs" className="btn-items"> About Us </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
