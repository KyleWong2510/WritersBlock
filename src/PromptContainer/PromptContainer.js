import React from 'react'
import PropTypes from 'prop-types'
import './PromptContainer.css'

import PromptCard from '../PromptCard/PromptCard'

const PromptContainer = ({ prompts, stories }) => {
  const allPrompts = prompts.map((prompt) => {
    const relatedStories = stories.filter((story) => story.promptId === prompt.id)
    return (
      <PromptCard
        key={prompt.id}
        prompt={prompt}
        numStories={relatedStories.length}
      />
    )
  })

  return (
    <main className="prompt-container">
      <h2 className="prompt-container-title">Prompts</h2>
      <section data-testid="prompts" className="prompts">
        {allPrompts}
      </section>
    </main>
  )
}

export default PromptContainer

PromptContainer.propTypes = {
  prompts: PropTypes.array,
  stories: PropTypes.array
}
