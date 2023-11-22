import { useState, useEffect  } from 'react'
import Display from './Display'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/display" element={<Display />} />
            {/* Add other routes here */}
        </Routes>
    )
}

export default App
