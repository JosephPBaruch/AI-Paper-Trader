import { useState, useEffect } from 'react'

function Head(){
    return(
        <>
            <h1>Invest Now</h1>
            <p></p>
        </>
    )
}

function App() {


    // can now fetch to the backend at the above url
    // const response = await fetch(`${import.meta.eve.VITE_API_URL}posts`);


    // what do you want to invest in
        // tech 
        // hedge funds
    // dividends or not 
    // add more factors
    // gives suggestiongs based on factors


  return (
    <>
        <Head />
        <h1>Hola</h1>
        <label>What type</label>
        <input></input> 
        <button></button>
    </>
  )
}

export default App
