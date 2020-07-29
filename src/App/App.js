import React from 'react';
import './App.css';
import Header from '../Header/Header'
import PromptContainer from '../PromptContainer/PromptContainer'
import PromptGenerator from  '../PromptGenerator/PromptGenerator'
import Prompt from '../Prompt/Prompt'

class App extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }

  render() {
    return (
      <>
        <Header />
        {/* <PromptContainer /> */}
        {/* <PromptGenerator /> */}
        <Prompt />
      </>
    )
  }
}

export default App;
