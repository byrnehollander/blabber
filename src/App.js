import React, { Component } from 'react';
import Review from './Review';
import CreateReview from './CreateReview';
import Dropdown from './Dropdown';
import DateDropdown from './DateDropdown';
import ImageCarousel from './ImageCarousel';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';

class App extends Component {
  render() {
    const averageReview = 4;
    const numReviews = 22;
    const venue = 'Billy Joel';
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
  const eventTitle = `Billy Joel on 8/30/17 at Madison Square Garden`
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
          <ImageCarousel
            first='http://cdn.cnn.com/cnnnext/dam/assets/170822114656-billy-joel-super-tease.jpg'
            second='http://img.wennermedia.com/480-width/rs-billy-joel-v2-f3fa0c59-2eed-4b00-a506-67a25449c3cf.jpg'
            third='http://img.wennermedia.com/social/rs-27559-20121204-billy-joel-1980-624x420-1354636750.jpg'
          />
          <div className="subheader">
        <h3 className="verified-reviews">Verified reviews for {venue}</h3>
        <div className="dropdowns">
          <div style={{display: 'flex'}}>
            <div className="filter-text">Filter by</div>
            <Dropdown />
          </div>
          <div style={{display: 'flex', paddingLeft: 30}}>
            <div className="filter-text">Only show reviews for events on</div>
            <DateDropdown />
          </div>
        </div>
        <hr style={{marginTop: 20, width: '90%'}} />
        <div className="create-review">
          <CreateReview
            eventTitle={eventTitle}
          />
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
