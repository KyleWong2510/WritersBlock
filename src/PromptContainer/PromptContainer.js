import React from 'react'
import './PromptContainer.css'

import PromptCard from '../PromptCard/PromptCard'

const PromptContainer = () => {
  return (
    <main className='prompt-container'>
    <h2 className='prompt-container-title'>Prompts</h2>
    <section className='prompts'>
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      </section>
    </main>
  )
}

export default PromptContainer