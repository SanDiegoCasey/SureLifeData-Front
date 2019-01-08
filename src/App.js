import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
