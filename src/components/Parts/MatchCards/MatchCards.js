import React, {useState} from 'react';
import { getMatchScore } from '../Home/API';
import "./style.css";
import {Dialog} from "@material-ui/core";

const MatchCards = ({match}) => {

    const [details, setDetails] = useState({});
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        getMatchScore(id)
        .then((data) => {
            console.log(data);
            setDetails(data);
            handleOpen();
        })
        .catch((error) => console.log(error));
    }

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
    <section className="container">
        <div className="card">
                <div className="card-div3">
                    <h1 className="card-div3-text"> {match["team-1"]} </h1> 
                    <h2> vs </h2> 
                    <h1 className="card-div3-text"> {match["team-2"]} </h1>
                </div>
                <div className="card-div4">
                    <button> <h1 className="card-btn1" onClick={() => {handleClick(match.unique_id)}}> Show Detail </h1> </button>
                    <button> <h1 className="card-btn2"> Start Time {new Date(match.dateTimeGMT).toLocaleString()} </h1> </button>
                </div>
        </div>  
    </section>
            <Dialog open={open} onClose={handleClose} style={{width: "1500px", height: "500px"}}>
                <div> {"Match Detail...."} </div>
                <div>{details.stat}</div>
                <div> 
                    <h1> Match </h1>
                    <span> {details.matchStarted ? "Started" : "Still not started"} </span>
                </div>
                <div> 
                    <h1> Score </h1>
                    <span> {details.score} </span>
                </div>
                <button onClick={handleClose}> Close </button>
            </Dialog>

        </>
    )
}

export default MatchCards;