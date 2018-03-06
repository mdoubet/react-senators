import React, { Component } from 'react';

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {searchText: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.onChange(event);
    }
    handleSubmit(event){

    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Find Senator:
                    <input type="text" value={this.props.ssValue} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}