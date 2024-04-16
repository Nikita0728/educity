import './Styles.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from "../assets/edusity_assets/logo.png"
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react'

export const Header = () => {
  const[sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',
    ()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    }
  )
  },[])
  return (
    <Navbar expand='lg' bg="dark" data-bs-theme="dark" sticky='top'  className='nav' >
      <Container className=' container-sm'>
        <Navbar.Brand href="#home">
        <img src={logo} height='30' className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href='#Home'>Home</Nav.Link>
            <Nav.Link href='#Program'>Program</Nav.Link>
            <Nav.Link href='#About Us'>About Us</Nav.Link>
            <Nav.Link href='#Campus'>Campus</Nav.Link>
            <Nav.Link href='#Testimonials'>Testimonials</Nav.Link>
          </Nav>
          <Nav>
            <Button>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>


      </Container>
  </Navbar>
    
  )
}
