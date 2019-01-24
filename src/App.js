import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import HelloWorld from './components/HelloWorld';
import Search from './components/Search';

export default class App extends Component {

  render () {
    return (
      <div>
        <Navbar />
        <HelloWorld />
        <main className="container">
        <Search />
          
          
        </main>
      </div>
    )
  }
}