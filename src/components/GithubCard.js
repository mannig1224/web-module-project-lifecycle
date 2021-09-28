import React, { Component } from 'react';
import '../App.css';


export default class GithubCard extends Component {
    render() {
        const {githubData} = this.props;
        return (
            <div className="card">
                <img src={githubData.avatar_url} alt={githubData.name}></img>
                <div className="container">
                    <h3>{githubData.name}</h3>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        )
    }
}


