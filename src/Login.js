import React from 'react';
import {Form,Button} from 'react-bootstrap';
export default function Login(props){
    const handleCancel=()=>{
        props.history.push('/home');
    }
    const handleLogin=()=>{
        props.history.push('./home')
    }
   return<Form className="login">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group >
  <div style={{marginTop:"2.3em"}}>
  <Button onClick={handleCancel} variant="secondary" type="submit">
    Cancel
  </Button>&nbsp;
  <Button onClick={handleLogin} variant="primary" type="submit">
    Login
  </Button>
  </div>
 
</Form>
}