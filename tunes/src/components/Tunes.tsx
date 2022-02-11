import React, {useState} from 'react';

type Props = {};

const Tunes = (props: Props) => {
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

  return <div></div>;
};

export default Tunes;
