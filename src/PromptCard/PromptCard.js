import React from 'react'
import './PromptCard.css'

const PromptCard = ({ prompt }) => {
  return (
    <section className='prompt-card'>
      <h3 className='prompt-desc'>{prompt.prompt}</h3>
      <section className='prompt-stats'>
        <p>X Stories</p>
        <p>X likes</p>
      </section>
    </section>
  )
}

export default PromptCard