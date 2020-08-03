import React from 'react'
import { withRouter } from 'react-router-dom'

import './Story.css'
import { checkPropTypes } from 'prop-types'

const Story = (props) => {
  return (
    <main className='story'>
      <button 
        className='back-btn'
        onClick={() => props.history.goBack()}
      > 
        Back to Prompt
      </button>
      <section className='story-header'>
        <h2>{props.story.storyTitle}</h2>
        <p>by {props.story.authorName}</p>
      </section>
      <p className='story-text'>{props.story.storyText}</p>
    </main>
  )
}

export default withRouter(Story)