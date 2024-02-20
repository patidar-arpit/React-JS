import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        var admins = JSON.parse(localStorage.getItem('admins'));
        if (admins == null) {
            console.log(null);
            admins = [{ name: "Arpit", email: "arpit@123", password: "arpit@123" }, { name: "Jayesh", email: "jayesh@123", password: "jayesh@123" }]
            localStorage.setItem('admis', JSON.stringify(admins));
            localStorage.setItem('isLogin', JSON.stringify("false"));
        }

        var flag = false;
        for (let i = 0; i < admins.length; i++) {

            if (email === admins[i].email && password === admins[i].password) {
                localStorage.setItem('isLogin', JSON.stringify("true"));
                flag = true;
                navigate("/dashboard/show/", { state: { admin: admins[i] } });
            }

        }

        if (!flag) {
            setEmail("");
            setPassword("");
            alert("Wrong Login Creds!");
        }

    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='d-flex flex-column justify-content-center border bg-light p-5' style={{ width: "40%" }}>
                <h2 className='text-center mb-5 display-5 '>Login Form</h2>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                </Form.Group>
                <Button variant="success" onClick={handleLogin}>Login</Button>
            </Form>
        </div>
    );
}


export default Login;