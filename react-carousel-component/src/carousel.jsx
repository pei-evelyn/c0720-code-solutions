import React from 'react';

function Circles(props) {
  const circles = props.pictures.map((picture, index) => {
    return (
      <div
        key={index}
        className={props.currentIndex === index ? 'circle-outline filled' : 'circle-outline'}
        onClick={props.currentIndex < index ? props.handleNextIconClick : props.handleBackIconClick}
      ></div>
    );
  });
  return circles;
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      pictures: []
    };
    this.handleBackIconClick = this.handleBackIconClick.bind(this);
    this.handleNextIconClick = this.handleNextIconClick.bind(this);
    this.getPictureUrl = this.getPictureUrl.bind(this);
    this.startCounter = this.startCounter.bind(this);
    this.stopCounter = this.stopCounter.bind(this);
  }

  componentDidMount() {
    this.setState({
      pictures: this.props.images
    });
    this.startCounter();
  }

  getPictureUrl() {
    let imageUrl;
    for (let i = 0; i < this.state.pictures.length; i++) {
      if (this.state.currentIndex === i) {
        imageUrl = this.state.pictures[i];
      }
    }
    return imageUrl;
  }

  startCounter() {
    const intervalId = setInterval(this.handleNextIconClick, 3000);
    this.setState({
      intervalId: intervalId
    });
  }

  stopCounter() {
    clearInterval(this.state.intervalId);
  }

  handleNextIconClick() {
    this.stopCounter();
    const lastIndex = this.state.pictures.length - 1;
    this.setState(state => {
      if (state.currentIndex === lastIndex) {
        return { currentIndex: 0 };
      }
      return { currentIndex: state.currentIndex + 1 };
    });
    this.startCounter();
  }

  handleBackIconClick() {
    this.stopCounter();
    const lastIndex = this.state.pictures.length - 1;
    this.setState(state => {
      if (state.currentIndex === 0) {
        return { currentIndex: lastIndex };
      }
      return { currentIndex: state.currentIndex - 1 };
    });
    this.startCounter();
  }

  render() {
    return (
      <div className="carousel-container">
        <div className="img-row">
          <div className="col-icon left">
            <i className="fas fa-3x fa-angle-left" onClick={() => this.handleBackIconClick()}></i>
          </div>
          <div className="col-img">
            <img className="carousel-img" src={this.getPictureUrl()} />
          </div>
          <div className="col-icon right">
            <i className="fas fa-3x fa-angle-right" onClick={() => this.handleNextIconClick()}></i>
          </div>
        </div>
        <div className="row">
          <div className="col circle-col">
            <Circles
              pictures={this.state.pictures}
              currentIndex={this.state.currentIndex}
              handleBackIconClick={this.handleBackIconClick}
              handleNextIconClick={this.handleNextIconClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
