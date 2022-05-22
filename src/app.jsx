import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.css';
import Navbar from './components/navbar';
import MediaList from './components/mediaList';
import MediaDetails from './layouts/mediaDetails';

class app extends Component {
  render() {
    return (
      <div className="app-wrap">
        <div className="app">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MediaList />} />
              <Route path="/media/:id" element={<MediaDetails />} />
              <Route path="/search" element={<MediaDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default app;
