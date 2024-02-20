import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link, useLocation } from 'react-router-dom';
import UserService from '../service/UserService';



const AllUsers = () => {

    const location = useLocation();
    const [users, setUsers] = useState(UserService.getAllUsers());
    var flag = false;

    const updateData = () => {
        setUsers([...UserService.getAllUsers()]);
    }


    const deleteUser = (id) => {
        UserService.deleteUser(id);
        updateData();
    }

    const func1 = () => {
        if (JSON.parse(localStorage.getItem('isLogin')) == 'true') {
            console.log(location.state.admin.name);
            console.log("flag true")
            flag = true;
        }
        else {
            console.log("flag true")
            flag = false;
        }
    }


    return (
        <div>

            {/* {condition ? ("condition is true") : ("condition is false")}   */}
            {func1()}
            {

                flag ? <h4>Welcome , {location.state.admin.name}</h4> : ""

            }
            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.address}</td>
                                <td>{user.pincode}</td>
                                <td>
                                    <button className='btn btn-primary'>Edit</button>
                                    <Link to="/dashboard/show">
                                        <button className='btn btn-danger ms-3' onClick={() => {
                                            deleteUser(index);
                                        }
                                        }>Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


        </div>
    )
}

export default AllUsers