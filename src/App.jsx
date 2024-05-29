import React, { Component } from 'react';
import NavBar from '../component/navbar';
import Home from '../component/homePage'



class App extends Component {

  render() { 
    
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <Home />
        </main>
      </>
    );
  }
}
 
export default App;