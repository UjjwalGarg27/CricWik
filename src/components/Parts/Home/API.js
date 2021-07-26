
const API_KEY = process.env.REACT_APP_API_KEY;
// const ID = process.env.REACT_APP_ID;

export const getMatchInfo = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;    

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const getMatchScore = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};


