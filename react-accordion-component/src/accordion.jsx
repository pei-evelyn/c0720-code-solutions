import React from 'react';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'hidden'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      status: ''
    });
  }

  render() {
    return (
      <>
        <div onClick={this.handleClick}>
          <h2>{this.props.topicName}</h2>
        </div>
        <div className={this.state.status}>
          <p>{this.props.topicContent}</p>
        </div>
      </>
    );
  }
}

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      topics: this.props.topicList
    });
  }

  // handleClick(event) {
  //   console.log(event);
  // }

  render() {
    if (this.state.topics.length > 0) {
      const topicContianers = this.state.topics.map(topic =>
        <Topic
          key={topic.id}
          topicName={topic.name}
          topicContent={topic.content}
          handleClick={this.handleClick}
          view={this.state.view}
        />
      );
      // console.log(topicContianers);
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
