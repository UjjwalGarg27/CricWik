import React from 'react';
import "./style.css";

const MatchCards = () => {
    return (
        <>
    <section className="main-card--container">
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle"> 1 </span>
                    <span className="card-author subtle"> test </span>
                    <h2 className="card-title"> Aus </h2>
                    <span className="card-description subtle">
                    fergaefk.gnef.gnrf    
                    </span> 
                <div className="card-read">Read</div>
                </div>
            <span className="card-tag subtle">Live</span>
            </div>
        </div>
    </section>
        </>
    )
}

export default MatchCards;