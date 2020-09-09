import React, { Component } from 'react';
import './Accordian.css'
export default class Accordian extends Component {
    state = {
        sections: this.props.sections,
        indexOpen: null
    }
    handleShowContent = (index) => {
        if(index === this.state.indexOpen){
            //this closes the tab if it was open
            this.setState({
                indexOpen: null
            })
        }else{
            //this opens a new tab
            this.setState({
                indexOpen: index
            })
        }
    }
    render() {
        const tabs = this.props.sections.map((tab, index) => {
            return <li key={index}>
                <button onClick={() => this.handleShowContent(index)}>{tab.title}</button>
                {this.state.indexOpen === index && <p>{tab.content}</p>}
            </li>
        })
        return (
            <ul>
                {tabs}
            </ul>
        );
    }
}