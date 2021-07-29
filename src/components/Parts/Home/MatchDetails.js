import React, {useState, useEffect} from 'react';
import "./style.css";
import Videos from './VideosAPI';

const MatchDetails = () => {

    const [videoLink, setVideoLink] = useState("");

    const Next = () => {
        const randomVideo = Math.round(Math.random() * Videos.length);
        setVideoLink(Videos.find((curElem, index) => index === randomVideo));
    };

    useEffect(() => {
        Next();
    }, []);

    return (
        <>
        <div className="video">
        <button onClick={Next}> Next </button>
        <iframe src = {videoLink} title="IPL Highlights"> </iframe>
        </div>
        </>
    )
}

export default MatchDetails;

