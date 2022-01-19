import React from "react";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import './Main.scss';
import Contacts from "./Components/Contacts/Contacts";

const PortfolioMainApp = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path='/Contacts'>
            <Contacts/>
        </Route>
      </BrowserRouter>
    </>
      
    
    
  );
};

export default PortfolioMainApp;
