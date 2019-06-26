import React from 'react';
import axios from 'axios'
import FriendList from './Components/FriendList'
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
	state = {
		friends: []
 }
 
 componentDidMount(){

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

render(){
 return(
   <div>
   {this.state.friends.map( friend => (
     <FriendList key={friend.id} friends={friend} />
     
   ))}
  </div>
 )
}
}