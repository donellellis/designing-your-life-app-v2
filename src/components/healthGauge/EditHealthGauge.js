import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/health/edit'

class EditHealthGauge extends Component{
    constructor(props){
        super(props)
        this.handleLevelChange = this.handleLevelChange.bind(this)
        this.handleAssessmentChange = this.handleAssessmentChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }
    
    handleLevelChange(event){
        this.props.handleHealthLevelChange(event.target.value)
    }

    handleAssessmentChange(event){
        this.props.handleHealthAssessmentChange(event.target.value)
    }

    handleToggleVisibility(){
        this.props.toggleIsHidden()
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
                level: this.props.level,
                assessment: this.props.assessment
            }
        })
        .then((res) => {
            if(res.status === 200){
                this.handleToggleVisibility()
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
                    <select className='gaugeLevel' value={this.props.level} onChange={this.handleLevelChange}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </label>
                <label>
                    <h2>Health Assessment</h2>
                    <input className='inputField' type='text' value={this.props.assessment} placeholder='Write a short assessment' onChange={this.handleAssessmentChange}></input>
                </label>
                <input className='submitButton' type='submit' value='Save Edits' ></input>
                </form>
            </div>
        )
    }
}

export default EditHealthGauge

