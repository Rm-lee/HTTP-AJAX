import React, { Component } from 'react';


export default class Friend extends Component {
 constructor(props) {
  super(props);
 }
 
 //display friend names from props passed down
 render() {
  
  console.log(this.props.friends)
  const friend = this.props.friends.find(friend => String(friend.id) === this.props.match.params.id)
  if (!friend) {
   return <div>Loading...</div>
  }
  return (
   <div className="friend-list">
   
    <p>Name:<br/> {friend.name} </p>
    <p>Age: <br/> {friend.age}</p>
    <p>Email: <br/> {friend.email} </p>
   </div>
  )
 }

}
