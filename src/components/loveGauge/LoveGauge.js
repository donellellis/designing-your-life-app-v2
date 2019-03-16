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
        this.handleLoveLevelChange = this.handleLoveLevelChange.bind(this)
        this.handleLoveAssessmentChange = this.handleLoveAssessmentChange.bind(this)
    }

    toggleIsHidden(isHidden){
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

    handleLoveLevelChange(level){
        this.setState({
            level
        })
    }

    handleLoveAssessmentChange(assessment){
        this.setState({
            assessment
        })
    }

    render(){
        return(
            <div>
                {!this.state.isHidden && <EditLoveGauge level ={this.state.level} assessment={this.state.assessment} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden} handleLoveLevelChange={this.handleLoveLevelChange} handleLoveAssessmentChange={this.handleLoveAssessmentChange}/>}
                {this.state.isHidden && <ShowLoveGauge level ={this.state.level} assessment={this.state.assessment} handleLoveGaugeChange={this.handleLoveGaugeChange} isHidden={this.state.isHidden} toggleIsHidden={this.toggleIsHidden}/>}
            </div>
        )
    }
}

export default LoveGauge

