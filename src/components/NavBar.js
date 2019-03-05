import React, { Component } from 'react'

class NavBar extends Component{
    render(){
        let navBarItems = []
        if (this.props.isLoggedIn){
            navBarItems.push(<button className='navItem' key={1} onClick={this.props.handleLogOut}>Log Out</button>)
        }
        return(
            <div className="navBar">
                {navBarItems}
            </div>
        )
    }
}

export default NavBar