import React from 'react'
import {Container,Nav,Image} from 'react-bootstrap'
import { Navbar} from 'react-bootstrap'
import {NavLink} from './Elements'
import logo from '../pics/logo.jpeg'
import {GoLocation} from 'react-icons/go'
import classes from './style.module.css'

const Header = () => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink to="/"> <Image src={logo} height='75' width='75'/></NavLink>/
                    <GoLocation color='white'/><p className={classes.city}>Patna</p>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/aboutus">About Us</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header