import React, { Component } from 'react'

import ShowHealthGauge from './ShowHealthGauge'
import EditHealthGauge from './EditHealthGauge'

class HealthGauge extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHidden: true
        }
        this.toggleIsHidden = this.toggleIsHidden.bind(this)
    }

    toggleIsHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render(){
        return(
        <div>
            {!this.state.isHidden && <EditHealthGauge toggleIsHidden={this.toggleIsHidden}/>}
            {this.state.isHidden && <ShowHealthGauge toggleIsHidden={this.toggleIsHidden}/>}
        </div>
        )
    }
}

export default HealthGauge

