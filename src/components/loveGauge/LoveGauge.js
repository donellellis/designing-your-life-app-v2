import React, { Component } from 'react'

import ShowLoveGauge from './ShowLoveGauge'
import EditLoveGauge from './EditLoveGauge'

class LoveGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: '',
            isHidden: true,
        }
        this.toggleIsHidden = this.toggleIsHidden.bind(this)
        this.handleLoveGaugeChange = this.handleLoveGaugeChange.bind(this)
    }

    toggleIsHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleLoveGaugeChange(assessment, level){
        this.setState({
            assessment,
            level
        })
    }

    render(){
        return(
        <div>
            {!this.state.isHidden && <EditLoveGauge level ={this.state.level} assessment={this.state.assessment} toggleIsHidden={this.toggleIsHidden}/>}
            {this.state.isHidden && <ShowLoveGauge level ={this.state.level} assessment={this.state.assessment} handleLoveGaugeChange={this.handleLoveGaugeChange} toggleIsHidden={this.toggleIsHidden}/>}
        </div>
        )
    }
}

export default LoveGauge

