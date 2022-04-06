import React, { Component } from 'react'

export class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            liked: !this.state.liked
        })
    }

  render() {
      const wording = this.props.wording || {likedText: '取消', unlikedText: '点赞'}
      
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.liked ? wording.likedText : wording.unlikedText}
        </button>
    )
  }
}

export default LikeButton