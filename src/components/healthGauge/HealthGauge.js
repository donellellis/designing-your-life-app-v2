import React, { Component } from 'react'

import ShowHealthGauge from './ShowHealthGauge'
import EditHealthGauge from './EditHealthGauge'

class HealthGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: '',
            isHidden: true,
        }
        this.toggleIsHidden = this.toggleIsHidden.bind(this)
        this.handleHealthGaugeChange = this.handleHealthGaugeChange.bind(this)
    }

    toggleIsHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleHealthGaugeChange(assessment, level){
        this.setState({
            assessment,
            level
        })
    }

    render(){
        return(
        <div>
            {!this.state.isHidden && <EditHealthGauge level ={this.state.level} assessment={this.state.assessment} toggleIsHidden={this.toggleIsHidden}/>}
            {this.state.isHidden && <ShowHealthGauge level ={this.state.level} assessment={this.state.assessment} handleHealthGaugeChange={this.handleHealthGaugeChange} toggleIsHidden={this.toggleIsHidden}/>}
        </div>
        )
    }
}

export default HealthGauge

