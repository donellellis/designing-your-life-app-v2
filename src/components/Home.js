import React, { Component } from 'react'

import '../stylesheets/components/_home.scss'

class Home extends Component{
    render(){
        return(
            <div className='home'>
                <h1>Designing<br></br>Your Life</h1>
                <h2>Companion App</h2>
                <p>A companion app for the book, Designing Your Life: How to Build a Well-Lived, Joyful Life, by Bill Burnett and Dave Evans</p>
                <button className='home-signUp'>Sign Up</button>
                <button className='home-login'>Log In</button>
            </div>
        )
    }
}

export default Home