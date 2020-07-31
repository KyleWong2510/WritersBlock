import React from 'react'
import PromptCard from './PromptCard'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('PromptCard', () => {
  it('should render the prompt card', () => {
    const prompt = {prompt: ''}
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
})