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
        this.handlePlayLevelChange = this.handlePlayLevelChange.bind(this)
        this.handlePlayAssessmentChange = this.handlePlayAssessmentChange.bind(this)
    }

    toggleIsHidden(isHidden){
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

    handlePlayLevelChange(level){
        this.setState({
            level
        })
    }

    handlePlayAssessmentChange(assessment){
        this.setState({
            assessment
        })
    }

    render(){
        return(
            <div>
                {!this.state.isHidden && <EditPlayGauge level ={this.state.level} assessment={this.state.assessment} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden} handlePlayLevelChange={this.handlePlayLevelChange} handlePlayAssessmentChange={this.handlePlayAssessmentChange}/>}
                {this.state.isHidden && <ShowPlayGauge level ={this.state.level} assessment={this.state.assessment} handlePlayGaugeChange={this.handlePlayGaugeChange} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden}/>}
            </div>
        )
    }
}

export default PlayGauge

