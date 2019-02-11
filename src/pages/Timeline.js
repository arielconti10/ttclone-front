import React, { Component } from 'react'

import twitterLogo from '../twitter.svg';
import './Timeline.css';

export default class Timeline extends Component {
  state={
    newTweet: ''
  }

  handleInputChange = e => {

  }

  handleNewTweet = e => {

  }
  

  render() {
    return (
      <div class="timeline-wrapper">
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
