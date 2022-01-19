import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";
// import chetan from '../../Images'
import pdf  from'../../Images/chetanphani.pdf';
import Contacts from "../Contacts/Contacts";

const Navbar = () => {
  return (
    <>
      <div className="NavMain">
      
        <NavLink  className='NavLink'  to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink  className='NavLink' to="/About">
          <h2>About Me</h2>
        </NavLink>
        <NavLink className='NavLink'  to="/Contacts">
          <h2>Contact me</h2>
         
        
        </NavLink> 
        <a  className="resume" href={pdf}  download='chetan phani'>Download Resume</a>
      
      </div>
    </>
  );
};

export default Navbar;
