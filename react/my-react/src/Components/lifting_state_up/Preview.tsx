import React from 'react'
interface props{
    name:string;
}
const Preview = ({name}:props) => {
return <p>Preview: {name}</p>;
}

export default Preview
