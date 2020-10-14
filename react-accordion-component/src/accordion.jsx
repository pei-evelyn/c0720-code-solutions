import React from 'react';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      isClicked: false
    });
  }

  handleClick() {
    this.toggleClick();
    this.props.setView({
      view: {
        name: this.props.name,
        hidden: true
      }
    }
    );
  }

  toggleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    if (this.props.view.name === this.props.name) {
      return (
        <>
          <h2 onClick={() => this.handleClick()}>{this.props.name}</h2>
          <p className={this.state.isClicked ? '' : 'hidden'}>{this.props.content}</p>
        </>
      );
    }

    return (
      <>
        <h2 onClick={() => this.handleClick()}>{this.props.name}</h2>
        <p className={this.props.view.name !== this.props.name ? 'hidden' : ''}>{this.props.content}</p>
      </>
    );

  }
}

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      view: {
        name: '',
        hidden: true
      }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.setState({
      topics: this.props.topicList
    });
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  render() {
    if (this.state.topics.length) {
      const topicContianers = this.state.topics.map(topic =>
        <Topic
          key={topic.name}
          setView={this.setView}
          name={topic.name}
          content={topic.content}
          view={this.state.view}
        />
      );

      return (
        <>
          {topicContianers}
        </>
      );
    } else {
      return null;
    }
  }
}

export default Accordian;
