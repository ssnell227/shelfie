import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            imgURL: '',
            price: 0
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleCancel = this.handleInput.bind(this)
    }

    handleInput (e) {
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }

    handleCancel () {
        //maybe don't need? going to be a route later.  or just use history
    }

    componentDidMount () {
        let id = this.props.match.params.id
        if (id) {
            // axios.get(`http://localhost:4000/api/`) NOT FINISHED
        }
    }

    render () {
        return (
        <div>
            <input value={this.state.imgURL} onChange={this.handleInput} data-name='imgURL' ></input>
            <input value={this.state.name} onChange={this.handleInput} data-name='name'></input>
            <input value={this.state.price} onChange={this.handleInput} data-name='price'></input>
            <button onClick={this.handleCancel}>Cancel</button>
            <button>Add to Inventory</button>
        </div>)
    }
}

export default Form