import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
      htmlDisplay: 'hidden',
      cssDisplay: 'hidden',
      jsDisplay: 'hidden'
    };
    this.handleHtmlClick = this.handleHtmlClick.bind(this);
    this.handleCssClick = this.handleCssClick.bind(this);
    this.handleJsClick = this.handleJsClick.bind(this);
  }

  handleHtmlClick() {
    if (!this.state.isClosed) {
      this.setState(state => {
        return {
          isClosed: !state.isClosed,
          htmlDisplay: 'hidden',
          cssDisplay: 'hidden',
          jsDisplay: 'hidden'
        };
      });
    }

    if (this.state.isClosed) {
      this.setState(state => {
        return {
          isClosed: !state.isClosed,
          htmlDisplay: '',
          cssDisplay: 'hidden',
          jsDisplay: 'hidden'
        };
      });
    }
  }

  handleCssClick() {
    if (!this.state.isClosed) {
      this.setState(state => {
        return {
          isClosed: !state.isClosed,
          htmlDisplay: 'hidden',
          cssDisplay: 'hidden',
          jsDisplay: 'hidden'
        };
      });
    }

    if (this.state.isClosed) {
      this.setState(state => {
        return {
          isClosed: !state.isClosed,
          cssDisplay: '',
          htmlDisplay: 'hidden',
          jsDisplay: 'hidden'
        };
      });
    }
  }

  handleJsClick() {
    if (!this.state.isClosed) {
      this.setState(state => {
        return {
          isClosed: !state.isClosed,
          htmlDisplay: 'hidden',
          cssDisplay: 'hidden',
          jsDisplay: 'hidden'
        };
      });
    }

    if (this.state.isClosed) {
      this.setState(state => {
        return {
          isClosed: !state.isClosed,
          jsDisplay: '',
          htmlDisplay: 'hidden',
          cssDisplay: 'hidden'
        };
      });
    }
  }

  render() {
    return (
      <>
        <div onClick={this.handleHtmlClick}>
          <h2 className="border-bottom-none" view="html">Hypertext Markup Language</h2>
        </div>
        <div className={this.state.htmlDisplay}>
          <p className="border-bottom-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.
          </p>
        </div>
        <div onClick={this.handleCssClick}>
          <h2 className="border-bottom-none" view="css">Cascading Style Sheets</h2>
        </div>
        <div className={this.state.cssDisplay}>
          <p className="border-bottom-none">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
            velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
            suscipit eveniet libero aliquam et tempora at reprehenderit cum,
            eligendi tenetur.
          </p>
        </div>
        <div onClick={this.handleJsClick}>
          <h2 view="javascript">JavaScript</h2>
        </div>
        <div className={this.state.jsDisplay}>
          <p className="top-border-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.
          </p>
        </div>
      </>
    );
  }
}

export default Accordian;
