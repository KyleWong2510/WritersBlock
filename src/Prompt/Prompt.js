import React from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import StoryCard from '../StoryCard/StoryCard'
import './Prompt.css'

class Prompt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

  renderPrompt = () => this.props.prompt.prompt
      && (
        <section>
          <h2 className="prompt-page-title" data-testid="prompt">Prompt</h2>
          <p>{this.props.prompt.prompt}</p>
        </section>
      )

  renderCharacter = () => this.props.prompt.characterName
      && (
        <section className="prompt-character">
          <h3 className="prompt-page-title">Character</h3>
          <p>
            Name:
            {this.props.prompt.characterName}
          </p>
          <p>
            Age:
            {this.props.prompt.characterAge}
          </p>
          <p>
            Nationality:
            {this.props.prompt.nationality}
          </p>
        </section>
      )

  renderLocation = () => this.props.prompt.location
      && (
        <section className="prompt-location">
          <h3 className="prompt-page-title">Location</h3>
          <p>
            City:
            {this.props.prompt.location.city}
          </p>
          <p>
            Country:
            {this.props.prompt.location.country}
          </p>
        </section>
      )

  completeStory = () => {
    const author = !this.state.authorName ? 'Anonymous' : this.state.authorName
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

  renderButtons = () => (this.state.isWriting
    ? (
      <button
        type="button"
        className="write-prompt-btn"
        onClick={this.completeStory}
      >
        Save this story
      </button>
    )
    : (
      <button
        type="button"
        className="write-prompt-btn"
        onClick={(e) => this.toggleIsWriting(e)}
      >
        Write this prompt
      </button>
    ))

  toggleIsWriting = () => {
    this.setState((prevState) => ({ isWriting: !prevState.isWriting }))
  }

  renderTextArea = () => this.state.isWriting
      && (
        <section className="prompt-writing">
          <section className="writing-inputs">
            <label htmlFor="title" className="writing-input">
              <h2 className="prompt-page-title">Title: </h2>
              <input
                id="title"
                type="text"
                name="storyTitle"
                placeholder="Story Title..."
                value={this.state.storyTitle}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="author" className="writing-input">
              <h2 className="prompt-page-title">Author: </h2>
              <input
                id="author"
                type="text"
                name="authorName"
                placeholder="Author Name..."
                value={this.state.authorName}
                onChange={this.handleChange}
              />
            </label>
          </section>
          <label htmlFor="story" className="text-area">
            <h2 className="prompt-page-title">Story: </h2>
            <textarea
              id="story"
              className="text-area"
              name="story"
              placeholder="Start your story here..."
              value={this.state.story}
              onChange={this.handleChange}
              rows="5"
              cols="30"
            />
          </label>
        </section>
      )

  renderStories = () => {
    if (this.props.stories.length > 0) {
      console.log('HEY!')
      const stories = this.props.stories.map((story) => (
        <Link to={`/story/${story.storyId}`} className="story-link">
          <StoryCard story={story} key={story.storyId} />
        </Link>
      ))
      return (
        <section data-testid="related-stories" className="story-container">
          {stories}
        </section>
      )
    }
    return <p data-testid="related-stories" className="empty-story-container">No stories yet.  Get to writing!</p>
  }

  render() {
    if (!this.props.prompt) return <Redirect to="/" />

    return (
      <main className="prompt">
        <section className="prompt-top">
          {this.renderTextArea()}
          <section className="prompt-details">
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

Prompt.defaultProps = {
  prompt: {},
  stories: [],
  saveStory: () => {}
}

Prompt.propTypes = {
  prompt: PropTypes.object,
  stories: PropTypes.array,
  saveStory: PropTypes.func
}
