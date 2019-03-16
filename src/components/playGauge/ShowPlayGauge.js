import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/play/show'

class ShowPlayGauge extends Component{
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }

    handleToggleVisibility(){
        this.props.toggleIsHidden()
    }

    componentDidMount(){
        axios.get(backendBaseUrl + postEndpoint, {
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            }
        })
        .then((res) => {
            const playData = res.data
            // lifting state up to closest commom ancestor
            this.props.handlePlayGaugeChange(playData.assessment, playData.level)
        })
        .catch((err) => {
            console.log(err)
        })
    }
   
    render(){
        return(
        <div className='simpleGauge'>
            <h1>Play Gauge</h1>
            <h2>Play Level</h2>
            <h3>{this.props.level}</h3>
            <h2>Play Assessment</h2>
            <p>{this.props.assessment}</p>
            <button className='fas fa-pen' onClick={this.handleToggleVisibility} ></button>
        </div>
        )
    }
}

export default ShowPlayGauge

