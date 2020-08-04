import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import StoryCard from './StoryCard'

describe('StoryCard', () => {
  it('should render the title, author, and story', () => {
    const story = {
      authorName: 'Test Author',
      promptId: 1596389494922,
      storyId: 1596389498784,
      storyText: 'Test Story',
      storyTitle: 'Test Title'
    }

    const { getByText } = render(
      <BrowserRouter>
        <StoryCard story={story} />
      </BrowserRouter>
    )

    const title = getByText('Test Title')
    const author = getByText('Test Author', { exact: false })
    const storyText = getByText('Test Story')

    expect(title).toBeInTheDocument()
    expect(author).toBeInTheDocument()
    expect(storyText).toBeInTheDocument()
  })
})
