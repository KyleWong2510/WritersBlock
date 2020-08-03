import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import PromptContainer from '../PromptContainer/PromptContainer'
import PromptGenerator from  '../PromptGenerator/PromptGenerator'
import Prompt from '../Prompt/Prompt'
import Story from '../Story/Story'
import { getPrompts, getStories, postPrompt, postStory } from '../apiCalls'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      prompts: [],
      stories: []
    }
  }

  componentDidMount = () => {
    getPrompts()
      .then(data => {
        this.setState({ prompts: data})
      })
      .catch(err => console.error(err))
    getStories()
      .then(data => {
        this.setState({ stories: data })
      })
      .catch(err => console.error(err))
  }

  savePrompt = (newPrompt) => {
    this.setState({ prompts: [...this.state.prompts, newPrompt]})
    postPrompt(newPrompt)
      .catch(err => console.error(err))
  }
  
  saveStory = (newStory) => {
    this.setState({ stories: [...this.state.stories, newStory]})
    postStory(newStory)
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <Route exact path='/'>
          <Header />
          <PromptContainer 
            prompts={this.state.prompts}
            stories={this.state.stories}
          />
        </Route>
        <Route path='/prompt-generator'>
          <Header />
          <PromptGenerator 
            savePrompt={this.savePrompt}
          />
        </Route>
        <Route 
          exact path='/prompt/:id'
          render={({ match }) => {
            const { id } = match.params
            const prompt = this.state.prompts.find(prompt => prompt.id === parseInt(id))
            const stories = this.state.stories.filter(story => story.promptId === parseInt(id))
            return (
              <>
                <Header />
                <Prompt 
                  prompt={prompt}
                  stories={stories} 
                  saveStory={this.saveStory}
                />
              </>
            )
          }}
        />
        <Route 
          exact path='/story/:id'
          render={({ match }) => {
            const { id } = match.params
            const story = this.state.stories.find(story => story.storyId === parseInt(id))
            return (
              <>
                <Header />
                <Story 
                  story={story}
                />
              </>
            )
          }}
        />
      </>
    )
  }
}

export default App;
