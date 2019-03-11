import React, { Component } from 'react'

class WorkGauge extends Component{
    render(){
        return(
            <div className='simpleGauge'>
                <h1>Work Gauge</h1>
                <label>
                    Work Level
                    <input className='inputField'></input>
                </label>
                <label>
                    Work Assessment
                    <input className='inputField'></input>
                </label>
            </div>
        )
    }
}

export default WorkGauge