import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import PromptContainer from '../PromptContainer/PromptContainer'
import PromptGenerator from  '../PromptGenerator/PromptGenerator'
import Prompt from '../Prompt/Prompt'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      prompts: []
    }
  }

  savePrompt = (newPrompt) => {
    this.setState({ prompts: [...this.state.prompts, newPrompt]})
  }

  render() {
    return (
      <>
        <Route exact path='/'>
          <Header />
          <PromptContainer />
        </Route>
        <Route path='/prompt-generator'>
          <Header />
          <PromptGenerator 
            savePrompt={this.savePrompt}
          />
        </Route>
        <Route path='/prompt'>
          <Header />
          <Prompt />
        </Route>
      </>
    )
  }
}

export default App;
