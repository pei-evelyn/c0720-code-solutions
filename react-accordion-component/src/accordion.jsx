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
      view: this.props.name
    });
  }

  toggleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }));
  }

  render() {
    const view = this.props.view;
    const classHidden = view !== this.props.name ? 'hidden' : '';
    return (
      <>
        <h2 onClick={() => this.handleClick()}>{this.props.name}</h2>
        <p className={classHidden}>{this.props.content}</p>
      </>
    );
    // } else {
    //   return (
    //     <>
    //       <h2 onClick={() => this.handleClick()}>{this.props.name}</h2>
    //       <p className={this.state.isClicked ? '' : 'hidden'}>{this.props.content}</p>
    //     </>
    //   );
    // }

  }
}

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      view: ''
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
