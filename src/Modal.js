import React from 'react';
import {Modal,Button} from 'react-bootstrap';
export default function (props){
return<Modal show={props.show} onHide={props.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props.handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
}
