import React from 'react';
import axios from 'axios'
import FriendList from './Components/FriendList'
import FriendForm from './Components/FriendForm'
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
	state = {
    friends: [],
    name: '',
    age: '',
    email: ''
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
 changeHandler = e =>{
  this.setState({ [e.target.name]: event.target.value})
 }

render(){
 return(
   <div>
   {this.state.friends.map( friend => (
     <FriendList key={friend.id} changeH={changeHandler}friends={friend} />
   ))}
   <FriendForm />
  </div>
 )
}
}