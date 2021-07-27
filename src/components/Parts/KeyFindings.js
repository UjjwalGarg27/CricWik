import React from 'react';
import Navbar from "./Navbar/Navbar";
import "./AboutUs.css";

const KeyFindings = () => {
    return (
        <>

        <Navbar />

        <div className="header">
        <div className="heading"> 
            <strong> KEY FINDINGS </strong>
        </div>
        
        <div className="para">
        <p> On the basis of the <strong> Data Visualization </strong> part, one can easily find few findings and on the basis of that, can predict the result also for the matches that will be played in future.
        </p>
        </div>

        <div> <img src="/images/datavisual.svg" alt="about" className="img" /> </div>

        <div className="para">
        <ul className="findings"> 
            <li> Data Analysis 1 ➡ Most number of matches are won on Eden Gardens Stadium, specially Kolkata Knight Riders whose home ground is Eden Garders have won most of the matches among other teams. <br /> Other stadiums on which teams are comfortable to play are Wankhede, M Chinnaswamy, Feroz Shah Kotla, Rajiv Gandhi, MA Chidambaram Stadiums. </li>
            <li> Data Analysis 2 ➡ As we all know the importance of toss in the IPL tournament, we can see and verify from the statistics also, that the team who elected to field first have a higher chance of winning the game.  </li> <br />
            <li> Data Analysis 3 ➡ Mumbai Indians had won highest number of matches followed by Chennai Super Kings, that's the reason these are the top two teams of the tournament. </li> <br />
            <li> Data Analysis 4 ➡ Suresh Raina scored highest number of runs followed by Virat Kohli throughout from the starting of IPL tournament. <br /> Suresh Raina has played maximum number of matches but this doesn't mean that one who play maximum matches would the highest run scorer. From the bar chart we can see that Virat Kohli have played more matches than Raina but he doesn't have maximun runs. </li> <br />
            <li> Data Analysis 5 ➡ The stacked bar chart shows the number of fours and sixes hit by each player. And we can also finds the number for an individual by searching the player name.  </li> <br />
            <li> Data Analysis 6 ➡ This graph shows different types of dismissals. There are 9 kinds of dismissals by which the player got dismissed. <br /> The most common dismissal is caught and then bowled. </li> <br />
            <li> Data Analysis 7 ➡ This packed bubble graph shows different types of bowling options, along with the average economy and the average runs given by each type of bowler. <br /> Among all Left-Arm Chinaman has highest economy and Right-Arm Offbreak has the lowest economy. </li> <br />
            <li> Data Analysis 8 ➡ Its shows the unwanted runs that each team gave in the entire edition of IPL tournament. Mumbai Indians and Deccan Charges are the two teams among all the teams who gave penalty runs. </li> <br />
            <li> Data Analysis 9 ➡ Chris Gayle, the Universe Boss has got maximum number of player of the match award and after then AB de Villiers. </li>
        </ul>
        </div>

        <div className="para links footer">
        <p>

        </p>
        </div>

        </div>
        </>
    )
}

export default KeyFindings;
