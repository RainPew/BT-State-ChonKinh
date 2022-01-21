import React, { Component } from 'react';
import CineRow from './CineRow';
import CineInfo from './CineInfo'
import './CineTicket.css'


export default class CineTicket extends Component {
    render() {
        return (
            <div className="cinema">
                <div className="row">
                    <CineRow/>
                    <CineInfo/>
                    
                </div>  
            </div>
        )
    }
}
