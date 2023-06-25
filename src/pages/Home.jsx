import { ConnectWallet } from "@thirdweb-dev/react";
import "../styles/Home.css";
import React, { useState, useEffect } from 'react';
import Newsfeed from "../components/newsfeed.jsx";
//import Sidebar from "./SideBar";
export default function Home() {
  return (
    <div className="hcontainer">
    
        {/* <div className="sidebar">
        <Sidebar/>
        </div> */}
       
      <div className="Newsfeed">
        <Newsfeed />
        </div>
        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
        </div>

        
     
    </div>
  );
}
