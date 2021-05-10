import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavbarComponent from './components/navbar/navbar.component';
import ListAlbumComponent from './components/list-albums/list-albums.component';
import HomeComponent from './components/home/home.component';
import ListArtistComponent from './components/list-artists/list-artists.component';

function App() {
  return (
    <div className="App">
     <Router>
       <NavbarComponent/>
       <Switch>
       <Route path='/' exact component = {HomeComponent}></Route>
       <Route path='/listAlbums' component = {ListAlbumComponent}></Route>
       <Route path='/listArtists' component = {ListArtistComponent}></Route>
       </Switch>
    </Router> 

    </div>
  );
}

export default App;
