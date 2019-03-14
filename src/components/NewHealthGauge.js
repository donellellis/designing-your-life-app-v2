import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/health/new'

class NewHealthGauge extends Component{
    constructor(props){
        super(props)
        this.state = {
            level: '0',
            assessment: 'Write a short assessment'
        }
    }

    componentDidMount(){
        axios({
            method: 'post',
            url: backendBaseUrl + postEndpoint,
            headers: {
                Authorization: 'Bearer ' + localStorage.token
            },
            data: {
                level: '0',
                assessment: 'Write a short assessment'
            }
            })
            .then((res) => {
            if(res.status === 200){
                console.log(res)
            }
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
            </div>
        )
    }
}

// class NewHealthGauge extends Component{
//     // constructor(props){
//     //     super(props)
//     //     this.state = {
//     //         healthData: {
//     //             level: '0',
//     //             assessment: 'Write a short assessment'
//     //         }
//     //     }
//     //     this.handleLevelChange = this.handleLevelChange.bind(this)
//     //     this.handleAssessmentChange = this.handleAssessmentChange.bind(this)
//     //     this.handleSubmit = this.handleSubmit.bind(this)
//     // }

//     // handleLevelChange(event){
//     //     this.setState({
//     //         level: event.target.value
//     //     })
//     // }

//     // handleAssessmentChange(event){
//     //     this.setState({
//     //         assessment: event.target.value
//     //     })
//     // }

//     // handleSubmit(event){
//     //     // sends a POST request
//     //     axios({
//     //         method: 'post',
//     //         url: backendBaseUrl + postEndpoint,
//     //         headers: {
//     //             Authorization: 'Bearer ' + localStorage.token
//     //         },
//     //         data: {
//     //             level: this.state.level,
//     //             assessment: this.state.assessment
//     //         }
//     //     })
//     //     .then((res) => {
//     //         if(res.status === 200){
//     //             this.props.toggleHidden()
//     //         }
//     //     })
//     //     event.preventDefault()
//     // }

//     // render(){
        
//     //     return(
//     //         <div className='complexGauge'>
//     //             <form autoComplete='off' onSubmit={this.handleSubmit}>
//     //             <h1>Health Gauge</h1>
//     //             <label>
//     //                 Health Level
//     //                 <select value={this.state.level} onChange={this.handleLevelChange}>
//     //                     <option value='0'>0</option>
//     //                     <option value='1'>1</option>
//     //                     <option value='2'>2</option>
//     //                     <option value='3'>3</option>
//     //                     <option value='4'>4</option>
//     //                 </select>
//     //             </label>
//     //             <label>
//     //                 Health Assessment
//     //                 <input className='inputField' type='text' value={this.state.assessment} onChange={this.handleAssessmentChange} placeholder='Write a short assessment' ></input>
//     //             </label>
//     //             <input type='submit' value='Create' ></input>
//     //             </form>
//     //         </div>
//     //     )
//     // }
// }

export default NewHealthGauge

