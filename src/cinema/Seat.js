import React, { Component } from 'react'
import {connect} from 'react-redux'
import { selectSeatAction } from '../redux/actions/CineTicketAction.js'

class Seat extends Component {
    renderSeat = () => {
        return this.props.seats.danhSachGhe.map((seat, index) => {
            let cssReserved = '';
            let disabled = false;
            // Reserved seat
            if (seat.daDat) {
                cssReserved = 'reserved-seat';
                disabled = true;
            }

            // Pending seat
            let cssSelectedSeat = '';
            let indexSelectedSeat = this.props.selectedList.findIndex(pendingSeat => pendingSeat.soGhe === seat.soGhe);
            if(indexSelectedSeat !== -1){
                cssSelectedSeat = 'selected-seat';
            }

            return <button onClick={() => {
                this.props.selectSeat(seat)
            }} disabled={disabled} className={`empty-seat ${cssReserved} ${cssSelectedSeat}`} key={index}>
                {seat.soGhe}
            </button>
        })
    }

    renderRowNumber = () => {
        return (
            this.props.seats.danhSachGhe.map((rowName, index) => {
                return (
                    <span className="rowNumber ml-5">
                        {rowName.soGhe}
                    </span>
                )
            })
        )

    }

    renderRow = () => {
        if (this.props.rowNumber === 0) {
            return (
                <div>
                    {this.props.seats.hang}
                    {this.renderRowNumber()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.seats.hang}
                    {this.renderSeat()}
                </div>
            )

        }

    }

    render() {
        return (
            <div className="seat-row text-left mt-1">
                {this.renderRow()}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        selectedList: state.CineTicketReducer.selectedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        selectSeat: (seat) =>{
            dispatch(selectSeatAction(seat))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Seat)

