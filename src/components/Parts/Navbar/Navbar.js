import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group-items"> <h1>Home</h1> </button>
                    <button className="btn-group-items"> <h1>Data Visualization</h1> </button>
                    <button className="btn-group-items"> <h1>Key Findings</h1> </button>
                    <button className="btn-group-items"> <h1>About</h1> </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
