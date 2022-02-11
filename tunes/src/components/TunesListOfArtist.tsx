import React from 'react';
import {Song} from "../types/index"

interface Props {
    songs: Song[]
}

const TunesListOfArtist: React.FC<Props> = props => {
  const {songs} = props
    
  return (
    <ul>
    {songs.map(index => (
      <li key={index.id}>{JSON.stringify(index)}</li>
    ))}
  </ul>
  );
}

export default TunesListOfArtist;
