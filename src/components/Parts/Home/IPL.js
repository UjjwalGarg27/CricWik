import React, {useState} from "react";
import Teams from "./TeamAPI";
import TeamCard from "./TeamCard";
import "./home.css";

const IPL = () => {

    // eslint-disable-next-line
    const [teamData, setTeamData] = useState(Teams); 

    return (
        <div>
            <TeamCard teamData={teamData}/>
        </div>
    )
}

export default IPL;
