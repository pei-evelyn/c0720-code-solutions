import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuHidden: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isMenuHidden: !state.isMenuHidden }));
  }

  render() {
    if (this.state.isMenuHidden) {
      return (
        <>
          <i className="fas fa-bars" onClick={this.handleClick}></i>
        </>
      );
    }

    return (
      <>
        <div className="shade" onClick={this.handleClick}></div>
        <div className="menu">
          <h2>Menu</h2>
          <ul>
            <li onClick={this.handleClick}>
              <a>About</a>
            </li>
            <li onClick={this.handleClick}>
              <a>Get Started</a>
            </li>
            <li onClick={this.handleClick}>
              <a>Sign In</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default AppDrawer;
