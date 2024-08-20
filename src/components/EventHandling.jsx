import React from 'react'

const EventHandling = () => {

// Using Eventhandling methods in reactJs

const HandleButtonClick = () => {
    console.log("hello world");
}
const buttonClicked = () => {
    console.log("hello world console");
    
}

  return (
    <>
     <button onClick={buttonClicked} className='border-none text-gray-500 bg-red-400 p-2 font-bold text-2xl rounded-2xl my-4'>Click Me</button> <br />
     <button onMouseEnter={HandleButtonClick} className='border-none text-gray-500 bg-red-400 p-2 font-bold text-2xl rounded-2xl'>Hover Me</button>
    </>
  );
}

export default EventHandling
