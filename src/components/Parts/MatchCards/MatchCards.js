import React from 'react';
import "./style.css";

const MatchCards = () => {
    return (
        <>
    <section className="container">
        <div className="card">
                <div className="card-div1">    
                    <h2 className="card-text"> Tests </h2>
                    <h2> Match Started </h2>
                </div>
                <div className="card-div2">
                    <h3> 25/7/2021, 7:30:00 PM </h3>
                </div>
                <div className="card-div3">
                    <h1 className="card-div3-text">India</h1> <h2>vs</h2> <h1 className="card-div3-text">England</h1>
                </div>
                <div className="card-div4">
                    <button> <h1 className="card-btn">See Score</h1> </button>
                </div>
        </div>  
    </section>
        </>
    )
}

export default MatchCards;