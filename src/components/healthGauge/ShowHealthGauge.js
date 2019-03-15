import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/health/show'

class ShowHealthGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: ''
        }
    }

    componentDidMount(){
        axios.get(backendBaseUrl + postEndpoint, {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            }
        })
        .then((res) => {
            const healthData = res.data
            this.setState({
                level: healthData.level,
                assessment: healthData.assessment
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
   
    render(){
        return(
        <div className='complexGauge'>
            <h1>Health Gauge</h1>
            <h2>Health Level</h2>
            <h3>{this.state.level}</h3>
            <h2>Health Assessment</h2>
            <p>{this.state.assessment}</p>
            <button className='fas fa-pen' onClick={this.props.toggleIsHidden}></button>
        </div>
        )
    }
}

export default ShowHealthGauge

