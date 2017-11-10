import React, { Component } from 'react';
import { Input } from 'antd';
import StarRatingComponent from 'react-star-rating-component';

const { TextArea } = Input;

class CreateReviewSection extends Component {
  render() {
    return (
      <div className='create-review-section'>
        <div className='create-review-header'>
          <div style={{paddingRight: 10}}>{this.props.title}</div>
          <StarRatingComponent
            name={this.props.title}
            value={0} // should be dynamic
            starColor='#4449b4' /* color of selected icons, default `#ffb400` */
            editing={true} /* is component available for editing, default `true` */
            onStarClick={this.props.setStars} /* on icon click handler */
          />
        </div>
        <TextArea rows={4} value={this.props.content} onChange={this.props.setContent} />
      </div>
    );
  }
}

export default CreateReviewSection;
