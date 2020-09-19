import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      letterCounter: 0
    };
    this.pwPattern = /\w{8,}/;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      letterCounter: this.state.letterCounter + 1
    });
  }

  render() {
    if (this.state.letterCounter === 0) {
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
    } else if (this.state.letterCounter < 8) {
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
