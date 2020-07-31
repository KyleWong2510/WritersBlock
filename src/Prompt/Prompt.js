import React from 'react'
import './Prompt.css'

const Prompt = () => {
  return (
    <main className='prompt'>
      <h2 data-testid='prompt'>PROMPT</h2>
      <button className='write-prompt-btn'>Write this prompt</button>
      <section data-testid='related-stories' className='story-container'>
        STORIESSTORIESSTORIES
      </section>
    </main>
  )
}

export default Prompt