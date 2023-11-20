import { useState, useEffect } from 'react'

function App() {

    useEffect(()=> {
            fetch(import.meta.env.VITE_API_URL)
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
            });
    }, [])
// can now fetch to the backend at the above url
// const response = await fetch(`${import.meta.eve.VITE_API_URL}posts`);




  return (
    <>
        <h1>Hello</h1>
    </>
  )
}

export default App
