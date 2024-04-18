import './Styles.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from "../assets/edusity_assets/logo.png"
import Button from 'react-bootstrap/Button'
import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'

export const Header = () => {
  const[sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',
    ()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    }
  )})



  const handleScroll=(targetId)=>
  {
    const target= document.getElementById(targetId);
   if(target)
   {
   window.scrollTo({
     top:target.offsetTop,
     behavior:'smooth'
   });
   }
  }
  
  return (
    <Navbar expand='lg' bg="dark" data-bs-theme="dark" sticky='top'  className='nav' >
      <Container className=' container-sm'>
        <Navbar.Brand href="#home">
        <img src={logo} height='30' className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href='#Home' onClick={()=>{handleScroll('home')}}>Home</Nav.Link>
            <Nav.Link href='#Program' onClick={()=>{handleScroll('prog')}}>Program</Nav.Link>
            <Nav.Link href='#About Us' onClick={()=>{handleScroll('abt')}}>About Us</Nav.Link>
            <Nav.Link href='#Campus'  onClick={()=>{handleScroll('camp')}}>Campus</Nav.Link>
            <Nav.Link href='#Testimonials'  onClick={()=>{handleScroll('test')}}>Testimonials</Nav.Link>
          </Nav>
          <Nav>
            <Button>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>


      </Container>
  </Navbar>
    
  )
}
