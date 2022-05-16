import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';

class app extends Component {
  state = {
    mediaList: [],
  };
  render() {
    return (
      <div class="app-wrap">
        <div class="app">
          <Navbar />
          <div></div>
        </div>
      </div>
    );
  }
}

export default app;
