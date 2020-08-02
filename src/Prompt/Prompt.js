import React from 'react'
import './Prompt.css'

class Prompt extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isWriting: false,
      storyTitle: '',
      authorName: '',
      story: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  resetStory = () => {
    this.setState({ story: '' })
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
    let author
    !this.state.authorName ? author = 'Anonymous' : author = this.state.authorName
    if (this.state.story && this.state.storyTitle) {
      const newStory = {
      promptId: this.props.prompt.id,
      storyTitle: this.state.storyTitle,
      authorName: author,
      storyText: this.state.story
    }
    this.props.saveStory(newStory)
    } 
    this.toggleIsWriting()
    this.resetStory()
  }

  renderButtons = () => {
    return this.state.isWriting ? 
      <button onClick={this.completeStory}>Save this story</button> :
      <button 
        className='write-prompt-btn' 
        onClick={(e) => this.toggleIsWriting(e)}
      >
        Write this prompt
      </button>
  }

  toggleIsWriting = () => {
    this.setState({ isWriting: !this.state.isWriting})
  }

  renderTextArea = () => {
    //ERROR HANDLING FOR NO TITLE

    return this.state.isWriting && 
      <section>
        <label for='title'>
          Title: 
          <input 
            id='title'
            type='text'
            name='storyTitle'
            placeholder='Story Title...'
            value={this.state.storyTitle}
            onChange={this.handleChange}
          />
        </label>
        <label for='author'>
          Written By:
          <input 
            id='author'
            type='text'
            name='authorName'
            placeholder='Author Name...'
            value={this.state.authorName}
            onChange={this.handleChange}
          />
        </label>
        <label for='story'>
          Story:
          <textarea 
            id='story'
            className='text-area'
            name='story'
            placeholder='Start your story here...'
            value={this.state.story}
            onChange={this.handleChange}
            rows= '5'
            cols='30'
          />
        </label>

      </section>
  }

  renderStories = () => {
    if (this.props.stories.length > 0 ) {
      const stories = this.props.stories.map(story => {
        return (
          <section>
            <p>{story.storyTitle}</p>
            <p>by {story.authorName}</p>
            <p>{story.storyText}</p>
          </section>
        )
      })
      return (
        <section data-testid='related-stories' className='story-container'>
          {stories}
        </section>
      )
    } else {
      return <p data-testid='related-stories' className='story-container'>No stories yet.  Get to writing!</p>
    }
  }

  render() {
    return (
      <main className='prompt'>
        {this.renderPrompt()}
        {this.renderCharacter()}
        {this.renderLocation()}
        {this.renderTextArea()}
        {this.renderButtons()}
        {this.renderStories()}
      </main>
    )
  }
}

export default Prompt