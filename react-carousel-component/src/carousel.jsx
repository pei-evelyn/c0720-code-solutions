import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: null
    };
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="img-row">
          <div className="col-icon left">
            <i className="fas fa-3x fa-angle-left"></i>
          </div>
          <div className="col-img">
            <img
              className="carousel-img"
              src="https://images.saymedia-content.com/.image/t_share/MTc0NDU3MDA2NTUwNDI3Mjcw/neko-atsume-character-profile-sunny.png"
              alt="" />
          </div>
          <div className="col-icon right">
            <i className="fas fa-3x fa-angle-right"></i>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
