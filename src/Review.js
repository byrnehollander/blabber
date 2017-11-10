import React, { Component } from 'react';
import { Card } from 'antd';
import marked from 'marked';
import StarRatingComponent from 'react-star-rating-component';

class Review extends Component {
  renderTitle = () => {
    return (
      <div>
        <div className='username'>{this.props.user.username}</div>
        <div className='username'>{this.props.user.location}</div>
        <a className='username' style={{fontSize: 11}}>Report</a>
      </div>
    )
  }

  renderProfilePicture = () => {
    return (
      <div style={{
        borderRadius: '50%',
        backgroundImage: `url('//graph.facebook.com/${this.props.user.facebookID}/picture?type=large&return_ssl_resources=1')`,
        backgroundSize: 'cover',
        height: 100,
        width: 100
        }}
      />
    )
  }

  createMarkup = () => {
    return {__html: marked(this.props.review.content)}
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
                    name={this.props.review.id}
                    value={this.props.review.score} // should be dynamic
                    starColor='#4449b4' /* color of selected icons, default `#ffb400` */
                    editing={false} /* is component available for editing, default `true` */
                />
                <div style={{paddingLeft: 10}}>{this.props.review.date}</div>
              </div>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Review;
