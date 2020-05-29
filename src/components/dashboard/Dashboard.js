import React, { Component } from 'react'
import axios from 'axios'
import Product from '../product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: []
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem(id) {
        axios.delete(`http://localhost:4000/api/inventory/${id}`)
            .then(res => {
                console.log(res)
                this.setState({
                    inventory: res.data
                })
            })

    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/inventory')
            .then(res => {
                this.setState({
                    inventory: res.data
                })
            })

    }

    componentDidUpdate() {
        // axios.get('http://localhost:4000/api/inventory')
        //     .then(res => {
        //         this.setState({
        //             inventory: res.data
        //         })
        //     })
    }

    render() {
        const productMap = this.state.inventory.map((product, index) => <Product saveItem={this.saveItem} updateItem={this.updateItem} deleteItem={this.deleteItem} data={product} key={product.id} />)
        return (
            <div>
                {productMap}
            </div>)
    }
}

export default Dashboard