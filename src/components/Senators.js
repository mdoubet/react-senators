import React, { Component } from 'react'
import senators from '../data/senators'
import Senator from './Senator'
import Senatorsearcher from './Senatorsearcher'

export default class extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);


        this.state = {ssValue: ''}
    }

    handleSearch(event){
        this.setState({ssValue: event.target.value});
    }



    renderSenators(){
        return (

            senators.filter((senator) => { return (
                senator.person.firstname.toLowerCase().match(this.state.ssValue.toLowerCase()) ||
                senator.person.lastname.toLowerCase().match(this.state.ssValue.toLowerCase()) ||
                senator.person.nickname.toLowerCase().match(this.state.ssValue.toLowerCase())
            )
            })
                .map(senator =>
                 <Senator senator={senator}/>

            //     {/**/}
            )
        )
    }

    render(){
        const senators = this.renderSenators();
        return (
            <div>
                <div>
                    <Senatorsearcher value = { this.state.ssValue }  onChange = {this.handleSearch}/>
                </div>
                <div>
                {senators}
                </div>
            </div>
        );
    }
}
