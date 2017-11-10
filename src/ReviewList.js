import React, { Component } from 'react';
import Review from './Review';

class ReviewList extends Component {

  renderReviews = () => {
    return this.props.reviewData.map(function(rev) {
      return <Review user={rev.user} review={rev} key={rev.id} />;
    })
  }


  render() {
    return (
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        {this.renderReviews()}
      </div>
    );
  }
}

export default ReviewList;
