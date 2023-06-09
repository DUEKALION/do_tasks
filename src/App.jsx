import { useState } from 'react'
import Header from "./components/Header/Header"
import Board from "./pages/Board/Board.jsx"
import './app.css'

function App() {

  return (
    <div className='App'>
      <Header />
      <Board />
    </div>
  )
}

export default App
