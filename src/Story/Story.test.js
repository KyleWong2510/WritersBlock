import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Story from './Story'

describe('Story', () => {
  it('should render a story and a button', () => {
    const story = {
      authorName: 'Test Author',
      promptId: 1596389494922,
      storyId: 1596389498784,
      storyText: 'Test Story',
      storyTitle: 'Test Title'
    }

    const { getByRole, getByText } = render(
      <BrowserRouter>
        <Story story={story} />
      </BrowserRouter>
    )

    const backBtn = getByRole('button')
    const title = getByText('Test Title')
    const author = getByText('Test Author', { exact: false })
    const storyText = getByText('Test Story')

    expect(backBtn).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(author).toBeInTheDocument()
    expect(storyText).toBeInTheDocument()
  })

  it('should fire a function on click of the goBack button', () => {
    const story = {
      authorName: 'Test Author',
      promptId: 1596389494922,
      storyId: 1596389498784,
      storyText: 'Test Story',
      storyTitle: 'Test Title'
    }
    const mockGoBack = jest.fn()
    const history = {
      goBack: mockGoBack
    }

    const { getByRole, getByText } = render(
      <BrowserRouter>
        <Story story={story} history={history} />
      </BrowserRouter>
    )

    const backBtn = getByRole('button')
    fireEvent.click(backBtn)
    
    expect(mockGoBack).toHaveBeenCalledTimes(1)
    
  })
})
