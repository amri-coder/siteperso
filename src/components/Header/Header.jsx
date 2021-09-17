import React from 'react'
import {Link, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav, NavDropdown} from 'react-bootstrap'


import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand><Link to="/" className='text-link logo-nav'>amri maher</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  <Nav.Link><Link to="/Accueil" className='text-link'>Accueil</Link></Nav.Link>
                  <Nav.Link><Link to="/About" className='text-link'>À propos</Link></Nav.Link>
                    <NavDropdown title="Services" id="collasible-nav-dropdown" className='text-link'>
                      <NavDropdown.Item href="#action/3.1" className='text-link'>Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2" className='text-link'>Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3" className='text-link'>Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                  <Nav.Link><Link to="/Realisations" className='text-link'>Réalisations</Link></Nav.Link>
                  <Nav.Link><Link to="/Contact" className='text-link'>Contact</Link></Nav.Link>
                    
                  </Nav>
                </Navbar.Collapse>
            </Container>
   
</Navbar>
 
    )
}

export default Header
