import React from 'react'
import './StoryCard.css'

const StoryCard = ({ story }) => {
  return (
    <section>
      <h3>{story.storyTitle}</h3>
      <p>by {story.authorName}</p>
      <p>{story.storyText}</p>
    </section>
  )
}

export default StoryCard

//PROPTYPES