import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link className='App-link' to='/'>Home</Link>
          <Link className='App-link' to='/otherpage'>Other Page</Link>
        </header>
        <div>
          <Route exact path='/' component={Fib}></Route>
          <Route path='/otherpage' component={OtherPage}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
