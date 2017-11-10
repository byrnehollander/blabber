import React, { Component } from 'react';
import CreateReviewSection from './CreateReviewSection';
import { Button } from 'antd';
import { Card } from 'antd';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import {base_url} from './App';

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      performerStars: 0,
      venueStars: 0,
      seatStars: 0,
      performerContent: '',
      venueContent: '',
      seatContent: ''
    };
  }

  createReview = () => {
    axios.post(`${base_url}/reviews/events/3935822`, {rating: this.state.performerStars, review_text: this.state.performerContent})
      .then((response) => {
        this.setState({open: false});
        const newReview = response;
        this.props.onCreation(newReview)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  renderTitle = () => {
    return (
      <div style={{width: '100%'}}>
        <div className='username'>{this.props.loggedInUser.username}</div>
        <div className='username'>{this.props.loggedInUser.location}</div>
      </div>
    )
  }

  renderProfilePicture = () => {
    return (
      <div style={{
        borderRadius: '50%',
        backgroundImage: `url('//i.imgur.com/cRJogDA.png')`,
        backgroundSize: 'cover',
        height: 100,
        width: 155
        }}
      />
    )
  }

  setPerformerStars = (nextValue, prevValue, name) => {
    this.setState({performerStars: nextValue})
  }

  setPerformerContent = event => {
    this.setState({ performerContent: event.target.value });
  }

  setVenueStars = (nextValue, prevValue, name) => {
    this.setState({venueStars: nextValue})
  }

  setVenueContent = event => {
    this.setState({ venueContent: event.target.value });
  }

  setSeatStars = (nextValue, prevValue, name) => {
    this.setState({seatStars: nextValue})
  }

  setSeatContent = event => {
    this.setState({ seatContent: event.target.value });
  }

  render() {
    if (this.state.open) {
    return (
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        <div style={{fontSize: 22}}>Review {this.props.eventTitle}</div>
        <div style={{paddingLeft: 40, paddingTop: 15}}>
          <CreateReviewSection title='Performer' setStars={this.setPerformerStars} numStars={this.state.performerStars} setContent={this.setPerformerContent} content={this.state.performerContent}/>
          <CreateReviewSection title='Venue' setStars={this.setVenueStars} numStars={this.state.venueStars} setContent={this.setVenueContent} content={this.state.venueContent}/>
          <CreateReviewSection title='Seats' setStars={this.setSeatStars} numStars={this.state.seatStars} setContent={this.setSeatContent} content={this.state.seatContent}/>
          <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '90%'}}>
            <Button onClick={() => this.createReview()} type="primary">Create Review</Button>
            <a onClick={this.handleClick}>Nah, I don't want to write a review</a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{paddingTop: 30, paddingBottom: 15}}>
        <Card style={{ width: '90%' }} onClick={this.handleClick}>
          <div style={{display: 'flex'}}>
            <div className="user-info" style={{width: 350}}>
              {this.renderProfilePicture()}
              {this.renderTitle()}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{fontSize: 30, paddingBottom: 10}}>
                <StarRatingComponent
                    name='empty'
                    value={0} // should be dynamic
                    starColor='#1673E6' /* color of selected icons, default `#ffb400` */
                    editing={false} /* is component available for editing, default `true` */
                    emptyStarColor='#bababa'
                />
              </div>
              <a style={{fontSize: 16}} >Click to write a review for {this.props.eventTitle}</a>
            </div>
          </div>
        </Card>
      </div>
    )
  }
  }
}

export default CreateReview;
