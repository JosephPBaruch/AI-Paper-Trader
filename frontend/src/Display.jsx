import { useState, useEffect } from 'react'

function Display() {

    const [ invest, setInvest ] = useState({
        value: "What do you want to invest in?"
    })
    const [ button, setButton ] = useState(false)
    // can now fetch to the backend at the above url
    // const response = await fetch(`${import.meta.eve.VITE_API_URL}posts`);

    //function valueHandler

    // what do you want to invest in
        // tech 
        // hedge funds
    // dividends or not 
    // add more factors
    // gives suggestiongs based on factors





    return (
        <>
            <h1>Lets see</h1>
            <div style={{height: "30px"}}>
                <input style={{height: "100%", width: "300px"}} value ={invest.value} onChange={setInvest} ></input> 
                <button style={{height: "100%"}} onClick={setButton}>Go</button>
            </div>
            <footer><p>By Joseph Baruch</p></footer>
        </>
  )
}

export default Display
