import React from 'react';
import axios from 'axios';
import GithubCard from './components/GithubCard';

import './App.css';
import Search from './components/Search';
import Follower from './components/Follower';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'mannig1224',
      githubData: [],
      followers: []
    }
  }

  componentDidMount() {
    this.searchUser(this.state.currentUser);
  }

  searchFollowers = user => {
    axios.get(`https://api.github.com/users/${user}/followers`)
    .then(res => {
      console.log(res.data);
      this.setState({
        ...this.state,
        followers: res.data
      })
    })
  .catch(err => console.log(err))
  }

  searchUser = user => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({
          ...this.state,
          currentUser: user,
          githubData: res.data
        })
      })
    .catch(err => console.log(err))
    this.searchFollowers(user);
  }

  render() {
    return (
      <div className="App">
        <h1>{ `Current Github User: ${this.state.currentUser}`}</h1>
        <Search handleSearch={this.searchUser}/>
        <div className="user">
          <GithubCard githubData={this.state.githubData}/>
        </div>
        
        <h1>My Army of Followers!!!</h1>
        <div className="followers">
          {this.state.followers && this.state.followers.map((follower) => {
            return <Follower key={follower.id} follower={follower}/>
          })}
        </div>
      </div>
    )

  }
}

export default App;
