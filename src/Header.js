import React,{useState, useEffect} from 'react';
import {Col,Container,Row,Collapse,Button,Badge} from 'react-bootstrap';
import AddProject from './AddProject';
import Accounts from './Accounts'
import './styles.css'
export default function Header(props){

    return(
    <div className="header">
   <ul className="list-menu">
   <li ><h2  className="buggy">Buggy</h2></li> 
   <li><a href="/home">Dashboard </a></li>
   <li><a href="/members">Members</a></li>
   <li><a href="/about">About</a></li>
   </ul>
   <div className="account-button"><a href="/login">Login</a>/&nbsp;
  <a href="/register">Register</a></div>
   </div>
 
)
}



{/* <div className="slidemenu" style={{width:`${className}`,transition:".5s"}} ></div> */}

{/* <Navbar bg="light" expand="lg" bg="primary" style={{width:"50%",height:"100px"}}>
  <Navbar.Brand href="#home">BugTracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="">Action</NavDropdown.Item>
        <NavDropdown.Item href="">Another action</NavDropdown.Item>
        <NavDropdown.Item href="">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   <AddProject/>&nbsp;&nbsp;
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}