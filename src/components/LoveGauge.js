import React, { Component } from 'react'

class LoveGauge extends Component{
    render(){
        return(
            <div className='simpleGauge'>
                <h1>Love Gauge</h1>
                <label>
                    Love Level
                    <input className='inputField'></input>
                </label>
                <label>
                    Love Assessment
                    <input className='inputField'></input>
                </label>
            </div>
        )
    }
}

export default LoveGauge