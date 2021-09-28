import React, { Component } from 'react';
import '../App.css';


export default class Follower extends Component {
    render() {
        const {follower} = this.props;
        return (
            <div className="card">
                <img src={follower.avatar_url} alt={follower.login}></img>
                <div className="container">
                    <h3>{follower.login}</h3>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        )
    }
}

