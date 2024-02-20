import React from 'react'
import ProductService from '../service/ProductService'

export default function ProductDetails(props) {

    const deleteProduct = () => {
        ProductService.deleteProduct(props.product.pid);
    }

    const editProduct = (product) => {
        props.modifyProduct(product);
    }

    return (
        <div className='container'>
            <br />
            <div className="row">
                <div className='cols-sm-12 col-md-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" />
                    </svg>
                </div>
                <div className='cols-sm-12 col-md-3'>
                    <span>{props.product.pid}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{props.product.pname}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{props.product.qty}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{props.product.price}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className='cols-sm-12 col-md-4'>
                    <button className='btn btn-primary' type="button" name='btn' id='view' >View</button> &nbsp;&nbsp;
                    <button className='btn btn-danger' type="button" name='btn' id='delete' onClick={deleteProduct} >Delete</button>&nbsp;&nbsp;
                    <button className='btn btn-success' type="button" name='btn' id='edit' onClick={editProduct(props.product)} >Edit</button>
                </div>
            </div>

        </div>
    )
}
