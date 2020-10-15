import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(state => {
      if (id === state.openId) {
        return { openId: null };
      }
      return { openId: id };
    });
  }

  render() {

    const topicContianers = this.props.topics.map(topic =>
      <div key={topic.id}>
        <h2 onClick={() => this.handleClick(topic.id)}>{topic.name}</h2>
        <p className={this.state.openId === topic.id ? '' : 'hidden'}>{topic.content}</p>
      </div>
    );

    return (
      <>
        {topicContianers}
      </>
    );
  }
}
export default Accordian;
