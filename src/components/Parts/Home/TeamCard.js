import React from 'react';
import './home.css'

const TeamCard = ({teamData}) => {
    return (
        <>

    <section className="main-card--container">
    {   teamData.map((curElem) => {
        const {id, image, name, venue, winner} = curElem;

    return (
        <>
        <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    <div className="card-number card-circle">
                    <span> {id} </span>
                    </div>

                    <div>
                    <img src={image} alt="images" className="card-media" />
                    </div>

                    <div className="card-text-title">
                    <h1> {name} </h1>
                    </div>

                    <div className="card-text-venue">
                    <h3> {venue} </h3>
                    </div>

                    <div className="card-text-winner">
                    <h2> {winner} </h2> 
                    </div>

                </div>
            </div>  
        </div>
        </>
    )
}
    )}
     </section>
</>
    )
}

export default TeamCard;