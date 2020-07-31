import React from 'react'
import PromptContainer from './PromptContainer'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PromptCard from '../PromptCard/PromptCard'

describe('PromptContainer', () => {
  it('should render the prompt container', () => {
    const prompts = [{prompt: 'X'}, {prompt: 'Y'}]

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <PromptContainer prompts={prompts}
        />
      </BrowserRouter>
    )

    const title = getByText('Prompts')
    const allPrompts = getByTestId('prompts')

    expect(title).toBeInTheDocument()
    expect(allPrompts).toBeInTheDocument()
  })
})