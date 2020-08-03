import React from 'react'
import PropTypes from 'prop-types'
import './StoryCard.css'

const StoryCard = ({ story }) => {
  return (
    <section className='story-card'>
      <h3 className='prompt-page-title'>{story.storyTitle}</h3>
      <p>by {story.authorName}</p>
      <p>{story.storyText}</p>
    </section>
  )
}

export default StoryCard

StoryCard.propTypes = {
  story: PropTypes.object
}