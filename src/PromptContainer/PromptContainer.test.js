import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PromptContainer from './PromptContainer'

describe('PromptContainer', () => {
  it('should render the prompt container', () => {
    const prompts = [{ prompt: 'X' }, { prompt: 'Y' }]

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <PromptContainer prompts={prompts} stories={[]}/>
      </BrowserRouter>
    )

    const title = getByText('Prompts')
    const allPrompts = getByTestId('prompts')

    expect(title).toBeInTheDocument()
    expect(allPrompts).toBeInTheDocument()
  })

  it('should render the prompts', () => {
    const prompts = [{ prompt: 'X' }, { prompt: 'Y' }]

    const { getByText } = render(
      <BrowserRouter>
        <PromptContainer prompts={prompts} stories={[{}, {} ,{}]}/>
      </BrowserRouter>
    )

    const title = getByText('Prompts')
    const prompt1 = getByText('X')
    const prompt2 = getByText('Y')

    expect(title).toBeInTheDocument()
    expect(prompt1).toBeInTheDocument()
    expect(prompt2).toBeInTheDocument()
  })
})
