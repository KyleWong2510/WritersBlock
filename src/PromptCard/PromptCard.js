import React from 'react'
import './PromptCard.css'
import { Link } from 'react-router-dom'

const PromptCard = ({ prompt }) => {
  return (
    <Link to={`/prompt/${prompt.id}`}>
      <section className='prompt-card' id={prompt.id}>
        <h3 data-testid='prompt-desc' className='prompt-desc'>{prompt.prompt}</h3>
        <section data-testid='prompt-stats' className='prompt-stats'>
          <p>X Stories</p>
          <p>X likes</p>
        </section>
      </section>
    </Link>
  )
}

export default PromptCard