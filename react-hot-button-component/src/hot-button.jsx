import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { clickCounter: state.clickCounter + 1 };
    });
  }

  render() {
    if (this.state.clickCounter <= 3) {
      return <button onClick={this.handleClick} className="font-white purple">Hot Button</button>;
    } else if (this.state.clickCounter <= 6) {
      return <button onClick={this.handleClick} className="font-white lavender">Hot Button</button>;
    } else if (this.state.clickCounter <= 9) {
      return <button onClick={this.handleClick} className="font-white pink">Hot Button</button>;
    } else if (this.state.clickCounter <= 12) {
      return <button onClick={this.handleClick} className="font-gray orange">Hot Button</button>;
    } else if (this.state.clickCounter <= 15) {
      return <button onClick={this.handleClick} className="font-gray yellow">Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className="font-gray white">Hot Button</button>;
    }
  }
}

export default HotButton;
