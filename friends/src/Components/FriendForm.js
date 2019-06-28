import React, { Component } from 'react';


export default class FriendForm extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <form className="friend-form" onSubmit={this.props.saveFriend}>
    <input
     name='name'
     type="text"
     value={this.props.name}
     onChange={this.props.changeH}
     placeholder="name"
    />
    <input
     name='age'
     type="text"
     value={this.props.age}
     onChange={this.props.changeH}
     placeholder="age"
    />
    <input
     name='email'
     type="text"
     value={this.props.email}
     onChange={this.props.changeH}
     placeholder="email"
    />
    
    <button type="submit">Add</button>
    
   </form>
  )
 }

}
