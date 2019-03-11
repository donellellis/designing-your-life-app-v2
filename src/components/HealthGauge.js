import React, { Component } from 'react'

class HealthGauge extends Component{
    render(){
        return(
            <div className='complexGauge'>
                <h1>Health Gauge</h1>
                <label>
                    Health Level
                    <input className='inputField'></input>
                </label>
                <label>
                    Health Assessment
                    <input className='inputField'></input>
                </label>
            </div>
        )
    }
}

export default HealthGauge