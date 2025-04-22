import './Sidebar.css'
import React, { useState } from 'react';
import {assets }from '../../assets/assets'
function Sidebar(){
    const[extended,setExtended]=useState(true);
    return (
        <div className="sidebar">
            <div className="top">
            <img className="menu" src={assets.menu_icon }alt="Menu-Icon" onClick={()=>setExtended(prev=>!prev)}/>
            <div className="newchat">
            <img src={assets.plus_icon} alt="Plus-Icon" />
           { extended?<p>New Chat</p>:null}
            </div>
           {extended? <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react hlo oakjs...</p>
                </div>
            </div> :null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                   {extended? <p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}
export default Sidebar;