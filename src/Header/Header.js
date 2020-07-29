import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1>Writer's Block</h1>
      <p>Character and prompt generator</p>
      <button>Generate Prompt</button>
    </header>
  )
}

export default Header