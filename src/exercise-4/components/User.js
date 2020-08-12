import React, { Component } from 'react';
import NotMatch from './NotMatch';
import { Route } from "react-router";


class User extends Component {
  render() {
    const userId = this.props.match.params.user;
    let result = /^\d+$/.test(userId);
    if(result){
      return <div>User profile page.</div>
    } else {
      return <Route component={NotMatch}></Route>
    }
  }
}
export default User;
