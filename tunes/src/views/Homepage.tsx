import React from 'react';
import "./Home.scss"
import logo from "../assets/logo.svg"

const Home = () => (
  <div className='overflow'>
    <h2>Homepage</h2>
    <p>
     Welcome on React homepage!
      </p>

      <img src={logo} alt="logoReact" />
  </div>
);

export default Home;