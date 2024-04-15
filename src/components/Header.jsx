import './Styles.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from "../assets/edusity_assets/logo.png"
import Button from 'react-bootstrap/Button';

export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{size:500}} sticky='top'>
      <Container className='nav'>
        <Navbar.Brand href="#home">
        <img src={logo} height='30' className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Nav.Link href='#Home'>Home</Nav.Link>
        <Nav.Link href='#Program'>Program</Nav.Link>
        <Nav.Link href='#About Us'>About Us</Nav.Link>
        <Nav.Link href='#Campus'>Campus</Nav.Link>
        <Nav.Link href='#Testimonials'>Testimonials</Nav.Link>
        <Nav.Link href='#Testimonials'><Button className='btn'>Contact Us</Button></Nav.Link>



      </Container>
    
  </Navbar>
  )
}
