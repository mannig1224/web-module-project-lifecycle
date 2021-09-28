import React, { Component } from 'react'

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            user: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.user);
        this.setState({
            ...this.state,
            user: ''
        })
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.user}
                        type='text'
                    />
                    <button>Search Github User</button>
                </form>    
            </div>
        )
    }
}
