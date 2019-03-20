import React, { Component } from 'react';
import logo from './logo.svg';
import {createStore} from 'redux';
import './App.css';




class App extends Component {
  render() {

    const reducer = (state=0, action) =>{
      switch (action.type) {
        case 'PLUS':
          return state+100;
        case 'MINUS':
          return state-100

        default:
          return state;
      }
    }

    const store = createStore(reducer);
    store.subscribe(()=>{
      console.log(store.getState());
    })

    store.dispatch({type:'PLUS'})
    store.dispatch({type:'PLUS'})
    store.dispatch({ type:'MINUS'})
    store.dispatch({ type:'MINUS'})
    store.dispatch({ type:'PLUS'})


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
