import { useState, useEffect  } from 'react'
import Display from './Display'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
            <h1>Welcome to My React App</h1>
            <Routes> 
                <Route path="/display" component={Display} />
                {/* Add other routes here */}
            </Routes>
            </div>
        </Router>
    )
}

export default App
