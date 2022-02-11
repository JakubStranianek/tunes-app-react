import React from 'react';

interface Props {
  formInput: string
  onInputChange: (data: string) => void
  onSearchFormSubmit: (data: string) => void
}

const TunesFormInput: React.FC<Props> = props => {
  const {formInput} = props

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        props.onInputChange(e.target.value)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearchFormSubmit(formInput);
      }

    return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput}/>
    </form>
  )
}

export default TunesFormInput;
