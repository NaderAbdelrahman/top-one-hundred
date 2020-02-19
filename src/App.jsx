import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AlbumList from "./screens/album.list";
import './scss/app.scss'

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={AlbumList}/>
      </BrowserRouter>
  );
}

export default App;
