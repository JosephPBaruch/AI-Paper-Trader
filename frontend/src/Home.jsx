import { useState, useEffect } from 'react'
//import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home() {
    //const history = useHistory();
    const navigate = useNavigate();

    const [ invest, setInvest ] = useState({
        value: "What do you want to invest in?"
    })
    //const [ button, setButton ] = useState(false)

    const handleClick = () => {
       navigate('/display');
    };

    return (
        <>
            <h1>Home</h1>
            <div style={{height: "30px"}}>
                <input style={{height: "100%", width: "300px"}} value ={invest.value} onChange={setInvest} ></input> 
               
               <button onClick={handleClick}>Go</button> 
            </div>
            <footer><p>By Joseph Baruch</p></footer>
        </>
  )
}



export default Home
