import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='header'>
                <img src="shelfie-logo.png" alt='logo' />
                <h1>SHELFIE</h1>
                <div className='header-buttons'>
                        <Link to='/'><button>Dashboard</button></Link>
                        <Link to='/add'><button>Add Inventory</button></Link>
                </div>
            </div>)
    }
}

export default Header