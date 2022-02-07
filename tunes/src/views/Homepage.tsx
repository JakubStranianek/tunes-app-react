import React, {useState} from 'react';

import "./Home.scss"
import logo from "../assets/logo.svg"


const Home: React.FC = () => {
  const [title] = useState("ReactWheee!!")
  
  return (
  <div className='overflow'>
    <h2>{title}</h2>
    <p>
     Welcome on React homepage!
      </p>

      <img src={logo} alt="logoReact" />
  </div>
  )
}

export default Home;