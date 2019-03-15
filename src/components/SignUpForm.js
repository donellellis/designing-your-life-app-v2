// code excerpts from https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f
import React, { Component } from 'react'

class SignUpForm extends Component{

    constructor(props){
        //super is used to access and call functions on object's parent
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount(){
        //type, listener, options
        document.addEventListener('click', this.handleClick, false)
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick, false)
    }

    handleClick(e){
        if (this.node.contains(e.target)){
            return;
        }
        this.handleClickOutside()
    }

    handleClickOutside(){
        this.props.toggleHiddenSignUp()
    }

    render(){
  
        return(
            <div ref={el => this.node = el} className='signUpForm'>
                <h1>Sign Up</h1>
                <form autoComplete="off">
                    <label>
                        email
                        <input className='inputField' type='text' name='email' onChange={this.props.handleInput}/>
                    </label>
                    <label>
                        password
                        <input className='inputField inputFieldPassword' type='text' name='password' onChange={this.props.handleInput}/>
                    </label>
                    <input className='submitButton' value='Sign Up' type='submit' onClick={this.props.handleSignUp}/>
                </form>
            </div>
        )
    }
}

export default SignUpForm