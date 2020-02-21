import React from 'react';
// I am using HashRouter instead of BrowserRouter to work with github.io
import { HashRouter, Route } from 'react-router-dom'
import AlbumList from "./screens/album.list";
import './scss/app.scss'

function App() {
  return (
      <HashRouter>
        <Route exact path="/" component={AlbumList}/>
      </HashRouter>
  );
}

export default App;
