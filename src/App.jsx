import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>
       <Routes/>
    </Router>
  )
}

export default App
