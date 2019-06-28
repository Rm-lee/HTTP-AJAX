import React from 'react';
import { Route } from "react-router-dom"
import FriendList from './Components/FriendList'

import './App.css';


export default class App extends React.Component {
 
  

  render() {
    return (
      <div className="app">
      <header >
        <h2>My Friends</h2>
      </header>
        
          
          <Route path="/" exact render={(props) => <FriendList {...props}  />} />
         
      </div>
    )
  }
}
