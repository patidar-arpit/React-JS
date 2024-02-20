import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CourseService from '../service/CourseService';

const EditCourse = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const [formDetails, setFormDetails] = useState({ id: "", title: "", description: "", price: "" })

    useEffect(() => {
        if (formDetails.title.length === 0) {
            console.log(params.id);
            var course = CourseService.findById(params.id)
            setFormDetails({ ...course })   //we can also pass th location.state.course in place of the course
        }

    });

    const handleChange = (event) => {

        let { name, value } = event.target;
        setFormDetails({ ...formDetails, [name]: value })

    }

    const updateCourse = () => {
        CourseService.updateCourse(formDetails);
        navigate('/view-courses');

    }



    return (
        <div>

            <div>
                <form style={{ marginTop: "4%", marginLeft: "5%", width: "50%" }}>
                    <div class="mb-3">
                        <label for="id" class="form-label">Id</label>
                        <input type="text" class="form-control" id="id" name='id' onChange={handleChange} value={formDetails.id} readOnly />
                    </div>

                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name='title' onChange={handleChange} value={formDetails.title} />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">description</label>
                        <input type="textarea" class="form-control" id="description" name='description' onChange={handleChange} value={formDetails.description} />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input type="text" class="form-control" id="price" name='price' onChange={handleChange} value={formDetails.price} />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={updateCourse}>Submit</button>
                </form>

            </div>


        </div>
    )
}

export default EditCourse