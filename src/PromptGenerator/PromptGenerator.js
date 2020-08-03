import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PromptGenerator.css'
import { getRandomCharacter, getRandomPrompt } from '../apiCalls'

class PromptGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      id: Date.now(),
      prompt: '',
      characterName: '',
      characterAge: '',
      location: '',
      nationality: '',
    }
  }

  generateCharacter = () => {
    getRandomCharacter()
      .then(data => {
        const character = data.results[0]
        this.setState({ characterName: `${character.name.title} ${character.name.first} ${character.name.last}` })
        this.setState({ characterAge: character.dob.date.split('T')[0]})
        this.setState({ nationality: character.nat})
      })
      .catch(err => console.error(err))
    }
    
    generateLocation = () => {
      getRandomCharacter()
      .then(data => {
        const location = data.results[0].location
        this.setState({ 
          location: location 
        })
      })
      .catch(err => console.error(err))
  }

  // generateWords = () => {
  //   getRandomWords()
  //     .then(data => this.setState({ words: data }))
  //     .catch(err => console.error(err))
  // }

  generatePrompt = () => {
    getRandomPrompt()
      .then(data => this.setState({ prompt: data.english }))
      .catch(err => console.error(err))
  }

  renderPrompt = () => {
    if (this.state.prompt) {
      return (
        <section className='prompt-details'>
          <h3 data-testid='prompt-text' className='generator-title'>Prompt</h3>
          <p>{this.state.prompt}</p>
        </section>
      )
    } else {
      return (
        <button 
          data-testid='generate-btn'
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
    if (this.state.characterName && this.state.nationality && this.state.characterAge) {
      return (
        <section className='character-details'>
          <h3 className='generator-title'>Character</h3>
          <p className='character-name'>Name: {this.state.characterName}</p>
          <p>DOB: {this.state.characterAge}</p>
          <p className='character-nationality'>Nationality: {this.state.nationality}</p>
        </section>
      )
    }
  }

  renderLocation = () => {
    const location = this.state.location
    if (location.city) {
      return (
        <section className='location-details'>
          <h3 className='generator-title'>Location</h3>
          <p>City: {location.city}</p>
          <p>Country: {location.country}</p>
        </section>
      )
    }
  }

  render() {
    return (
      <main className='prompt-generator'>
        <section className='generator-container'>
          <h2 className='generator-title'>Generate a new prompt</h2>
          {this.renderPrompt()}
          <section className='generator-extra-details'>
            {this.renderCharacter()}
            {this.renderLocation()}
          </section>
          <section className='generator-confirm-btns'>
            {this.renderBtns()}
          </section>
        </section>
      </main>
    )
  }
}

export default PromptGenerator

PromptGenerator.propTypes = {
  savePrompt: PropTypes.func
}