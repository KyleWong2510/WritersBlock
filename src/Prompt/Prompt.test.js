import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Prompt from './Prompt'

describe('Prompt', () => {
  it('should render the prompt page', () => {
    const prompt = {
      characterAge: '1957-04-12',
      characterName: 'Mr Evan Mckinney',
      id: 1596389659056,
      location: { city: 'Lillesand', country: 'Norway' },
      nationality: 'AU',
      prompt: 'An off-white nun who is going to Senior Prom with an off-white and unkempt calligraphy enthusiast.'
    }
    const { getByTestId, getByRole, getByText } = render(
      <BrowserRouter>
        <Prompt
          prompt={prompt}
          stories={[]}
          saveStory={jest.fn()}
        />
      </BrowserRouter>
    )

    const promptText = getByTestId('prompt')
    const character = getByText('Character')
    const location = getByText('Location')
    const button = getByRole('button')
    const stories = getByTestId('related-stories')

    expect(promptText).toBeInTheDocument()
    expect(character).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(stories).toBeInTheDocument()
  })

  it('should render inputs and btns onClick of Write Prompt button', () => {
    const prompt = {
      characterAge: '1957-04-12',
      characterName: 'Mr Evan Mckinney',
      id: 1596389659056,
      location: { city: 'Lillesand', country: 'Norway' },
      nationality: 'AU',
      prompt: 'An off-white nun who is going to Senior Prom with an off-white and unkempt calligraphy enthusiast.'
    }
    const story = {
      authorName: 'Test Author',
      promptId: 1596389659056,
      storyId: 1596398552320,
      storyText: 'Test Story',
      storyTitle: 'Test Title'
    }
    const { getByPlaceholderText, getByRole, getByText } = render(
      <BrowserRouter>
        <Prompt
          prompt={prompt}
          stories={[story]}
          saveStory={jest.fn()}
        />
      </BrowserRouter>
    )

    const button = getByRole('button', { name: 'Write this prompt' })
    fireEvent.click(button)

    const titleInput = getByPlaceholderText('Story Title...')
    const authorInput = getByPlaceholderText('Author Name...')
    const storyInput = getByPlaceholderText('Start your story here...')
    const saveBtn = getByRole('button', { name: 'Save this story' })
    const storyText = getByText('Test Story')

    expect(titleInput).toBeInTheDocument()
    expect(authorInput).toBeInTheDocument()
    expect(storyInput).toBeInTheDocument()
    expect(storyText).toBeInTheDocument()
    expect(saveBtn).toBeInTheDocument()
  })

  it('should update inputs as you type', () => {
    const prompt = {
      characterAge: '1957-04-12',
      characterName: 'Mr Evan Mckinney',
      id: 1596389659056,
      location: { city: 'Lillesand', country: 'Norway' },
      nationality: 'AU',
      prompt: 'An off-white nun who is going to Senior Prom with an off-white and unkempt calligraphy enthusiast.'
    }
    const { getByPlaceholderText, getByRole, getByDisplayValue } = render(
      <BrowserRouter>
        <Prompt
          prompt={prompt}
          stories={[]}
          saveStory={jest.fn()}
        />
      </BrowserRouter>
    )
    const button = getByRole('button', { name: 'Write this prompt' })
    fireEvent.click(button)

    const titleInput = getByPlaceholderText('Story Title...')
    const authorInput = getByPlaceholderText('Author Name...')
    const storyInput = getByPlaceholderText('Start your story here...')

    fireEvent.change(titleInput, { target: { value: 'Title Title' } })
    fireEvent.change(authorInput, { target: { value: 'Author Author' } })
    fireEvent.change(storyInput, { target: { value: 'Story Story' } })

    const newTitle = getByDisplayValue('Title Title')
    const newAuthor = getByDisplayValue('Author Author')
    const newStory = getByDisplayValue('Story Story')

    expect(newTitle).toBeInTheDocument()
    expect(newAuthor).toBeInTheDocument()
    expect(newStory).toBeInTheDocument()
  })

  it('should post the story onClick of the saveBtn', () => {
    const prompt = {
      characterAge: '1957-04-12',
      characterName: 'Mr Evan Mckinney',
      id: 1596389659056,
      location: { city: 'Lillesand', country: 'Norway' },
      nationality: 'AU',
      prompt: 'An off-white nun who is going to Senior Prom with an off-white and unkempt calligraphy enthusiast.'
    }
    const mockSaveStory = jest.fn()
    const { getByPlaceholderText, getByRole, getByText } = render(
      <BrowserRouter>
        <Prompt
          prompt={prompt}
          stories={[]}
          saveStory={mockSaveStory}
        />
      </BrowserRouter>
    )

    const button = getByRole('button', { name: 'Write this prompt' })
    fireEvent.click(button)

    const titleInput = getByPlaceholderText('Story Title...')
    const authorInput = getByPlaceholderText('Author Name...')
    const storyInput = getByPlaceholderText('Start your story here...')

    fireEvent.change(titleInput, { target: { value: 'Test Title' } })
    fireEvent.change(authorInput, { target: { value: 'Test Author' } })
    fireEvent.change(storyInput, { target: { value: 'Test Story' } })

    const saveBtn = getByRole('button', { name: 'Save this story' })
    fireEvent.click(saveBtn)

    expect(mockSaveStory).toHaveBeenCalledTimes(1)
  })

  it.skip('should render the story onClick of the saveBtn', async () => {
    // HOW DO I WRITE THIS TEST?
    const prompt = {
      characterAge: '1957-04-12',
      characterName: 'Mr Evan Mckinney',
      id: 1596389659056,
      location: { city: 'Lillesand', country: 'Norway' },
      nationality: 'AU',
      prompt: 'An off-white nun who is going to Senior Prom with an off-white and unkempt calligraphy enthusiast.'
    }

    const { getByPlaceholderText, getByRole, getByText } = render(
      <BrowserRouter>
        <Prompt
          prompt={prompt}
          stories={[]}
          saveStory={jest.fn()}
        />
      </BrowserRouter>
    )

    const button = getByRole('button', { name: 'Write this prompt' })
    fireEvent.click(button)

    const titleInput = getByPlaceholderText('Story Title...')
    fireEvent.change(titleInput, { target: { value: 'Test Title' } })

    const authorInput = getByPlaceholderText('Author Name...')
    fireEvent.change(authorInput, { target: { value: 'Test Author' } })

    const storyInput = getByPlaceholderText('Start your story here...')
    fireEvent.change(storyInput, { target: { value: 'Test Story' } })

    const saveBtn = getByRole('button', { name: 'Save this story' })
    fireEvent.click(saveBtn)

    const storyText = await waitFor(() => getByText('by Test Author'))
    expect(storyText).toBeInTheDocument()
  })
})
