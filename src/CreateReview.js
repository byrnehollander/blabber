import React, { Component } from 'react';
import CreateReviewSection from './CreateReviewSection';
import { Button } from 'antd';
import { Card } from 'antd';
import StarRatingComponent from 'react-star-rating-component';

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
        backgroundImage: `url('///www.eyerys.com/sites/default/files/mark_zuckerberg.jpg')`,
        backgroundSize: 'cover',
        height: 100,
        width: 155
        }}
      />
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
                    starColor='#4449b4' /* color of selected icons, default `#ffb400` */
                    editing={false} /* is component available for editing, default `true` */
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
