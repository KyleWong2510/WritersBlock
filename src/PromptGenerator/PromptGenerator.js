import React from 'react'
import { Link } from 'react-router-dom'
import './PromptGenerator.css'
import { getRandomCharacter, getRandomWords, getRandomPrompt } from '../apiCalls'

class PromptGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      id: Date.now(),
      prompt: '',
      characterName: {},
      characterAge: {},
      location: {},
      nationality: '',
      words: []
    }
  }

  generateCharacter = () => {
    getRandomCharacter()
      .then(data => {
        const character = data.results[0]
        this.setState({ characterName: character.name })
        this.setState({ characterAge: character.dob})
        this.setState({ nationality: character.nat})
      })
      .catch(err => console.error(err))
    }
    
    generateLocation = () => {
      getRandomCharacter()
      .then(data => this.setState({ location: data.results[0].location }))
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

  renderPrompt = () => {
    if (this.state.prompt) {
      return (
        <section>
          <h3>Prompt</h3>
          <p>{this.state.prompt}</p>
        </section>
      )
    } else {
      return (
        <button 
          className='generator-btns generate-btn'
          onClick={this.generatePrompt}
        >
          Generate Prompt
        </button>
      )
    }
  }

  renderCharacterBtn = () => {
      return (
        <button 
          className='generator-btns' 
          onClick={this.generateCharacter}
        >
          {!this.state.characterName.first ? 
            <p>Add a Character</p> :
            <p>Get a New Character</p>
          }
        </button>
      )
  }

  renderLocationBtn = () => {
    return (
      <button 
        className='generator-btns'
        onClick={this.generateLocation}
      >
        {!this.state.location.city ?
          <p>Add a Location</p> :
          <p>Get a New Location</p>
        }
      </button>
    )
  }

  renderBtns = () => {
    if (this.state.prompt) {
      return (
        <>
          <button 
            className='generator-btns'
            onClick={this.generatePrompt}
          >
          Generate New Prompt
          </button>
          {this.renderCharacterBtn()}
          {this.renderLocationBtn()}
          <Link to={`/prompt/${this.state.id}`}>
            <button 
              className='generator-btns'
              onClick={() => this.props.savePrompt(this.state)}
            >
              Use This Prompt
            </button>
          </Link>
        </>
      )
    }
  }

  renderCharacter = () => {
    const character = this.state.characterName
    if (this.state.characterName.first && this.state.nationality && this.state.characterAge.date) {
      const date = this.state.characterAge.date.split('T')[0]
      return (
        <section className='character-details'>
          <h3>Character</h3>
          <p className='character-name'>Name: {character.title} {character.first} {character.last}</p>
          <p>DOB: {date}</p>
          <p className='character-nationality'>Nationality: {this.state.nationality}</p>
        </section>
      )
    }
  }

  renderLocation = () => {
    const location = this.state.location
    if (location.city) {
      return (
        <section>
          <h3>Location</h3>
          <p>City: {location.city}</p>
          <p>Country: {location.country}</p>
        </section>
      )
    }
  }

  render() {
    return (
      <main className='prompt-generator'>
        <section className='generator-btn-container'>
          <h2>Generate a new prompt</h2>
          {this.renderPrompt()}
          {this.renderCharacter()}
          {this.renderLocation()}
          <section className='generator-confirm-btns'>
            {this.renderBtns()}
          </section>
        </section>
      </main>
    )
  }
}

export default PromptGenerator