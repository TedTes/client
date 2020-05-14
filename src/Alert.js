import React ,{useState,useEffect} from 'react';
import {Button,Toast,Row,Col} from "react-bootstrap"


export default function Alert(props) {
    const [show, setShow] = useState(false);
  useEffect(()=>{
      if(props.show){
          setShow(true)
      }
  },[])
    return (
      <Row className="alert">
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong style={{background:"#c3f0ca",display:"block"}} className="mr-auto">{props.header}</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
