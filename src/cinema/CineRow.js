import React, { Component } from 'react'
import seatRowData from '../data/data.json'
import Seat from './Seat'


export default class CineRow extends Component {
    renderSeatRow = () => {
        return seatRowData.map((seat,index) => {
            return(
                <div key={index}>
                    <Seat seats={seat} rowNumber={index}/>

                </div>
            ) 
        })
    }

    

    render() {
        return (
            <div className="cine-row container col-7 py-5 my-5 text-center">
                <h2>MOVIE TICKET BOOKING</h2>
                <div className="screen my-5">
                    <span className="screen-text">SCREEN</span>
                </div>
                {this.renderSeatRow()}
            </div>
        )
    }
}
