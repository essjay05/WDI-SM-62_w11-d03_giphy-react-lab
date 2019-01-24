import React, { Component } from 'react';

export default class Search extends Component {
    state = {
        gif: undefined,
        search: " "
      }
    
    handleChange = ({ target: {name, value }}) => { this.setState({ [name]: value }) };
    
    handleSubmit = (e) => {
        e.preventDefault();
        let {search } = this.state;
        debugger;
    }
    render () {
        let { gif, search } = this.state
    return (
        <main className = "container">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="search"
                    value={search}
                    onChange={this.handleChange}
                    className="form-control" 
                    id="searchGiphy" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter search term"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </main>
    )
    }
}