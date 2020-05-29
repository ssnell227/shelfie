import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgURL: ''
        }

    }



    componentDidMount() {
        const { id, name, price, img } = this.props.data
        this.setState({
            id,
            name,
            price,
            imgURL: img
        })
    }

    render() {
        const id = this.props.data.id
        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={this.state.imgURL} alt={this.state.name} />
                </div>
                <div className='product-info'>
                    <p className='product-title'>{this.state.name}</p>
                    <p className='product-price'>{this.state.price}</p>
                </div>
                <div className='product-buttons'>
                    <button onClick={() => this.props.deleteItem(id)}>Delete</button>
                    <Link to={`/edit/${this.props.data.id}`}><button>Edit</button></Link>
                </div>
            </div>)
    }
}

export default Product