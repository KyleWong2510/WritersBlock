import React from 'react'
import PropTypes from 'prop-types'
import './PromptContainer.css'

import PromptCard from '../PromptCard/PromptCard'

const PromptContainer = ({ prompts }) => {
  const allPrompts = prompts.map(prompt => {
    return <PromptCard prompt={prompt} key={prompt.id} />
  })
  
  return (
    <main className='prompt-container'>
      <h2 className='prompt-container-title'>Prompts</h2>
      <section data-testid='prompts' className='prompts'>
        {allPrompts}
      </section>
    </main>
  )
}

export default PromptContainer

PromptContainer.propTypes = {
  prompts: PropTypes.array
}
