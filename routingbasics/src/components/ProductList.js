import React, { Component } from 'react'
import ProductService from '../service/ProductService'
import ProductDetails from '../components/ProductDetails'
import ProductForm from './ProductForm';


class ProductList extends React.Component {

    constructor(props) {
        console.log("In Product List Constructor")
        super(props);
        this.state = {
            prodarr: [],
            searcharr: [],
            flag: false,
            updateProd: {}
        }

    }
    //Runs only once at the start
    //Better place to initialize state
    componentDidMount() {
        console.log("In Init method of Product List")
        this.setState({
            ...this.state,
            prodarr: ProductService.getAllProducts(),
            searcharr: ProductService.getAllProducts()
        })
    }

    componentWillUnmount() {
        console.log("In Destroy method of Product List")
    }

    changeFlag = () => {
        this.setState({
            ...this.state,
            flag: false,
            updateProd: {}
        });
    }

    modifyProduct = (product) => {
        this.setState({
            ...this.state,
            flag: true,
            updateProd: { ...product }
        });
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Product List</h1>
                        <button className='btn btn-primary' type='button' name='btn' id='addNew' onClick={() => {
                            if (this.state.flag === true) {
                                this.setState({
                                    ...this.state,
                                    flag: false
                                });
                            } else {
                                this.setState({
                                    ...this.state,
                                    flag: true
                                });
                            }
                        }}
                        >Add New Product</button>
                        {this.state.prodarr.map(prod => <ProductDetails key={prod.pid} product={prod} modifyProduct={this.modifyProduct} ></ProductDetails>)}
                    </div>
                </div>
                <div className="row">
                    {this.state.flag ? <ProductForm changeFlag={this.changeFlag} updateProd={this.state.updateProd} ></ProductForm> : ""}
                </div>

            </div>
        )
    }
}

export default ProductList