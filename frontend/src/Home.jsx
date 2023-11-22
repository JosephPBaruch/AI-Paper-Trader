import { useState, useEffect } from 'react'

function Home() {

    const [ invest, setInvest ] = useState({
        value: "What do you want to invest in?"
    })
    const [ button, setButton ] = useState(false)

    return (
        <>
            <h1>Home</h1>
            <div style={{height: "30px"}}>
                <input style={{height: "100%", width: "300px"}} value ={invest.value} onChange={setInvest} ></input> 
                <button style={{height: "100%"}} onClick={setButton}>Go</button>
            </div>
            <footer><p>By Joseph Baruch</p></footer>
        </>
  )
}



export default Home
