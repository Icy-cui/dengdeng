import React, { Component } from 'react'
import LikeButton from './LikeButton.jsx';

export class MainPage extends Component {
  render() {
    return (
      <div>
          <LikeButton wording={{likedText: '已赞', unlikedText: '赞'}}/>
      </div>
    )
  }
}

export default MainPage