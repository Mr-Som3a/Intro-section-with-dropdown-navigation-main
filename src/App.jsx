import React, { Component } from 'react';
import NavBar from '../component/navbar';
import Home from '../component/homePage'



class App extends Component {
  state = { 
    ariaExpanded: false,
  } 
  handleAria = (e) => {
    console.log('inside handler')
    const ariaExpanded = e.target.ariaExpanded;
    this.setState({ariaExpanded:!ariaExpanded})
  }
  render() { 
    const { ariaExpanded} = this.state;
    return (
      <>
        <NavBar handleAria={this.handleAria} AriaExpanded={ariaExpanded} />
        <main>
          <Home />
        </main>
      </>
    );
  }
}
 
export default App;