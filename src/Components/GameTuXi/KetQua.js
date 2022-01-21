import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div>
                <div className="game-warning text-center display-3 mt-5">{this.props.ketQua}</div>
                <div className="game-info text-center text-warning">
                    Matches Won: {this.props.soBanThang}
                </div>
                <div className="game-info text-center text-warning">
                    Match: {this.props.soLuotChoi}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ketQua: state.GameOanTuXiReducer.ketQua,
        soBanThang: state.GameOanTuXiReducer.soBanThang,
        soLuotChoi: state.GameOanTuXiReducer.soLuotChoi,

    }
    
}


export default connect(mapStateToProps)(KetQua)