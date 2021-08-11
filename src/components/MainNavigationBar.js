import React from 'react';
import {Nav, Navbar, NavbarBrand, Container} from 'react-bootstrap';
import '../style/MainNavigationBar.css'
import styled from 'styled-components';
import Logo from '../assets/checklist.svg'

const styles = styled.div`

    .navbar{
        background-color: #222;
    }

    .navbarBrand, navbar-nav, nav-link{
        color:#bbb;

        &:hover{
            color:white;
        }
    }

`;

const MainNavigationBar = () =>{
    return (

        <styles>
            <Navbar collapseOnSelect expand="lg" /*style={{background: "#1C525A"}}*/ className="navbar" variant="dark">
                <Container>
                    <NavbarBrand href="/"  className="font-weight-bold">
                        <img  
                        width="70px" 
                        height="auto" 
                        className="img-responsive " 
                        src={Logo}  
                        alt="logo"                        
                        />{' '}
                        ToDO LIST                    
                    </NavbarBrand>
                </Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contactus">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">SignUp</Nav.Link>                      
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </styles>

    )
}

export default MainNavigationBar;