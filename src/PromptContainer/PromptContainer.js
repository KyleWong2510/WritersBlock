import React from 'react'
import './PromptContainer.css'

import PromptCard from '../PromptCard/PromptCard'

const PromptContainer = ({ prompts }) => {
  const allPrompts = prompts.map(prompt => {
    return <PromptCard prompt={prompt} />
  })
  
  return (
    <main className='prompt-container'>
      <h2 className='prompt-container-title'>Prompts</h2>
      <section className='prompts'>
        {allPrompts}
      </section>
    </main>
  )
}

export default PromptContainer