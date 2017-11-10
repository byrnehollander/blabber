import React, { Component } from 'react';
import CreateReviewSection from './CreateReviewSection';
import { Button } from 'antd';

const clicked = false;

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  renderTitle = () => {
    return (
      <div>
        <div className='username'>{this.props.user.username}</div>
        <div className='username'>{this.props.user.location}</div>
        <a className='username' style={{fontSize: 11}}>Report</a>
      </div>
    )
  }

  render() {
    if (this.state.open) {
    return (
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        <div style={{fontSize: 22}}>Review {this.props.eventTitle}</div>
        <div style={{paddingLeft: 40, paddingTop: 15}}>
          <CreateReviewSection title='Performer'/>
          <CreateReviewSection title='Venue'/>
          <CreateReviewSection title='Seats'/>
          <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '90%'}}>
            <Button type="primary">Create Review</Button>
            <a onClick={this.handleClick}>Nah, I don't want to write a review</a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{paddingTop: 30, paddingBottom: 15}}>
        <a style={{fontSize: 16}} onClick={this.handleClick}>Click to write a review for {this.props.eventTitle}</a>
      </div>
    )
  }
  }
}

export default CreateReview;
