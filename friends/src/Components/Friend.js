import React, { Component } from 'react';


export default class Friend extends Component {
 constructor(props) {
  super(props);
 }
 //display friend names from props passed down
 render() {
  console.log(this.props)
  return (
   <div className="friend-list">
   
    <p>Name:<br/> {this.props.friend.name} </p>
    <p>Age: <br/> {this.props.friend.age}</p>
    <p>Email: <br/> {this.props.friend.email} </p>
   </div>
  )
 }

}
