
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import UserLocalstorage from './Components/UserLocalstorage/UserLocalstorage';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< UserLocalstorage />}></Route>
                 <Route exact path='/home' element={< Home />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;