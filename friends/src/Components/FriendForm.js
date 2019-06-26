import React, { Component } from 'react';


export default class FriendForm extends Component {
 constructor(props) {
  super(props);
 }

 render(){
  return(
  <Form onSubmit={props.saveFriend}>
   <input
     name='name'
     type="text"
     value={this.props.name}
     onChange={props.changeH}
     placeholder="name"
   />
    <input
     name='age'
     type="text"
     value={this.props.age}
     onChange={props.changeH}
     placeholder="age"
   />
    <input
     name='email'
     type="text"
     value={this.props.email}
     onChange={props.changeH}
     placeholder="email"
   />
  </Form>
  )
 }

}
