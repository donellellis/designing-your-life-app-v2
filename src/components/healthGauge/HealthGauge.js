import React, { Component } from 'react'

import ShowHealthGauge from './ShowHealthGauge'
import EditHealthGauge from './EditHealthGauge'

class HealthGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: '',
            isHidden: true
        }
        this.toggleIsHidden = this.toggleIsHidden.bind(this)
        this.handleHealthGaugeChange = this.handleHealthGaugeChange.bind(this)
        this.handleHealthLevelChange = this.handleHealthLevelChange.bind(this)
        this.handleHealthAssessmentChange = this.handleHealthAssessmentChange.bind(this)
    }

    toggleIsHidden(isHidden){
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

    handleHealthLevelChange(level){
        this.setState({
            level
        })
    }

    handleHealthAssessmentChange(assessment){
        this.setState({
            assessment
        })
    }

    render(){
        return(
            <div>
                {!this.state.isHidden && <EditHealthGauge level ={this.state.level} assessment={this.state.assessment} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden} handleHealthLevelChange={this.handleHealthLevelChange} handleHealthAssessmentChange={this.handleHealthAssessmentChange}/>}
                {this.state.isHidden && <ShowHealthGauge level ={this.state.level} assessment={this.state.assessment} handleHealthGaugeChange={this.handleHealthGaugeChange} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden}/>}
            </div>
        )
    }
}

export default HealthGauge

