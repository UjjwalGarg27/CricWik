import React, {useState} from 'react';
import "./style.css";
import { getMatchScore } from '../Home/API';

const MatchCards = ({match}) => {

    const [details, setDetails] = useState({});
    const [open, setOpen] = useState(false);

    const handleBtn = (id) => {

        if(match.matchStarted) {
            setOpen(true);
        } else {
            alert("Match Not Started Yet");
        }

        getMatchScore(id)
        .then((data) => {
            console.log(data);
            setDetails(data);
        })
        .catch((error) => console.log("error2", error));
    };

    const handleCloseBtn = () => {
        setOpen(false);
    };

    return (
        <>
    <section className="container">
        <div className="card">
            <div className="card-div2"><h1>Live Scores</h1></div>
                <div className="card-div1">    
                    <h2 className="card-text"> {match.type === "" ? "N/A" : match.type} </h2>
                    <h2> {match.matchStarted === true ? "Match Started" : "Match Not Started Yet"} </h2>
                </div>
                <div className="card-div2">
                    <h3> {new Date(match.dateTimeGMT).toLocaleString()} </h3>
                </div>
                <div className="card-div3">
                    <h1 className="card-div3-text"> {match["team-1"]} </h1> 
                    <h2> vs </h2> 
                    <h1 className="card-div3-text"> {match["team-1"]} </h1>
                </div>
                <div className="card-div4">
                <div>
                    <button onClick={() => {handleBtn(match.unique_id)}}> <h1 className="card-btn"> See Score </h1> </button>
                </div>
                </div>

            {open && ( 
                <div className="card-div3">
                <h4> Toss won by: {" "} </h4>
                <div><h4>{match.toss_winner_team}</h4></div>
                </div>
            )}

            {open && (
                <div className="card-div2 describe"> 
                   <div> <h4> {details.description} </h4> </div>
                   <div className="card-div4">
                   <button onClick={() => {handleCloseBtn()}}> <h1 className="card-btn"> Close </h1> </button>
                    </div>
                </div>
            )}
    </div>  
    </section>

        </>
    )
}

export default MatchCards;