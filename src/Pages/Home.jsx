import React from "react";
import "./Home.css";
import logo from "../Images/bmw_logo_PNG19714.png";


const Home = () => {
    return (
        <div className="Home">
            <img src={logo} alt="BMW Logo" />
            <h1>This is Srihari.</h1>
            <h3>I am Web developer.</h3>
            <h5>Currently studying in Itech instiute of technology.</h5>
            <h5>I am working in React.js and Vanilla js</h5>
        </div>
    );
};
export default Home;    