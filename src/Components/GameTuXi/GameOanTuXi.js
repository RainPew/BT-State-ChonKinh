import React, { Component } from 'react'
import Computer from './Computer'
import './GameOanTuXi.css'
import KetQua from './KetQua'
import Player from './Player'
import { connect } from 'react-redux'

class GameOanTuXi extends Component {
    render() {
        return (
            <div className="game">
                <div className="row">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4 text-center">
                        <KetQua />
                        <button className="btn btn-warning display-4" onClick={() => {
                            this.props.playGame()
                        }}>Play Game</button>

                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count++
                if (count > 10) {
                    clearInterval(randomComputerItem)
                }
            },100)

            dispatch({
                type: 'KET_QUA',
            })

        }
    }
}

export default connect(null, mapDispatchToProps)(GameOanTuXi)



