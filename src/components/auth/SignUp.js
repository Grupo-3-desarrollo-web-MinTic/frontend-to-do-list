import React, {Component} from 'react';
import {Form, Button, Container, Row,Col} from 'react-bootstrap'
import '../../style/Form.css'

export default class SignUp extends Component {
    render(){
    return (
        <Container fluid className="bg">
            <Form className="login-form">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter last name" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Agree with privacy and policy" />
                </Form.Group>

                <Button className="btn login-form" variant="null" type="submit" >
                    Sign Up
                </Button>


            </Form>
        </Container>
    );

    }
}

