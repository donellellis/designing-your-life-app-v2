import React, { Component } from 'react'

class PlayGauge extends Component{
    render(){
        return(
            <div className='simpleGauge'>
                <h1>Play Gauge</h1>
                <label>
                    Play Level
                    <input className='inputField'></input>
                </label>
                <label>
                    Play Assessment
                    <input className='inputField'></input>
                </label>
            </div>
        )
    }
}

export default PlayGauge