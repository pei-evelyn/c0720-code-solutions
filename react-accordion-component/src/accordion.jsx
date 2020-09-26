import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <div>
          <h2 className="border-bottom-none">Hypertext Markup Language</h2>
        </div>
        <div>
          <h2 className="border-bottom-none">Cascading Style Sheets</h2>
        </div>
        <div>
          <h2>JavaScript</h2>
        </div>
      </>
    );
  }
}

export default Accordian;
