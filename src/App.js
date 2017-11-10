import React, { Component } from 'react';
import ReviewList from './ReviewList';
import CreateReview from './CreateReview';
import Dropdown from './Dropdown';
import DateDropdown from './DateDropdown';
import ImageCarousel from './ImageCarousel';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';

export const base_url = 'https://f4eaef13.ngrok.io';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      average: 0,
      numReviews: '...'
    };
  }

  componentDidMount = () => {
    axios.get(`${base_url}/reviews/performers/927`)
      .then((response) => {
        this.setState({data: response.data})
        var total = 0;
        response.data.map(function(rev) {
          total += rev.rating
        })
        const numReviews = response.data.length;
        var average = total / numReviews;
        this.setState({average, numReviews});

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

    const performer = 'Jay-Z';
    const loggedInUser =
      { username: 'Rufus Jones',
        location: 'Anywhere, USA'
      }

  const eventTitle = `Jay-Z on 8/30/17 at Madison Square Garden`
    return (
      <div className="App">
          <h2 className="header">
            <StarRatingComponent
                name='average'
                value={this.state.average} // should be dynamic
                starColor='#4449b4' /* color of selected icons, default `#ffb400` */
                editing={false} /* is component available for editing, default `true` */
                emptyStarColor='#bababa'
            />
            <div className="review-count">{this.state.numReviews} Verified Reviews</div>
          </h2>
          {/* <ImageCarousel
            first='http://cdn.cnn.com/cnnnext/dam/assets/170822114656-billy-joel-super-tease.jpg'
            second='http://img.wennermedia.com/480-width/rs-billy-joel-v2-f3fa0c59-2eed-4b00-a506-67a25449c3cf.jpg'
            third='http://img.wennermedia.com/social/rs-27559-20121204-billy-joel-1980-624x420-1354636750.jpg'
          /> */}
          <div className="subheader">

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
        {/* <hr style={{marginTop: 20, width: '90%'}} /> */}
        <div className="create-review">
          <CreateReview
            eventTitle={eventTitle}
            loggedInUser={loggedInUser}
          />
        </div>
        {/* <hr style={{marginTop: 20, width: '90%'}} /> */}
        <div className="user-reviews">
          <ReviewList
            reviewData={this.state.data}
           />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
