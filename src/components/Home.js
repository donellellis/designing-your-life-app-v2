import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

class Home extends Component{

    constructor(){
        super()
        this.state={
            signUpIsHidden: true,
            logInIsHidden: true
        }
        this.toggleHiddenSignUp = this.toggleHiddenSignUp.bind(this)
        this.toggleHiddenLogIn = this.toggleHiddenLogIn.bind(this)
    }

    toggleHiddenSignUp(){
        this.setState({
            signUpIsHidden: !this.state.signUpIsHidden
        })
    }

    toggleHiddenLogIn(){
        this.setState({
            logInIsHidden: !this.state.logInIsHidden
        })
    }

    render(){
        return(
            <div className='home'>
                <h1>Designing<br></br>Your Life</h1>
                <h2>Companion App</h2>
                <p>A companion app for the book, Designing Your Life: How to Build a Well-Lived, Joyful Life, by Bill Burnett and Dave Evans</p>
                <button className='home-signUp' onClick={this.toggleHiddenSignUp}>Sign Up</button>
                <button className='home-login' onClick={this.toggleHiddenLogIn}>Log In</button>
                {!this.state.signUpIsHidden && <SignUpForm toggleHiddenSignUp={this.toggleHiddenSignUp} handleInput={this.props.handleInput} handleSignUp={this.props.handleSignUp} isLoggedIn={this.props.isLoggedIn}></SignUpForm>}
                {!this.state.logInIsHidden && <LogInForm toggleHiddenLogIn={this.toggleHiddenLogIn} handleInput={this.props.handleInput} handleLogIn={this.props.handleLogIn} isLoggedIn={this.props.isLoggedIn}></LogInForm>}
            </div>
        )
    }
}

export default Home