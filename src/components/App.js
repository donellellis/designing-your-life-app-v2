import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import Home from './Home'
import NavBar from './NavBar'
import Dashboard from './Dashboard'

// defines environmental variables
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION

class App extends Component {

  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount(){
    if (localStorage.token){
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleLogOut(){
    console.log("handling logout")
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  handleInput(e) {
    // object initializer
    this.setState({
      // computed property names
      [e.target.name]: e.target.value
    })
  }

  handleSignUp(e){
    e.preventDefault()
    console.log('in sign up')
    axios.post( backendBaseUrl + '/users/signup/', {
      email: this.state.email,
      password: this.state.password,
      healthGauge: {
        level: '0',
        assessment: 'Write a short assessment'
      }
    })
    .then( response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
  }

  handleLogIn(e) {
    e.preventDefault()
    axios.post(backendBaseUrl + '/users/login/', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
    })
  }

  render() {
    return (
      <div className='app'>
          <NavBar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}></NavBar>
          <Route exact path='/' render={(props) => (
            this.state.isLoggedIn ? (
              <Redirect to='/dashboard'/>
          ) : (
            <Home isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp}/>
          ) 
          )}/>
            <Route exact path='/dashboard/' render={(props) => (
            this.state.isLoggedIn ? (
              <Dashboard isLoggedIn={this.state.isLoggedIn}/>
            ) : (
              <Redirect to='/'/>
            )
          )}/>
      </div>
    );
  }
}

export default App;
