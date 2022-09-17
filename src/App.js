
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Update from './Components/Update';
import Home from './Pages/Home';
import Login from './Pages/Login';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/update' element={< Update />}></Route>

          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;