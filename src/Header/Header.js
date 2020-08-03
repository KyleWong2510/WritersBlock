import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <section className='header-text'>
        <Link to='/' className='home-link'>
          <h1 className='header-title'>Writer's Block</h1>
        </Link>
        <p className='header-desc'>Writing prompt generator</p>
      </section>
      <Link to='/prompt-generator' className='gen-prompt-link'><button className='header-btn'>Generate Prompt</button></Link>
    </header>
  )
}

export default Header