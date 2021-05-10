import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavbarComponent from './components/navbar/navbar.component';
import ListAlbumComponent from './components/list-albums/list-albums.component';
import HomeComponent from './components/home/home.component';
import ListArtistComponent from './components/list-artists/list-artists.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAlbumComponent from './components/add-albums/add-album.component';


function App() {
  return (
    <div className="App">
     <Router>
       <NavbarComponent/>
       <Switch>
       <Route path='/' exact component = {HomeComponent}></Route>
       <Route path='/listAlbums' component = {ListAlbumComponent}></Route>
       <Route path='/listArtists' component = {ListArtistComponent}></Route>
       <Route path='/addAlbum' component = {AddAlbumComponent}></Route>
       </Switch>
    </Router> 

    </div>
  );
}

export default App;
