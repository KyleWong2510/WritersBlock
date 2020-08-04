import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PromptGenerator from './PromptGenerator'
import { getRandomCharacter, getRandomPrompt } from '../apiCalls'

jest.mock('../apiCalls')

describe('PromptGenerator', () => {
  getRandomPrompt.mockResolvedValue({
    query: [
      'adjective',
      'noun',
      'adverb',
      'verb',
      'adjective'
    ],
    english: 'A considerate elf who is intelligently running after an American chef.',
    components: [
      {
        type: 'noun',
        start: '',
        words: [
          {
            type: 'adjective',
            phrase: 'noun',
            start: '',
            text: 'considerate',
            end: ''
          }, {
            type: 'noun',
            phrase: 'noun',
            start: '',
            text: 'elf',
            end: ''
          }
        ],
        end: '',
        english: 'a considerate elf who is'
      }, {
        type: 'verb',
        start: '',
        words: [
          {
            type: 'adverb',
            phrase: 'verb',
            start: '',
            text: 'intelligently',
            end: ''
          },
          {
            type: 'verb',
            phrase: 'verb',
            start: '',
            text: 'running after',
            end: ''
          }
        ],
        end: '',
        english: 'intelligently running after'
      }, {
        type: 'noun',
        start: '',
        words: [
          {
            type: 'adjective',
            phrase: 'noun',
            start: '',
            text: 'American',
            end: ''
          }, {
            type: 'noun',
            phrase: 'noun',
            start: '',
            text: 'chef',
            end: ''
          }
        ],
        end: '',
        english: 'an American chef'
      }
    ],
    count: 10394397,
    dictionaryURL: 'http://ineedaprompt.com/dictionary/default/json'
  })

  getRandomCharacter.mockResolvedValue({
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Özkan',
          last: 'Ekşioğlu'
        },
        location: {
          street: {
            number: 1867,
            name: 'Anafartalar Cd'
          },
          city: 'Ardahan',
          state: 'Kırşehir',
          country: 'Turkey',
          postcode: 69806,
          coordinates: {
            latitude: '78.0642',
            longitude: '-15.7734'
          },
          timezone: {
            offset: '-6:00',
            description: 'Central Time (US & Canada), Mexico City'
          }
        },
        dob: {
          date: '1959-08-02T08:16:52.011Z',
          age: 61
        },
        nat: 'TR'
      }
    ],
    info: {
      seed: 'a7e257249a8a6e3a',
      results: 1,
      page: 1,
      version: '1.3'
    }
  })

  it('should render text and a button', () => {
    const { getByText, getByRole } = render(
      <BrowserRouter>
        <PromptGenerator />
      </BrowserRouter>
    )

    const title = getByText('Generate a new prompt')
    const button = getByRole('button')

    expect(title).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should render a prompt and buttons onClick', async () => {
    const { getByRole, getByTestId } = render(
      <BrowserRouter>
        <PromptGenerator />
      </BrowserRouter>
    )

    const genPromptBtn = getByRole('button', { name: 'Generate Prompt' })

    fireEvent.click(genPromptBtn)

    const promptText = await waitFor(() => getByTestId('prompt-text'))
    const genNewPromptBtn = await waitFor(() => getByRole('button', { name: 'Generate New Prompt' }))
    const addCharacterBtn = await waitFor(() => getByRole('button', { name: 'Add a Character' }))
    const addLocationBtn = await waitFor(() => getByRole('button', { name: 'Add a Location' }))
    const usePromptBtn = await waitFor(() => getByRole('button', { name: 'Use This Prompt' }))

    expect(promptText).toBeInTheDocument()
    expect(genNewPromptBtn).toBeInTheDocument()
    expect(addCharacterBtn).toBeInTheDocument()
    expect(addLocationBtn).toBeInTheDocument()
    expect(usePromptBtn).toBeInTheDocument()
  })

  it('should render a new prompt on click of the generateNewPrompt button', async () => {
    const { getByRole, getByTestId } = render(
      <BrowserRouter>
        <PromptGenerator />
      </BrowserRouter>
    )

    const genPromptBtn = getByRole('button', { name: 'Generate Prompt' })
    fireEvent.click(genPromptBtn)

    const genNewPromptBtn = await waitFor(() => getByRole('button', { name: 'Generate New Prompt' }))
    fireEvent.click(genNewPromptBtn)

    const promptText = await waitFor(() => getByTestId('prompt-text'))

    expect(promptText).toBeInTheDocument()
  })

  it('should render a character on click of the generateCharacter button', async () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <PromptGenerator />
      </BrowserRouter>
    )

    const genPromptBtn = getByRole('button', { name: 'Generate Prompt' })
    fireEvent.click(genPromptBtn)

    const addCharacterBtn = await waitFor(() => getByRole('button', { name: 'Add a Character' }))
    fireEvent.click(addCharacterBtn)

    const character = await waitFor(() => getByText('Character'))

    expect(character).toBeInTheDocument()
  })

  it('should render a location on click of the generateCharacter button', async () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <PromptGenerator />
      </BrowserRouter>
    )

    const genPromptBtn = getByRole('button', { name: 'Generate Prompt' })
    fireEvent.click(genPromptBtn)

    const addLocationBtn = await waitFor(() => getByRole('button', { name: 'Add a Location' }))
    fireEvent.click(addLocationBtn)

    const location = await waitFor(() => getByText('Location'))

    expect(location).toBeInTheDocument()
  })

  it('should fire the post function on click', async () => {
    const mockSavePrompt = jest.fn()
    const { getByRole } = render(
      <BrowserRouter>
        <PromptGenerator savePrompt={mockSavePrompt} />
      </BrowserRouter>
    )

    const genPromptBtn = getByRole('button', { name: 'Generate Prompt' })
    fireEvent.click(genPromptBtn)

    const usePromptBtn = await waitFor(() => getByRole('button', { name: 'Use This Prompt' }))
    fireEvent.click(usePromptBtn)

    expect(mockSavePrompt).toHaveBeenCalledTimes(1)
  })
})
