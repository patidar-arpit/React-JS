import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export const DashBoard = () => {
    return (
        <div>

            <div className='container mt-5 p-5'>
                <div className='row'>
                    <div className='col-md-10'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-md-2'>
                        <Link to='/dashboard/add'>
                            <button className='btn btn-outline-primary'>Add User</button>
                        </Link>
                        <Link to='/dashboard/show'>
                            <button className='btn btn-outline-secondary mt-4'>Show Info</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashBoard;