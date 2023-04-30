import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import {formatDistanceToNow} from 'date-fns'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Components extends Component {
  state = {commentsList: [], nameInput: '', commentInput: ''}

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeName = event => {}

  onChangeComment = event => {}

  render() {
    return (
      <div className="app-container">
        <div className="container">
          <form className="inputs-container" onSubmit={this.onAddComment}>
            <h1 className="heading">Comments</h1>
            <label htmlFor="name" className="line">
              Say something about 4.0 Technologies
            </label>
            <input
              placeholder="Your Name"
              className="input"
              id="name"
              type="text"
              onChange={this.onChangeName}
            />
            <textarea
              className="input"
              placeholder="Your Comment"
              rows="10"
              cols="45"
              onChange={this.onChangeComment}
            />
            <button type="button" className="add-comment">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments"
            alt="comments"
          />
        </div>
        <hr width="70%" />
        <ul className="comments-container">{comment}</ul>
      </div>
    )
  }
}

export default Components
