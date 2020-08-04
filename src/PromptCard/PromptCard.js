import React from 'react'
import PropTypes from 'prop-types'
import './PromptCard.css'
import { Link } from 'react-router-dom'

const PromptCard = ({ prompt, numStories }) => (
  <Link to={`/prompt/${prompt.id}`} className="prompt-card-link">
    <section className="prompt-card" id={prompt.id}>
      <p data-testid="prompt-desc" className="prompt-desc">{prompt.prompt}</p>
      <section data-testid="prompt-stats" className="prompt-stats">
        {numStories !== 1
          ? (
            <p>
              {numStories}
              {' '}
              Stories
            </p>
          )
          : (
            <p>
              {numStories}
              {' '}
              Story
            </p>
          )}
        {prompt.characterName && <p>Character</p>}
        {prompt.location && <p>Location</p>}
      </section>
    </section>
  </Link>
)

export default PromptCard

PromptCard.propTypes = {
  prompt: PropTypes.object,
  numStories: PropTypes.number
}
