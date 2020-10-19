import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: null,
      pictures: []
    };
    // this.handleBackIconClick = this.handleBackIconClick.bind(this);
    // this.handleNextIconClick = this.handleNextIconClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      pictures: this.props.images
    });
  }

  setPictureId() {

  }

  // handleNextIconClick() {
  //   console.log('back');
  // }

  // handleBackIconClick() {
  //   console.log('next');
  // }

  render() {
    if (!this.state.pictureId) {
      return (
        <div className="carousel-container">
          <div className="img-row">
            <div className="col-icon left">
              <i className="fas fa-3x fa-angle-left" onClick={() => this.handleBackIconClick()}></i>
            </div>
            <div className="col-img">
              <img
                className="carousel-img"
                src="https://images.saymedia-content.com/.image/t_share/MTc0NDU3MDA2NTUwNDI3Mjcw/neko-atsume-character-profile-sunny.png"
                alt="" />
            </div>
            <div className="col-icon right">
              <i className="fas fa-3x fa-angle-right" onClick={() => this.handleNextIconClick()}></i>
            </div>
          </div>
          <div className="row">
            <div className="col circle-col">
              <div className="circle-outline"></div>
              <div className="circle-outline"></div>
              <div className="circle-outline"></div>
              <div className="circle-outline"></div>
              <div className="circle-outline"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Carousel;
