import React from 'react';

function Circles(props) {
  const circles = props.pictures.map(picture => {
    const id = picture.id;
    return (
      <div
        key={picture.id}
        className={props.pictureId === id ? 'circle-outline filled' : 'circle-outline'}
      ></div>
    );
  });
  return circles;
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureId: 1,
      pictures: []
    };
    this.handleBackIconClick = this.handleBackIconClick.bind(this);
    this.handleNextIconClick = this.handleNextIconClick.bind(this);
    this.getPictureUrl = this.getPictureUrl.bind(this);
    this.startCounter = this.startCounter.bind(this);
  }

  componentDidMount() {
    this.setState({
      pictures: this.props.images
    });
    this.startCounter();
  }

  getPictureUrl() {
    let result;
    for (let i = 0; i < this.state.pictures.length; i++) {
      if (this.state.pictureId === this.state.pictures[i].id) {
        result = this.state.pictures[i].imageUrl;
      }
    }
    return result;
  }

  startCounter() {
    setInterval(this.handleNextIconClick, 3000);
  }

  handleNextIconClick() {
    const length = this.state.pictures.length;
    this.setState(state => {
      if (state.pictureId === length) {
        const id = 1;
        return { pictureId: id };
      }
      return { pictureId: state.pictureId + 1 };
    });
  }

  handleBackIconClick() {
    const length = this.state.pictures.length;
    this.setState(state => {
      if (state.pictureId === 1) {
        const id = length;
        return { pictureId: id };
      }
      return { pictureId: state.pictureId - 1 };
    });
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
            <Circles pictures={this.state.pictures} pictureId={this.state.pictureId}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
