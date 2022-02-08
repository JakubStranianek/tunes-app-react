import React, {useState} from 'react';


function TunesListOfArtist() {
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
  
    return (
    <ul>
    {artist.map(index => (
      <li key={index.id}>{JSON.stringify(index)}</li>
    ))}
  </ul>
  );
}

export default TunesListOfArtist;
