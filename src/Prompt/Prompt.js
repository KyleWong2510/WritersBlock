import React from 'react'
import PropTypes from 'prop-types'
import StoryCard from '../StoryCard/StoryCard'
import './Prompt.css'

class Prompt extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isWriting: false,
      storyId: Date.now(),
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
        <h2 className='prompt-page-title' data-testid='prompt'>Prompt</h2>
        <p>{this.props.prompt.prompt}</p>
      </section> 
  }

  renderCharacter = () => {
    return this.props.prompt.characterName && 
      <section className='prompt-character'>
        <h3 className='prompt-page-title'>Character</h3>
        <p>Name: {this.props.prompt.characterName}</p>
        <p>Age: {this.props.prompt.characterAge}</p>
        <p>Nationality: {this.props.prompt.nationality}</p>
      </section>
  }

  renderLocation = () => {
    return this.props.prompt.location && 
      <section className='prompt-location'>
        <h3 className='prompt-page-title'>Location</h3>
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
      storyId: this.state.storyId,
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
      <button 
        className='write-prompt-btn' 
        onClick={this.completeStory}
      >
        Save this story
      </button> :
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
      <section className='prompt-writing'>
        <section className='writing-inputs'>
          <label htmlFor='title' className='writing-input'>
            <h2 className='prompt-page-title'>Title: </h2>
            <input 
              id='title'
              type='text'
              name='storyTitle'
              placeholder='Story Title...'
              value={this.state.storyTitle}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor='author' className='writing-input'>
            <h2 className='prompt-page-title'>Author: </h2>
            <input 
              id='author'
              type='text'
              name='authorName'
              placeholder='Author Name...'
              value={this.state.authorName}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label htmlFor='story' className='text-area'>
          <h2 className='prompt-page-title'>Story: </h2>
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
        return <StoryCard story={story} key={story.storyId} />
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
        <section className='prompt-top'>
          {this.renderTextArea()}
          <section className='prompt-details'>
            {this.renderPrompt()}
            {this.renderCharacter()}
            {this.renderLocation()}
          </section>
        </section>
        {this.renderButtons()}
        {this.renderStories()}
      </main>
    )
  }
}

export default Prompt

Prompt.propTypes = {
  prompt: PropTypes.object,
  stories: PropTypes.array,
  saveStory: PropTypes.func
}