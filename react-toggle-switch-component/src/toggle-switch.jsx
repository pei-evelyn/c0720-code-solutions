import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { isOn: !state.isOn };
    });
  }

  render() {
    if (this.state.isOn) {
      return (
        <div className="container" onClick={this.handleClick}>
          <div className="switch-base on-bg"></div>
          <div className="switch-top on-position"></div>
          <p className="text-position">ON</p>
        </div>
      );
    }
    return (
      <div className="container" onClick={this.handleClick}>
        <div className="switch-base off-bg"></div>
        <div className="switch-top"></div>
        <p className="text-position">OFF</p>
      </div>
    );
  }
}

export default ToggleSwitch;
