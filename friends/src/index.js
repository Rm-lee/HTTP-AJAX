import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom"
import FriendList from './Components/FriendList'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
	state = {
		friends: []
 }
 
 componentDidMount(){

  axios.get('http://localhost:5000')
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
  <FriendList friends={this.state.friends} />
 )
}
}

ReactDOM.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>, 
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
