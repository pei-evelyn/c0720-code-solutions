import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      buttonType: 'play'
    };
    this.counting = this.counting.bind(this);
    this.beginCounter = this.beginCounter.bind(this);
    this.pauseCounter = this.pauseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  counting() {
    this.intervalID = setInterval(
      this.beginCounter, 1000
    );
  }

  beginCounter() {
    this.setState(state => {
      return ({
        counter: state.counter + 1,
        buttonType: 'pause'
      });
    });
  }

  pauseCounter() {
    clearInterval(this.intervalID);
    this.setState(state => {
      return ({
        counter: state.counter,
        buttonType: 'play'
      });
    });
  }

  resetCounter() {
    this.setState({
      counter: 0,
      buttonType: 'play'
    });
  }

  render() {
    if (this.state.buttonType === 'play' && this.state.counter > 0) {
      return (
        <>
          <div className="stopwatch-outline" onClick={this.resetCounter}>
            <span>{this.state.counter}</span>
          </div>
          <i className={`fas fa-${this.state.buttonType}`} onClick={this.counting}></i>
        </>
      );
    } else if (this.state.buttonType === 'pause' && this.state.counter > 0) {
      return (
        <>
          <div className="stopwatch-outline">
            <span>{this.state.counter}</span>
          </div>
          <i className={`fas fa-${this.state.buttonType}`} onClick={this.pauseCounter}></i>
        </>
      );
    } else {
      return (
        <>
          <div className="stopwatch-outline" >
            <span>{this.state.counter}</span>
          </div>
          <i className={`fas fa-${this.state.buttonType}`} onClick={this.counting}></i>
        </>
      );
    }
  }
}

ReactDOM.render(
  <StopWatch />,
  document.querySelector('#root')
);
