import React, { Component } from 'react';
import { Button } from 'antd';
import Review from './Review';
import Dropdown from './Dropdown';
import ImageCarousel from './ImageCarousel';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';

class App extends Component {
  render() {
    const averageReview = 4;
    const numReviews = 22;
    const venue = 'Madison Square Garden';
    // const options = ['All', 'Sports', 'Concerts'];
    const user =
      { username: 'bhollander',
        fullName: 'Byrne Hollander',
        location: 'New York, NY',
        facebookID: '10159489230130500'
    };
    const review =
    { content: `Hadn't been to **MSG** in years! What a difference from the last time I saw an event there.
    The seating is pretty great. The stage, floor is clearly visible from anywhere you are seated in the arena.
    They offer various food options including gluten free.
    They have lots of bars, refreshment stations, seating around bars and food and decent service.
    The best part is the seating and all of the TVs and monitors within the arena and visible to all attendees seated. The first row even include personal monitors for each and every seat.`,
      score: 4,
      date: '11/4/17',
      id: '123'
  };


    return (
      <div className="App">
          <h2 className="header">
            <StarRatingComponent
                name='average'
                value={averageReview} // should be dynamic
                starColor='#4449b4' /* color of selected icons, default `#ffb400` */
                editing={false} /* is component available for editing, default `true` */
            />
            <div className="review-count">{numReviews} reviews</div>
          </h2>
          <ImageCarousel />
          <div className="subheader">
        <h3 className="verified-reviews">Verified reviews for {venue}</h3>
        <div className="dropdowns">
          <div className="filter-text">Filter by</div>
          {/* <Button type="primary">Button</Button> */}
          <Dropdown />
        </div>
        <hr style={{marginTop: 20, width: '90%'}} />
        <div className="create-review">
          Create a review
        </div>
        <hr style={{marginTop: 20, width: '90%'}} />
        <div className="user-reviews">
          <Review
            user = {user}
            review = {review}
          />

        </div>
      </div>
    </div>
    );
  }
}

export default App;
