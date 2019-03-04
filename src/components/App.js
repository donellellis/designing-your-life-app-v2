import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Home from './Home'
import NavBar from './NavBar'
import LogInForm from './LogInForm'
import LogOut from './LogOut'

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
    axios.post( backendBaseUrl + '/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then( response => {
      localStorage.token = response.data.token
      this.setState({
        isLoggedIn: true
      })
      .catch(err => console.log(err))
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
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='app'>
          <NavBar isLoggedIn={this.state.isLoggedIn}></NavBar>
          <Route exact path="/"
            render={(props) => {
              return (
                <Home isLoggedIn={this.state.isLoggedIn}/>
              )
            }}/>
   
          <Route exact path='/logout/'
            render={(props) => {
              return (
                <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
              )
            }}
          />

          <Route exact path='/login/'
            render={(props) => {
              return (
                <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
              )
            }}
          />
      </div>
    );
  }
}

export default App;
