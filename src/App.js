import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import HelloWorld from './components/HelloWorld';

export default class App extends Component {


  render () {
    return (
      <body>
        <Navbar />
        <main className="container">
          <HelloWorld />
          
        </main>
      </body>
    )
  }
}