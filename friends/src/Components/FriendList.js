import React, { Component } from 'react';


export default class FriendList extends Component {
 constructor(props) {
  super(props);
 }

 render(){
  return(
   <div>
    {this.props.friends.name}
   </div>
  )
 }

}
