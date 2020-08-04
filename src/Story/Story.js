import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Story.css'

const Story = (props) => {
  if (!props.story) return <Redirect to="/" />
  return (
    <main className="story">
      <button
        type="button"
        className="back-btn"
        onClick={() => props.history.goBack()}
      >
        Back to Prompt
      </button>
      <section className="story-header">
        <h2>{props.story.storyTitle}</h2>
        <p>
          by
          {props.story.authorName}
        </p>
      </section>
      <p className="story-text">{props.story.storyText}</p>
    </main>
  )
}

export default withRouter(Story)

Story.propTypes = {
  story: PropTypes.object,
  history: PropTypes.object
}
