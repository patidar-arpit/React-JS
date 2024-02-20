import Course from './Course'
import CourseService from '../service/CourseService';
import { useEffect, useState } from 'react';

const AllCourses = (props) => {

    const [courses, setCourses] = useState(CourseService.getCourses());
    const [searchCourses, setSearchCourses] = useState(CourseService.getCourses());

    const [searchText, setSearchText] = useState("")

    const changedData = () => {
        console.log("in Changed data")
        setSearchCourses([...CourseService.getCourses()]);
    }

    useEffect(() => {
        if (searchText.length == 0) {
            setSearchCourses([...courses]);
        }
        else {
            var newArr = (courses.filter(c => c.title.toLowerCase().includes(searchText.toLowerCase())));
            setSearchCourses(newArr)
        }
    }, [searchText])

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    const sortCourses = () => {
        function compare(price1, price2){
            return price1-price2;
        }
        let newArr = courses.sort((o1,o2) => compare(o1.price,o2.price));
        setSearchCourses([...newArr]);
    }


    return (
        <div>

            <h1>All courses</h1>
            <p>List of courses are follows</p>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <input type="text" className="container-fluid mb-2" placeholder="Search by name" onChange={handleSearchText}></input>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-outline-primary" name='sort' id='sort' onClick={sortCourses} >Sort By Price</button>
                    </div>

                </div>
            </div>
        <br/>
            <div class="container mt-2">
                <div class="row">

                    {

                        searchCourses.length > 0 ? searchCourses.map((item) => {
                            return (
                                <div class="col-sm-12 col-md-6" style={{ marginBottom: "5%" }}>
                                    <Course course={item} changedData={changedData} > </Course>
                                </div>
                            )

                        }) : "No courses"

                    }


                </div>
                <br></br>
            </div>

        </div>
    )
}

export default AllCourses