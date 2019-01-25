import React, { Component } from 'react';
import axios from 'axios';
import Gifs from '../Gifs';

export default class Search extends Component {
    state = {
        gif: [],
        search: " "
      }
    
    handleChange = ({ target: {name, value }}) => { this.setState({ [name]: value }) };
    
    handleSubmit = (e) => {
        e.preventDefault();
        let { gif, search } = this.state;
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=OcA9OeImWUvYzwIICTGl5yufd98dKNky`)
            .then(({ data }) => {
                debugger
                this.setState({ gif: data.data, search: "" })
            
                debugger
            })
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
            <Gifs gif={gif}/>
        </main>
    )
    }
}