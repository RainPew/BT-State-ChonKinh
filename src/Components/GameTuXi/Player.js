import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="player text-center py-5">
                <div className="speech-content">
                    <img className="mt-2" style={{ width: '75px', height: '75px'}} src={this.props.mangCuoc.find(item=>item.datCuoc == true).hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img className="mt-3" style={{ width: 200, height: 200 }} src="./imgMarvel/player.png" alt='' />

                <div className="row">
                    {this.props.mangCuoc.map((item, index) => {
                        // thêm viền cho item được chọn
                        let border = {};
                        if(item.datCuoc){
                            border = {border: '5px solid #34eba5'}
                        }

                        return <div className="col-4">
                            <button style={border} className="game-item" onClick={() => {
                                this.props.datCuoc(item.ma)
                            }}>
                                <img style={{ width: '50px', height: '50px' }} src={item.hinhAnh} alt="" />
                            </button>
                        </div>
                    })}
                </div>
            </div>

        )
    }
}

const mapStateToProp = state => {
    return {
        mangCuoc: state.GameOanTuXiReducer.mangCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return{
        datCuoc: (maCuoc) =>{
            dispatch({
                type: 'CHON_LOAI',
                maCuoc
            })

        }

    }
}

export default connect(mapStateToProp,mapDispatchToProps)(Player)
