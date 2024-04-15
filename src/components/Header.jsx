import './Styles.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from "../assets/edusity_assets/logo.png"
import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark"  sticky='top' className='nav' >
      <Container className=' container-lg'>
        <Navbar.Brand href="#home">
        <img src={logo} height='30' className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Nav className='ms-auto'>
        <Nav.Link href='#Home'>Home</Nav.Link>
        <Nav.Link href='#Program'>Program</Nav.Link>
        <Nav.Link href='#About Us'>About Us</Nav.Link>
        <Nav.Link href='#Campus'>Campus</Nav.Link>
        <Nav.Link href='#Testimonials'>Testimonials</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href='#Testimonials'><Button className='btn btn-sm'>Contact Us</Button></Nav.Link>
        </Nav>



      </Container>
    
  </Navbar>
  )
}
