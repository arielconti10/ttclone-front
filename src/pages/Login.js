import React, { Component } from 'react'

import twitterLogo from '../twitter.svg';

import { Wrapper } from '../styles'; 

export default class Login extends Component {
  state = {
    username: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if(!username.length) return;

    localStorage.setItem('@gotwitter:username', username);

    this.props.history.push('/timeline');
  }

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <Wrapper>
          <img src={twitterLogo} alt="goTwitter"/>
          <form onSubmit={this.handleSubmit}>
            <input 
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Nome de usuário"
            />
            <button type="submit">Entrar</button>
          </form>
      </Wrapper>
      
    )
  }
}
