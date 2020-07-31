import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('should render the header', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    
    const title = getByText('Writer\'s Block')
    const description = getByText('Writing prompt generator')
    const button = getByRole('button')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})