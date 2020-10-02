import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'javascript'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // const element = event.target;
    if (this.state.view === 'html' ||
      this.state.view === 'css' ||
      this.state.view === 'javascript') {
      this.setState({
        view: 'closed'
      });
    }

    // console.log(element.props);
    // if (this.state.view === 'closed') {
    //   this.setState({
    //     view:
    //   })
    // }
  }

  render() {
    if (this.state.view === 'closed') {
      return (
        <>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="html">Hypertext Markup Language</h2>
          </div>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="css">Cascading Style Sheets</h2>
          </div>
          <div onClick={this.handleClick}>
            <h2 value="javascript">JavaScript</h2>
          </div>
        </>
      );
    }
    if (this.state.view === 'html') {
      return (
        <>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="html">Hypertext Markup Language</h2>
          </div>
          <div>
            <p className="border-bottom-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.
            </p>
          </div>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="css">Cascading Style Sheets</h2>
          </div>
          <div onClick={this.handleClick}>
            <h2 value="javascript">JavaScript</h2>
          </div>
        </>
      );
    }
    if (this.state.view === 'css') {
      return (
        <>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="html">Hypertext Markup Language</h2>
          </div>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="css">Cascading Style Sheets</h2>
          </div>
          <div>
            <p className="border-bottom-none">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.
            </p>
          </div>
          <div onClick={this.handleClick}>
            <h2 value="javascript">JavaScript</h2>
          </div>
        </>
      );
    }
    if (this.state.view === 'javascript') {
      return (
        <>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="html">Hypertext Markup Language</h2>
          </div>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="css">Cascading Style Sheets</h2>
          </div>
          <div onClick={this.handleClick}>
            <h2 className="border-bottom-none" value="javascript">JavaScript</h2>
          </div>
          <div>
            <p>
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
}

export default Accordian;
