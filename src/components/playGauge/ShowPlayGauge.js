import React, { Component } from 'react'
import axios from 'axios'

const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION
const postEndpoint = '/play/show'

class ShowPlayGauge extends Component{
    constructor(props){
        super(props)
        this.state = {
            isActive: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.toggleIsActive = this.toggleIsActive.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    handleToggleVisibility(){
        this.props.toggleIsHidden()
    }

    toggleIsActive(){
        this.setState({
            isActive: true
        })
        document.addEventListener('click', this.handleClick)
        
    }

    handleClick(e){
        if (this.node.contains(e.target)){
            return;
        }
        this.handleClickOutside()
    }

    handleClickOutside(){
        this.setState({
            isActive: false
        })
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

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick)
    }
   
    render(){
        return(
        <div ref={el => this.node = el} className={this.state.isActive ? 'complexGauge' : 'simpleGauge' } onClick={this.toggleIsActive}>
            <h1>Play Gauge</h1>
            <h2>Play Level</h2>
            <h3>{this.props.level || '0'}</h3>
            <h2>Play Assessment</h2>
            <p>{this.props.assessment || 'Write a short assessment'}</p>
            <button className='fas fa-pen' onClick={this.handleToggleVisibility} ></button>
        </div>
        )
    }
}

export default ShowPlayGauge

