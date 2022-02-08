import React, {useState} from 'react';


function TunesFormInput() {
    const [formInput, setFormInput] = useState("")
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    
        setFormInput(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // const newArtist = {
        //   id: Math.max(...artist.map(s => s.id)) + 1, 
        //   author: formInput,
        //   song: formInput
        // }
    
        // setArtist([...artist, newArtist])
      }

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput}/>
    </form>
  )
}

export default TunesFormInput;
