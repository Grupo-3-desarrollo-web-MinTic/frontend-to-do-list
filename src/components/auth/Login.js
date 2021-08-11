import React, { Component } from "react";
import {Form, Button, Container} from 'react-bootstrap'
import '../../style/Form.css'

export default class Login extends Component {
    render() {
        return (
          
        <Container fluid className="bg">
            <Form className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button className="btn login-form" variant="null" type="submit" >
                    Login
                </Button>
                
                <Form.Group className="mb-3 text">
                    <Form.Text >
                        Don't have an account? <a href="/signup">Register</a>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text">
                    <Form.Text >
                       <a href="/password/reset">Forgot password?</a>
                    </Form.Text>
                </Form.Group>            
            </Form>
        </Container>
           
        );
    }
}
