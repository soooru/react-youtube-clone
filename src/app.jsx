import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import MediaList from './components/mediaList';

class app extends Component {
  render() {
    return (
      <div className="app-wrap">
        <div className="app">
          <Navbar />
          <MediaList />
        </div>
      </div>
    );
  }
}

export default app;
