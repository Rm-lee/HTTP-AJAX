import React from 'react';
import axios from 'axios'
import FriendList from './Components/FriendList'
import FriendForm from './Components/FriendForm'
import logo from './logo.svg';
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
  //form changehandler
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  //form submit handler- adds friend info from state to new obj and sends post request to server
  addFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
    axios.post('http://localhost:5000/friends', newFriend)
      .catch(err => {
        console.log('error:', err)
      })

  }

  render() {
    return (
      <div className="app">
        {this.state.friends.map(friend => (
          <FriendList key={friend.id} friends={friend} />
        ))}
        <FriendForm saveFriend={this.addFriend} changeH={this.changeHandler} />
      </div>
    )
  }
}