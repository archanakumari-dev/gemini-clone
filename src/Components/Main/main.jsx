import React from "react";
import { assets } from "../../assets/assets";
import './main.css';
function Main(){
    return(
    <div className="main" >
    <div className="nav" >
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="middlecontent">
        <div className="greeting">
            <p><span>Hello there!</span></p>
            <p>How can I assist you today?</p>
        </div>
    
    <div className="cards">
        <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
            <p>Briefly summarize this concept:urban planning</p>
            <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
            <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
        </div>
        
    </div>
    <div className="mainbottom">
        <div className="searchbox">
                <input type="text" placeholder="Ask Gemini" />
            
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />

            </div>
        </div>
        <p>Gemini can make mistakes, so double-check it</p>
    </div>
    
    </div>
    </div>
    )
}
export default Main;