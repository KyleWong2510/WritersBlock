import React from 'react'
import Prompt from './Prompt'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Prompt', () => {
  it('should render the prompt page', () => {
    const { getByTestId, getByRole } = render(
      <BrowserRouter>
        <Prompt />
      </BrowserRouter>
    )

    const prompt = getByTestId('prompt')
    const button = getByRole('button')
    const stories = getByTestId('related-stories')

    expect(prompt).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(stories).toBeInTheDocument()
  })
})