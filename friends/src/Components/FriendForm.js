import React, { Component } from 'react';


export default class FriendList extends Component {
 constructor(props) {
  super(props);
 }

 render(){
  return(
  <Form onSubmit={props.saveFriend}>
   <input
     type="text"
     value=''
     onChange={props.changeHandler}
     placeholder="name"
   />
    <input
     type="text"
     value=''
     onChange={props.changeHandler}
     placeholder="age"
   />
    <input
     type="text"
     value=''
     onChange={props.changeHandler}
     placeholder="email"
   />
  </Form>
  )
 }

}
