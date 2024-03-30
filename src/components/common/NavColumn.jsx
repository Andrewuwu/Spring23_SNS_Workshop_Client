import React, { useState } from "react";
import "./Navbar.css"
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/register");
  }

  return(
        <div className="sidebar">
            {/* <a href="#" className="logo"><i>(NT)</i><span className="icon-text">NOT TWITTER</span></a>
            <a href="#"><i >(H)</i><span className="icon-text">Home</span></a>
            <a href="#"><i >(P)</i><span className="icon-text">Profile</span></a>
            <a href="#"><i >(F)</i><span className="icon-text">Feed</span></a>
            <a href="#"><i >(T)</i><span className="icon-text">Twitter</span></a> */}
            <Button onClick={handleClick}>LOG OUT</Button>
        </div>
    
  );
};

export default Navbar;
