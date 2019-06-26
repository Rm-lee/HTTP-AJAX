import React, { Component } from 'react';


export default class FriendList extends Component {
 constructor(props) {
  super(props);
 }
 //display friend names from props passed down
 render() {
  return (
   <div className="friend-list">
    {this.props.friends.name}
   </div>
  )
 }

}
