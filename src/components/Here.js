import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Here extends Component{
   
    render(){
        return(
            <div className='here'>
                <div className='here-text-wrapper'>
                    <p>"Design thinking can help you build your way forward from wherever you are, regardless of the life design problem you are facing. But before you can figure out which direction to head in, you need to know where you are and what design problems you are trying to solve."</p>
                    <Link to='/dashboard' className='fas fa-chevron-circle-right'></Link>
                </div>
                <div className='here-image-wrapper'>
                    <img className='here-image' src='https://i.imgur.com/9jJl8uT.png' alt='location symbol'></img>
                    <h1>You<br/>are<br/>here</h1>   
                </div>
            </div>
        )
    }
}

export default Here