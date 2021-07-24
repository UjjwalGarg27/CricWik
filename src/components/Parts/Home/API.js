import React, {useState, useEffect} from 'react';

const myAPIKey = "cBVcqExbJcgAdGVc3VambjYFNA13";

const Temp = () => {

    const [match, setMatch] = useState([]);

    const getMatchInfo = async () => {
        try {
            const url = `https://cricapi.com/api/matches/${myAPIKey}`;
            
            const res = await fetch(url);
            const data = await res.json();


            setMatch = data.matches;
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
            getMatchInfo();
    }, );


    return (
        <>
            <h1> CricWik </h1>
        </>
    )
}


export default Temp;


// const getMatchScore = async (id) => {
//     try {
//         const url = `https://cricapi.com/api/matches?apikey=${myAPIKey}&unique_id=${id}`;
        
//         const res = await fetch(url);
//         const data = await res.json();
        
//     } catch (error) {
//         console.log(error);
//     }

// }
// export default getMatchScore;
