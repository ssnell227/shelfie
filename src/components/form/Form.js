import React, { Component } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            name: '',
            img: '',
            price: 0,
            editing: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleCancel = this.handleInput.bind(this)
        this.createItem = this.createItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }

    handleInput(e) {
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }

    updateItem() {
        const { id, name, price, img } = this.state
        axios.put(`http://localhost:4000/api/inventory/${id}`, { name, price, img })
            .then(() => this.props.history.push('/'))
    }

    createItem() {
        const { name, price, img } = this.state
        axios.post(`http://localhost:4000/api/inventory`, { name, price, img })
            .then(() => this.props.history.push('/'))
    }


    componentDidMount() {
        let id = +this.props.match.params.id
        if (id) {
            this.setState(
                { editing: true }
            )
            axios.get(`http://localhost:4000/api/inventory/${id}`)
                .then(res => {
                    this.setState({
                        id: res.data[0].id,
                        name: res.data[0].name,
                        img: res.data[0].img,
                        price: res.data[0].price
                    })
                })
        }
    }


    render() {
        return (
            <div className='form'>
                <img src={this.state.img === '' ? 'No_image_available.svg' : this.state.img} alt='item'></img>
                <p className='form-text'>Image URL:</p>
                <input value={this.state.img} onChange={this.handleInput} data-name='img' ></input>
                <p className='form-text'>Product Name:</p>
                <input value={this.state.name} onChange={this.handleInput} data-name='name'></input>
                <p className='form-text'>Price:</p>
                <input value={this.state.price} onChange={this.handleInput} data-name='price'></input>
                <div className='form-buttons'>
                    <Link to='/'><button onClick={this.handleCancel}>Cancel</button></Link>
                    {this.state.editing === true ?
                        <button onClick={this.updateItem}>Save</button> :
                        <button onClick={this.createItem}>Add to Inventory</button>}
                </div>
            </div>)
    }
}

export default Form