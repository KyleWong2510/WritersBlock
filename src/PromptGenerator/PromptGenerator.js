import React from 'react'
import './PromptGenerator.css'
import { getRandomCharacter, getRandomWords, getRandomPrompt } from '../apiCalls'

class PromptGenerator extends React.Component {
  constructor() {
    super()
    this.state={
      prompt: '',
      characterName: {},
      characterAge: {},
      location: {},
      nationality: {},
      words: []
    }
  }

  generateCharacter = () => {
    getRandomCharacter()
      .then(data => {
        const character = data.results[0]
        this.setState({ characterName: character.name })
        this.setState({ characterAge: character.age})
        this.setState({ location: character.location })
        this.setState({ nationality: character.nat})
      })
      .catch(err => console.error(err))
  }

  generateWords = () => {
    getRandomWords()
      .then(data => this.setState({ words: data }))
      .catch(err => console.error(err))
  }

  generatePrompt = () => {
    getRandomPrompt()
      .then(data => this.setState({ prompt: data.english }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <main className='prompt-generator'>
        <section className='generator-btn-container'>
          <h2>Generate a new prompt</h2>
          <button 
            className='generator-btns generate-btn'
            onClick={this.generatePrompt}
          >
            Generate Prompt
          </button>
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