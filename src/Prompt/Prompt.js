import React from 'react'
import './Prompt.css'

class Prompt extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isWriting: false
    }
  }
  
  renderPrompt = () => {
    return this.props.prompt.prompt && 
        <section>
          <h2 data-testid='prompt'>Prompt</h2>
          <p>{this.props.prompt.prompt}</p>
        </section> 
  }

  renderCharacter = () => {
    return this.props.prompt.characterName && 
      <section>
        <h3>Character</h3>
        <p>{this.props.prompt.characterName}</p>
        <p>{this.props.prompt.characterAge}</p>
        <p>{this.props.prompt.nationality}</p>
      </section>
  }

  renderLocation = () => {
    return this.props.prompt.location && 
      <section>
        <h3>Location</h3>
        <p>City: {this.props.prompt.location.city}</p>
        <p>Country: {this.props.prompt.location.country}</p>
      </section>
  }

  completeStory = () => {
    this.props.saveStory()
    this.toggleIsWriting()
  }

  renderButtons = () => {
    return this.state.isWriting ? 
      <button onClick={this.completeStory}>Save this story</button> :
      <button 
        className='write-prompt-btn' 
        onClick={this.toggleIsWriting}
      >
        Write this prompt
      </button>
  }

  toggleIsWriting = () => {
    this.setState({ isWriting: !this.state.isWriting})
  }

  renderTextArea = () => {
    return this.state.isWriting && 
      <textarea 
        className='text-area'
        placeholder='Start your story here...'
        rows= '5'
        cols='30'
      />
  }

  render() {
    return (
      <main className='prompt'>
        {this.renderPrompt()}
        {this.renderCharacter()}
        {this.renderLocation()}
        {this.renderTextArea()}
        {this.renderButtons()}
        <section data-testid='related-stories' className='story-container'>
          STORIESSTORIESSTORIES
        </section>
      </main>
    )
  }
}


export default Prompt