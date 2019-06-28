import React from 'react';
import { Route } from "react-router-dom"
import FriendList from './Components/FriendList'
import Friend from './Components/Friend'
import axios from 'axios'
import './App.css';


export default class App extends React.Component {
 
  state = {
    friends: [],
    name: '',
    age: '',
    email: ''
  }
  
  componentDidMount() {
    //server get request to load friend data to state
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data
        })
  
      })
      .catch(err => {
        console.log('error:', err)
      })
  }

  render() {
    return (
      <div className="app">
      <header >
        <h2>My Friends</h2>
      </header>
        
          
          <Route path="/" exact render={(props) => <FriendList {...props}  />} />
          <Route path="/friend/:id" render={(props) => <Friend {...props} friends={this.state.friends} />} />
      </div>
    )
  }
}
