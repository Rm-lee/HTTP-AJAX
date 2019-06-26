import React, { Component } from 'react';


export default class FriendList extends Component {
 constructor(props) {
  super(props);
 }
 //display friend names from props passed down
 render() {
  return (
   <div className="friend-list">
    <p>{this.props.friends.name} </p>
    <p>{this.props.friends.age}</p>
    <p>{this.props.friends.email} </p>
   </div>
  )
 }

}
