import React, { Component } from 'react'

import ShowWorkGauge from './ShowWorkGauge'
import EditWorkGauge from './EditWorkGauge'

class WorkGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: '',
            isHidden: true,
        }
        this.toggleIsHidden = this.toggleIsHidden.bind(this)
        this.handleWorkGaugeChange = this.handleWorkGaugeChange.bind(this)
        this.handleWorkLevelChange = this.handleWorkLevelChange.bind(this)
        this.handleWorkAssessmentChange = this.handleWorkAssessmentChange.bind(this)
    }

    toggleIsHidden(isHidden){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleWorkGaugeChange(assessment, level){
        this.setState({
            assessment,
            level
        })
    }

    handleWorkLevelChange(level){
        this.setState({
            level
        })
    }

    handleWorkAssessmentChange(assessment){
        this.setState({
            assessment
        })
    }

    render(){
        return(
            <div>
                {!this.state.isHidden && <EditWorkGauge level ={this.state.level} assessment={this.state.assessment} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden} handleWorkLevelChange={this.handleWorkLevelChange} handleWorkAssessmentChange={this.handleWorkAssessmentChange}/>}
                {this.state.isHidden && <ShowWorkGauge level ={this.state.level} assessment={this.state.assessment} handleWorkGaugeChange={this.handleWorkGaugeChange} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden}/>}
            </div>
        )
    }
}

export default WorkGauge

