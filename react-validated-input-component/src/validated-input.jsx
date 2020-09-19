import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.pwPattern = /\w{8,}/;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    if (this.state.value.length === 0) {
      return (
        <>
          <form>
            <label>Password</label>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <span>
              <i className="fas fa-times red"></i>
            </span>
          </form>
          <div>
            <p className="status-msg red">A password is required.</p>
          </div>
        </>
      );
    } else if (this.state.value.length < 8) {
      return (
        <>
          <form>
            <label>Password</label>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <span>
              <i className="fas fa-times red"></i>
            </span>
          </form>
          <div>
            <p className="status-msg red">Your password is too short.</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <form>
            <label>Password</label>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <span>
              <i className="fas fa-check green"></i>
            </span>
          </form>
        </>
      );
    }
  }

}

export default ValidatedInput;
