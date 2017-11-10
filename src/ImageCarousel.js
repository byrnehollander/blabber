import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';

class ImageCarousel extends Component {
  render() {
    return (
      <div className="image-carousel-container">
        <Carousel>
          {/* autoplay */}
          <div><h3><img src="http://cdn.cnn.com/cnnnext/dam/assets/170822114656-billy-joel-super-tease.jpg" /></h3></div>
          <div><h3><img src="http://img.wennermedia.com/480-width/rs-billy-joel-v2-f3fa0c59-2eed-4b00-a506-67a25449c3cf.jpg" /></h3></div>
          <div><h3><img src="http://img.wennermedia.com/social/rs-27559-20121204-billy-joel-1980-624x420-1354636750.jpg" /></h3></div>
       </Carousel>
     </div>
   );
  }
}

export default ImageCarousel;
