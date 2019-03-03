import React from 'react';
import REact, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({users: data.results});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const list = this.state.users.map( (u, i) => {
        return <User key={u.login.md5} name={`${u.name.first} ${u.name.last}`} email={u.email} />;
    });
    return (
      <div>
        <h1>My users are:</h1>
        {list}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div style={{'borderStyle': 'dotted'}}>
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <UserProfiles />,
  document.getElementById('root')
);

export default App;