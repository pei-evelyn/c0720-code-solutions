import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(usersList => this.setState({
        users: usersList,
        isLoading: false
      }))
      .catch(err => {
        console.error(err);
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else if (!this.state.isLoading && this.state.users.length !== 0) {
      return <UserList users={this.state.users}/>;
    } else {
      return <p>Error with your request.</p>;
    }
  }
}

export default App;
