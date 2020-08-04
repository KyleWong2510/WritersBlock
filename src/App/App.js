import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import PromptContainer from '../PromptContainer/PromptContainer'
import PromptGenerator from '../PromptGenerator/PromptGenerator'
import Prompt from '../Prompt/Prompt'
import Story from '../Story/Story'
import {
  getPrompts, getStories, postPrompt, postStory
} from '../apiCalls'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      prompts: [],
      stories: []
    }
  }

  componentDidMount = () => {
    getPrompts()
      .then((data) => {
        this.setState({ prompts: data })
      })
      .catch((err) => console.error(err))
    getStories()
      .then((data) => {
        this.setState({ stories: data })
      })
      .catch((err) => console.error(err))
  }

  savePrompt = (newPrompt) => {
    const { prompts } = this.state
    this.setState({ prompts: [...prompts, newPrompt] })
    postPrompt(newPrompt)
      .catch((err) => console.error(err))
  }

  saveStory = (newStory) => {
    const { stories } = this.state
    this.setState({ stories: [...stories, newStory] })
    postStory(newStory)
      .catch((err) => console.error(err))
  }

  render() {
    return (
      <>
        <Route exact path="/">
          <Header />
          <PromptContainer
            prompts={this.state.prompts}
            stories={this.state.stories}
          />
        </Route>
        <Route path="/prompt-generator">
          <Header />
          <PromptGenerator
            savePrompt={this.savePrompt}
          />
        </Route>
        <Route
          exact
          path="/prompt/:id"
          render={({ match }) => {
            const { id } = match.params
            const foundPrompt = this.state.prompts.find((prompt) => prompt.id === parseInt(id, 10))
            const stories = this.state.stories.filter((story) => story.promptId === parseInt(id, 10))
            return (
              <>
                <Header />
                <Prompt
                  prompt={foundPrompt}
                  stories={stories}
                  saveStory={this.saveStory}
                />
              </>
            )
          }}
        />
        <Route
          exact
          path="/story/:id"
          render={({ match }) => {
            const { id } = match.params
            const foundStory = this.state.stories.find((story) => story.storyId === parseInt(id, 10))
            return (
              <>
                <Header />
                <Story
                  story={foundStory}
                />
              </>
            )
          }}
        />
      </>
    )
  }
}

export default App
