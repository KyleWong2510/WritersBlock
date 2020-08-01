import React from 'react'
import './Prompt.css'

const Prompt = ({ prompt }) => {
  return (
    <main className='prompt'>
      {prompt.prompt && 
        <section>
          <h2 data-testid='prompt'>Prompt</h2>
          <p>{prompt.prompt}</p>
        </section>
      }
      {prompt.characterName && 
        <section>
          <h3>Character</h3>
          <p>{prompt.characterName}</p>
          <p>{prompt.characterAge}</p>
          <p>{prompt.nationality}</p>
        </section>
      }
      {prompt.location && 
        <section>
          <h3>Location</h3>
          <p>City: {prompt.location.city}</p>
          <p>Country: {prompt.location.country}</p>
        </section>
      }
      <button className='write-prompt-btn'>Write this prompt</button>
      <section data-testid='related-stories' className='story-container'>
        STORIESSTORIESSTORIES
      </section>
    </main>
  )
}

export default Prompt