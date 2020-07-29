import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <section className='header-text'>
        <h1 className='header-title'>Writer's Block</h1>
        <p className='header-desc'>Character and prompt generator</p>
      </section>
      <button className='header-btn'>Generate Prompt</button>
    </header>
  )
}

export default Header