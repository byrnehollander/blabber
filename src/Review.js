import React, { Component } from 'react';
import { Card } from 'antd';
import marked from 'marked';
import StarRatingComponent from 'react-star-rating-component';
import ImageCarousel from './ImageCarousel';
import moment from 'moment';

class Review extends Component {
  renderTitle = () => {
    return (
      <div style={{width: 220}}>
        <div className='username'>{this.props.user.username}</div>
        <div className='username'>{this.props.user.location}</div>
        <a className='username' style={{fontSize: 11}}>Report</a>
      </div>
    )
  }

  setBackgroundImage = () => {
    if (this.props.user.images) {
      return `url('//${this.props.user.images.default}')`
    } else {
      return `url('//n6-img-fp.akamaized.net/free-icon/question-mark_318-139902.jpg?size=338&ext=jpg')`
    }
  }

  renderProfilePicture = () => {
    const bg = this.setBackgroundImage();
    return (
      <div style={{
        borderRadius: '50%',
        backgroundImage: bg,
        backgroundSize: 'cover',
        height: 100,
        width: 100
        }}
      />
    )
  }

  createMarkup = () => {
    return {__html: marked(this.props.review.review_text)}
  }

  render() {
    return (
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        <Card style={{ width: '90%' }}>
          <div style={{display: 'flex'}}>
            <div className="review-header">
              <div className="user-info">
                {this.renderProfilePicture()}
                {this.renderTitle()}
              </div>
            </div>
            <div className="review-body">
              <div className="top-line-review">
                <StarRatingComponent
                    // renderStarIcon={() => <span></span>} can make it so star is inside of a rounded rectangle
                    name={this.props.review.id}
                    value={this.props.review.rating} // should be dynamic
                    starColor='#4449b4' /* color of selected icons, default `#ffb400` */
                    editing={false} /* is component available for editing, default `true` */
                />
                <div style={{paddingLeft: 10}}>{moment(this.props.review.created_at).format('MMM Do YYYY')}</div>
              </div>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
          </div>
          {this.props.review.media ? (
            <ImageCarousel
              first={this.props.review.media.first}
              second={this.props.review.media.second}
              third={this.props.review.media.third}
            />
          ) : ('')}
        </Card>
      </div>
    );
  }
}

export default Review;
