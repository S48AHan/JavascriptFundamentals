import React, {  } from 'react'
interface props{
    name:string;
    onNameChange:(value:string)=>void;
}
const InputBox = ({ name, onNameChange }:props) => {


  return (
    <input
    className='border-black border-2'
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
}

export default InputBox
