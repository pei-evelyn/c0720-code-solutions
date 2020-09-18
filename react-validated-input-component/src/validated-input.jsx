import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      letterCounter: 0
    };
    this.iIcon = 'times';
    this.iColor = 'red';
    this.statusMsgClass = 'red';
    this.statusMsgContent = 'A password is required.';
    this.pwPattern = /\w{8,}/;
    this.handleChange = this.handleChange.bind(this);
    this.pwDoesntPass = this.pwDoesntPass.bind(this);
    this.pwPasses = this.pwPasses.bind(this);
  }

  handleChange(event) {

    if (this.pwPattern.test(this.state.value)) {
      this.pwPasses();
      this.setState({
        value: event.target.value,
        letterCounter: this.state.letterCounter + 1
      });
    } else {
      this.pwDoesntPass();
      this.setState({
        value: event.target.value,
        letterCounter: this.state.letterCounter + 1
      });
    }
  }

  pwDoesntPass() {
    this.iIcon = 'times';
    this.iColor = 'red';
    this.statusMsgClass = 'red';
    this.statusMsgContent = 'Your password is too short.';
  }

  pwPasses() {
    this.iIcon = 'check';
    this.iColor = 'green';
    this.statusMsgClass = 'hidden';
  }

  render() {
    return (
      <>
        <form>
          <label>Password</label>
          <input type="password" value={this.state.value} onChange={this.handleChange}/>
          <span>
            <i className={`fas fa-${this.iIcon} ${this.iColor}`}></i>
          </span>
        </form>
        <div>
          <p className={`status-msg ${this.statusMsgClass}`}>{this.statusMsgContent}</p>
        </div>
      </>
    );
  }

}

export default ValidatedInput;
