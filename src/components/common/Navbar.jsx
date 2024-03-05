import React, { useState } from "react";
import "./Navbar.css"

function Navbar() {
  return(
    <>
        <div class="sidebar">
            <a href="#"><i >info</i><span class="icon-text">about</span></a>
            <a href="#"><i >spa</i><span class="icon-text"></span>services</a>
            <a href="#"><i >monetization_on</i><span class="icon-text"></span>clients</a>
            <a href="#"><i >email</i><span class="icon-text"></span>contact</a>
        </div>

            
    </>
    
  );
};

export default Navbar;
