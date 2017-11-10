import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';

class ImageCarousel extends Component {
  render() {
    return (
      <div className="image-carousel-container">
        <Carousel>
          {/* autoplay */}
          <div><h3><img src={this.props.first} /></h3></div>
          <div><h3><img src={this.props.second} /></h3></div>
          <div><h3><img src={this.props.third} /></h3></div>
       </Carousel>
     </div>
   );
  }
}

export default ImageCarousel;
