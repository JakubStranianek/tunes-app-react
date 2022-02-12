import React, { useState } from 'react';
import TunesFormInput from '../components/TunesFormInput';
import TunesListOfArtist from '../components/TunesListOfArtist';


const Tunes = () => {
  const [songs] = useState([])


  return (
    <div>
      <h2>Tunes</h2>
      <TunesFormInput />
      <TunesListOfArtist songs={songs}/>
    </div>
  )  

}
  

export default Tunes;