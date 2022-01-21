import React, { Component } from 'react'
import {connect} from 'react-redux'
import { cancelSeatAction } from '../redux/actions/CineTicketAction'

class RowInfo extends Component {
    render() {
        return (
            <div className="row-info container col-4 py-5 my-5">
                <h2 className="text-center">confirmation</h2>
                <div className="mt-5 row">
                    <div className="col-4">
                        <button className="selected-seat"></button>
                        <span className="seat-info ml-2">Selected</span>
                    </div>
                    <div className="col-4">
                        <button className="reserved-seat"></button>
                        <span className="seat-info ml-2">Reserved</span>
                    </div>
                    <div className="col-4">
                        <button className="empty-seat"></button>
                        <span className="seat-info ml-2">Empty</span>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="table" border="2">
                        <thead>
                            <tr className="table-header">
                                <th>Seats</th>
                                <th>Price</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {this.props.selectedList.map((selectedSeat,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{selectedSeat.soGhe}</td>
                                        <td>{selectedSeat.gia.toLocaleString()}</td>
                                        <td><button onClick={() => {
                                            this.props.dispatch(cancelSeatAction(selectedSeat.seatNumber))
                                        }}>X</button></td>
                                    </tr>
                                ) 
                            })}
                        </tbody>
                        <tfoot className="table-foot">
                            <tr>
                                <td></td>
                                <td>Total</td>
                                <td>{this.props.selectedList.reduce((total,selectedSeat,index) => {
                                    return total += selectedSeat.gia;
                                },0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        selectedList:state.CineTicketReducer.selectedList
    }

}

export default connect (mapStateToProps)(RowInfo)