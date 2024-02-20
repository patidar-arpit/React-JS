import React, { useEffect, useState } from 'react'
import ProductService from '../service/ProductService'


export default function ProductForm(props) {

    const [formDetails, setFormDetails] = useState({
        pid: "",
        pname: "",
        qty: "",
        price: "",
    })

    const [formErrors, setErrors] = useState({})

    const handleChange = (event) => {
        // let name = event.target.name;
        // let value = event.target.value;

        //Other way - Destructuring of Object
        let { name, value } = event.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        });
    }

    useEffect(() => {
        setFormDetails({ ...props.editprod})
    }, [props.editprod])

    const validateForm = () => {
        //Below is the code to check if the formDetails properties are empty or not
        var errors = {};
        if (formDetails.pid.trim().length === 0)
            errors.pidErr = "Id cannot be empty";
        if (formDetails.qty <= 0)
            errors.qtyErr = "Quantity cannot be negative or 0";

        setErrors(errors);
        return errors;
    }

    const addProduct = () => {
        var errors = validateForm();
        if (Object.keys(errors).length > 0) {
            return;
        }
        else {
            ProductService.addProduct(formDetails);
            setFormDetails({
                pid: "",
                pname: "",
                qty: "",
                price: "",
            })
            setErrors({
                errors: {}
            });
            props.changeFlag(false);
        }
    }

    return (
        <div>
            <h1>Product Form</h1>
            <div>
                <form>
                    <div className="form-group">
                        <input type="text" className="" value={formDetails.pid} id="pid" name="pid" placeholder="Enter Id" onChange={handleChange} /> <p>{formErrors.pidErr}</p> <br /> <br />
                        <input type="text" className="" value={formDetails.pname} id="pname" name="pname" placeholder="Enter Name" onChange={handleChange} /> <br /> <br />
                        <input type="text" className="" value={formDetails.qty} id="qty" name="qty" placeholder="Enter Quantity" onChange={handleChange} /> <br /> <br />
                        <input type="text" className="" value={formDetails.price} id="price" name="price" placeholder="Enter Price" onChange={handleChange} /> <br /> <br />
                    </div>
                    <button type="button" className="btn btn-primary" name="add" id='add' onClick={addProduct} >Add Product</button>
                </form>
            </div>
        </div >
    )
}
