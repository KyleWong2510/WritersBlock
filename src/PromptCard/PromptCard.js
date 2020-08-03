import React from 'react'
import PropTypes from 'prop-types'
import './PromptCard.css'
import { Link } from 'react-router-dom'

const PromptCard = ({ prompt }) => {
  return (
    <Link to={`/prompt/${prompt.id}`} className='prompt-card-link'>
      <section className='prompt-card' id={prompt.id}>
        <p data-testid='prompt-desc' className='prompt-desc'>{prompt.prompt}</p>
        <section data-testid='prompt-stats' className='prompt-stats'>
          <p>X Stories</p>
          <p>X likes</p>
        </section>
      </section>
    </Link>
  )
}

export default PromptCard

PromptCard.propTypes = {
  prompt: PropTypes.object
}
