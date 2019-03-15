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
    }

    toggleIsHidden(){
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

    render(){
        return(
        <div>
            {!this.state.isHidden && <EditWorkGauge level ={this.state.level} assessment={this.state.assessment} toggleIsHidden={this.toggleIsHidden}/>}
            {this.state.isHidden && <ShowWorkGauge level ={this.state.level} assessment={this.state.assessment} handleWorkGaugeChange={this.handleWorkGaugeChange} toggleIsHidden={this.toggleIsHidden}/>}
        </div>
        )
    }
}

export default WorkGauge

