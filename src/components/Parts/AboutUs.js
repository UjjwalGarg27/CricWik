import React from 'react';
import Navbar from "./Navbar/Navbar";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <>

        <Navbar />
        <div className="container">
        <div className="header">
        <div className="heading"> 
            <strong> CrickWik Website </strong>
        </div>
        <div className="para">
        <p> This website is for the cricket lovers. The unique thing that differentiates it from any other cricket website is that, it includes <strong> Data Visualization </strong> of the Indian Premier League Tournament. The purpose of doing Data Visualization is that, as different types of charts are used, it helps people to discuss among themselves on various parameters as well as using these visualized data, one can create and play quizzes among their friends. 
        </p>
        </div>

        <div> <img src="/images/about.svg" alt="about" className="img" /> </div>

        <div className="para">
        <p> 
        The Indian Premier League (IPL) is a professional Twenty20 cricket league in India which was started in the year of 2008. Eight teams representing eight different cities in India contest in this tournament. The group stage matches are played in double round-robin league and top 4 teams advance to the playoffs based on the points. There have been thirteen seasons of the IPL tournament and the venue for the 2021 season now has been moved to the UAE due to the ongoing COVID-19 pandemic.
        </p>
        </div>

        <div className="para links">
        <p>
            Datasets that are used for doing the Data Visualization part are as follows :- <br /> <br />
            <a href="https://drive.google.com/file/d/17NXU7kLBiL_JZfT3bxmuXtYwXO0XnxbZ/view?usp=sharing" target =  "_blank" rel="noreferrer"> deliveries.csv </a> <br />
            <a href="https://drive.google.com/file/d/15syEHNxcnmYEfF-RP2FTIpJGrMpW08Qz/view?usp=sharing" target =  "_blank" rel="noreferrer"> matches.csv </a>
            <br />
            <a href="https://drive.google.com/file/d/1VihIQijNPRqnIICOPy7222T7PxzhUmrN/view?usp=sharing" target =  "_blank" rel="noreferrer"> ipl_player_dataset.csv </a>
        </p>
        </div>

        <div className="para footer">
        </div>

        </div>
        </div>
        </>
    )
}

export default AboutUs;
