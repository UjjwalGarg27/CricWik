import React from 'react';
import {Link} from 'react-router-dom';
import "./nav-style.css";

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <Link to="/Home" className="btn-group-items"> Home </Link>
                    <Link to="/Tableau" className="btn-group-items"> Data Visualization </Link>
                    <Link to="/KeyFindings" className="btn-group-items"> Key Findings </Link>
                    <Link to="/AboutUs" className="btn-group-items"> About Us </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
