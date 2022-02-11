import React, { useState } from 'react';
import TunesFormInput from '../components/TunesFormInput';
import TunesListOfArtist from '../components/TunesListOfArtist';


const Tunes = () => {
  const [formInput, setFormInput] = useState("")

  const [songs, setSongs] = useState([
    {
      id: 1,
      author: "Jozo Raz",
      song: "Laska moja"
    }, 

    {
      id: 2,
      author: "Peter Nagy",
      song: "Laska je tu snami"
    },

    {
      id: 3,
      author: "Rytmus",
      song: "AKM"
    },

    {
      id: 4,
      author: "Separ (Miško)",
      song: "OG"
    },
  ])


  const handleSearchFormSubmit = (data: string) => {
    const newArtist = {
      id: Math.max(...songs.map(s => s.id)) + 1, 
      author: data,
      song: data
    }

    setSongs([...songs, newArtist])
  }


  const handleInputChange = (data: string) => {
    setFormInput(data);
  }

  return (
    <div>
      <h2>Tunes</h2>
      <TunesFormInput onSearchFormSubmit={handleSearchFormSubmit}
      formInput={formInput}
      onInputChange={handleInputChange}/>
      <TunesListOfArtist songs={songs}/>
    </div>
  )  

}
  

export default Tunes;