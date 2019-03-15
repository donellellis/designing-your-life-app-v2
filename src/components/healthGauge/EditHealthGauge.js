import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/health/edit'

class EditHealthGauge extends Component{
    constructor(){
        super()
        this.state = {
            level: '',
            assessment: ''
        }
        this.handleLevelChange = this.handleLevelChange.bind(this)
        this.handleAssessmentChange = this.handleAssessmentChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleLevelChange(event){
        this.setState({
            level: event.target.value
        })
    }

    handleAssessmentChange(event){
        this.setState({
            assessment: event.target.value
        })
    }


    handleSubmit(event){
        // sends a PUT request
        axios({
            method: 'put',
            url: backendBaseUrl + postEndpoint,
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
                level: this.state.level,
                assessment: this.state.assessment
            }
        })
        .then((res) => {
            if(res.status === 200){
                this.props.toggleIsHidden()
            }
        })
        event.preventDefault()
    }
    
    render(){
        return(
            <div className='complexGauge'>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                <h1>Health Gauge</h1>
                <label>
                    <h2>Health Level</h2>
                    <select className='gaugeLevel' value={this.state.level} onChange={this.handleLevelChange}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </label>
                <label>
                    <h2>Health Assessment</h2>
                    <input className='inputField' type='text' value={this.state.assessment} onChange={this.handleAssessmentChange}></input>
                </label>
                <input className='submitButton' type='submit' value='Save Edits' ></input>
                </form>
            </div>
        )
    }
}

export default EditHealthGauge

