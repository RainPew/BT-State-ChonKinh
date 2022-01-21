import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top:-50px;}
            25% {top:100px;}
            50% {top:-50px;}
            75% {top:100px;}            
            100% {top:0px;}
        }`
        return (
            <div className="computer text-center py-5">
                <style>
                    {keyframe}
                </style>
                <div className="speech-content" style={{position:'relative'}}>
                <img style={{position:'absolute', left:'30%', animation:`randomItem${Date.now()} 0.5s`,width:'75px', height:'75px'}} className="mt-2" src={this.props.computer.hinhAnh} alt="..." /> 
                </div>
                <div className="speech-bubble"></div>
                <img className="mt-3" style={{ width: 200, height: 200}} src="./imgMarvel/playerComputer.png" alt />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        computer: state.GameOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)
