import React, {useRef} from 'react';
import "../components/TunesFormInput.scss"


interface Props {}

const TunesFormInput: React.FC<Props> = props => {
  const searchIpnut = useRef<HTMLInputElement>(null)

    const handleInput =(e: React.ChangeEvent<HTMLInputElement>) => {
        searchForMusic();
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchForMusic();
  }

    const searchForMusic = () => {
        console.log(searchIpnut.current?.value)
    }

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" autoFocus id='color' onChange={handleInput} ref={searchIpnut}/>
    </form>
  )
}

export default TunesFormInput;
