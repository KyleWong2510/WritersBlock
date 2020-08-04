import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PromptCard from './PromptCard'

describe('PromptCard', () => {
  it('should render the prompt card', () => {
    const prompt = { prompt: '' }
    const { getByTestId } = render(
      <BrowserRouter>
        <PromptCard
          prompt={prompt}
        />
      </BrowserRouter>
    )

    const promptDesc = getByTestId('prompt-desc')
    const promptStats = getByTestId('prompt-stats')

    expect(promptDesc).toBeInTheDocument()
    expect(promptStats).toBeInTheDocument()
  })

  it('should render the character if the prompt has a character', () => {
    const prompt = {
      characterAge: '1991-02-04',
      characterName: 'Mrs Lotta Justi',
      id: 1596484605566,
      location: '',
      nationality: 'FI',
      prompt: 'A diminutive Marine who is greedily being held hostage on a busy Monday.'
    }
    const { getByText } = render(
      <BrowserRouter>
        <PromptCard
          prompt={prompt}
        />
      </BrowserRouter>
    )

    const character = getByText('Character')

    expect(character).toBeInTheDocument()
  })

  it('should render the location if the prompt is given a location', () => {
    const prompt = {
      characterAge: '',
      characterName: '',
      id: 1596484605566,
      location: { city: 'Enger', country: 'Germany' },
      nationality: '',
      prompt: 'A diminutive Marine who is greedily being held hostage on a busy Monday.'
    }
    const { getByText } = render(
      <BrowserRouter>
        <PromptCard
          prompt={prompt}
        />
      </BrowserRouter>
    )

    const location = getByText('Location')

    expect(location).toBeInTheDocument()
  })
})
