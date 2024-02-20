import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { NavLink, useNavigate, useParams } from 'react-router-dom';
import UserService from '../service/UserService';

const AddForm = () => {

    const navigate = useNavigate();

    const [formDetails, setFormDetails] = useState({
        fname: "",
        lname: "",
        address: "",
        pincode: ""
    });

    const handleInputChange = (e) =>{
        setFormDetails({
            ...formDetails,
            [e.target.name] : e.target.value
        }) 
    }

    const handleSubmit = () => {
        console.log(formDetails);
        UserService.addUser(formDetails);
        navigate('/dashboard/show');
    }

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <Form className='d-flex flex-column justify-content-center border bg-light p-5' style={{ width: "80%" }}>
                    <h2 className='text-center mb-5 display-5 '>Add User</h2>
                    <Form.Group className="mb-3" controlId="fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='fname' onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lname' onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='address' onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" name='pincode' onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="success" onClick={handleSubmit}>Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default AddForm
