import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
export default function Register(props){
    const handleCancel=()=>{
props.history.push('/home');
    }
    const handleRegister=()=>{
        props.history.push('/home')
    }
    return<div  className="register">
        <h4 style={{marginBottom:"1.1em"}}>Register</h4>
       <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form.Row>
        
    <Form.Group>
      <Form.Label>Photo</Form.Label>
      <Form.Control type="image" placeholder="browse" />
    </Form.Group>
  
    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>
  
    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" value="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>
    <div>
        
    </div>
    <div style={{marginTop:"1.3em"}}>
    <Button onClick={handleCancel} variant="secondary" type="submit">
     Cancel
    </Button>&nbsp;
    <Button onClick={handleRegister}variant="primary" type="submit">
    Register
    </Button>
    </div>
  
  </Form>
  </div>
}