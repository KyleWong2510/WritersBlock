import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('should render Header and the PromptContainer', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const header = getByText('Writer\'s Block')
    const promptContainer = getByText('Prompts')

    expect(header).toBeInTheDocument()
    expect(promptContainer).toBeInTheDocument()
  })

  it('should render the PromptGenerator component when clicking the button in the header', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const button = getByRole('button', { name: 'Generate Prompt' })
    fireEvent.click(button)

    const promptGenerator = getByText('Generate a new prompt')
    expect(promptGenerator).toBeInTheDocument()
  })

  it.skip('should render a Prompt when clicking the Link in the PromptContainer', () => {
    // ADD PROMPTS TO RENDER
  })
})
