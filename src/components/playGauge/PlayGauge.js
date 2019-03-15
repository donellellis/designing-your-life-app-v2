import React, { Component } from 'react'

import ShowPlayGauge from './ShowPlayGauge'
import EditPlayGauge from './EditPlayGauge'

class PlayGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: '',
            isHidden: true,
        }
        this.toggleIsHidden = this.toggleIsHidden.bind(this)
        this.handlePlayGaugeChange = this.handlePlayGaugeChange.bind(this)
    }

    toggleIsHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handlePlayGaugeChange(assessment, level){
        this.setState({
            assessment,
            level
        })
    }

    render(){
        return(
        <div>
            {!this.state.isHidden && <EditPlayGauge level ={this.state.level} assessment={this.state.assessment} toggleIsHidden={this.toggleIsHidden}/>}
            {this.state.isHidden && <ShowPlayGauge level ={this.state.level} assessment={this.state.assessment} handlePlayGaugeChange={this.handlePlayGaugeChange} toggleIsHidden={this.toggleIsHidden}/>}
        </div>
        )
    }
}

export default PlayGauge

