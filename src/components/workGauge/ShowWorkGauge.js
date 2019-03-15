import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/work/show'

class ShowWorkGauge extends Component{

    componentDidMount(){
        axios.get(backendBaseUrl + postEndpoint, {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            }
        })
        .then((res) => {
            const workData = res.data
            // lifting state up to closest commom ancestor
            this.props.handleWorkGaugeChange(workData.assessment, workData.level)
        })
        .catch((err) => {
            console.log(err)
        })
    }
   
    render(){
        return(
        <div className='complexGauge'>
            <h1>Work Gauge</h1>
            <h2>Work Level</h2>
            <h3>{this.props.level}</h3>
            <h2>Work Assessment</h2>
            <p>{this.props.assessment}</p>
            <button className='fas fa-pen' onClick={this.props.toggleIsHidden} ></button>
        </div>
        )
    }
}

export default ShowWorkGauge

