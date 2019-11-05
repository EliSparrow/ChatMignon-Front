import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './sass/index.sass'
import './App.css';
import { ListCats } from './component/catList';
import { Vote } from './component/vote';
import { Nav } from './component/nav';
import { Footer } from './component/footer';

function App() {
  return (
    <Router>
      <Route path="/" component={Nav}></Route>
      <Route exact path="/score" component={ListCats}></Route>
      <Route exact path="/" component={Vote}></Route>
      <Route path="/" component={Footer}></Route>
    </Router>
  );
}

export default App;
