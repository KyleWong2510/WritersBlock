import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <section className='header-text'>
        <Link to='/'>
          <h1 className='header-title'>Writer's Block</h1>
        </Link>
        <p className='header-desc'>Character and prompt generator</p>
      </section>
      <Link to='/prompt-generator'><button className='header-btn'>Generate Prompt</button></Link>
    </header>
  )
}

export default Header