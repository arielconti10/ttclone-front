import React, { Component } from 'react'

import twitterLogo from '../twitter.svg';
import './Timeline.css';
import api from '../services/api';

export default class Timeline extends Component {
  state={
    newTweet: ''
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@gotwitter:username');
    
    await api.post('tweets', { content, author });

    this.setState({ newTweet: '' });
  }

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value })
  }
  

  render() {
    return (
      <div className="timeline-wrapper">
        <img src={twitterLogo} height="24" alt="GoTwitter"/>

        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}  
            placeholder="O que está acontecendo?"
          >

          </textarea>
        </form>

        <ul>

        </ul>
      </div>
    )
  }
}
