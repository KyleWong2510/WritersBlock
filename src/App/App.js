import React from 'react';
import './App.css';
import Header from '../Header/Header'
import PromptContainer from '../PromptContainer/PromptContainer'

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
        <PromptContainer />
      </>
    )
  }
}

export default App;
