import React, { useState } from 'react';
import TunesFormInput from '../components/TunesFormInput';
import TunesListOfArtist from '../components/TunesListOfArtist';


const Tunes = () => {
  const [formInput, setFormInput] = useState("")

  const [artist, setArtist] = useState([
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


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setFormInput(e.target.value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newArtist = {
      id: Math.max(...artist.map(s => s.id)) + 1, 
      author: formInput,
      song: formInput
    }

    setArtist([...artist, newArtist])
  }

  return (
    <div>
      <h2>Tunes</h2>
      <TunesFormInput />
      <TunesListOfArtist />
    </div>
  )  

}
  

export default Tunes;