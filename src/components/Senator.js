import React, { Component } from 'react'


export default class extends Component {

    render(){
        const senator = this.props.senator
        return (
            <div>{senator.person.nickname ? senator.person.nickname : senator.person.firstname} {senator.person.lastname}</div>
        );
    }
}