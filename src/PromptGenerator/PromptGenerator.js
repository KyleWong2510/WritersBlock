import React from 'react'
import './PromptGenerator.css'

class PromptGenerator extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }

  render() {
    return (
      <main className='prompt-generator'>
        <section className='generator-btn-container'>
          <h2>Generate a new prompt</h2>
          <button className='generator-btns generate-btn'>Generate Prompt</button>
          <section className='generator-confirm-btns'>
            <button className='generator-btns'>Generate New Prompt</button>
            <button className='generator-btns'>Use This Prompt</button>
          </section>
        </section>
      </main>
    )
  }
}

export default PromptGenerator