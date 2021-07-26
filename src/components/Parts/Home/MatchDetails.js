import React, {useState, useEffect} from 'react';
import MatchCards from '../MatchCards/MatchCards';
import { getMatchInfo } from './API';

const MatchDetails = () => {

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatchInfo()
        .then((data) => {
            setMatches(data.matches)
            console.log(data.matches);
        })
        .catch((error) => alert("error"));
}, []);

    return (
        <>
            {
                matches.map((match) => (
                    <MatchCards key={match.unique_id} match={match} />
                ))
            }
        </>
    )
}

export default MatchDetails;
