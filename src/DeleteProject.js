import React,{useState, useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';
import graphQLFetch from './graphqlFetch';

export default function DeleteProject(props){
    const [show, setShow] = useState(true);
    const[data,setData]=useState([props.data])
    // useEffect(()=>flag,[flag])
  const handleCancel = () => {
      setShow(false);
      props.history.push('/home')
    }
  const handleDelete = async() => {
      const id=Number(props.id);
    //   setShow(true);
    const query=`mutation deleteProject($id:Int!){
        deleteProject(id:$id)
      }`
      const data=await graphQLFetch(query,{id});  
    if(data){
        // const deletes=props.deletedSignal;
        setShow(false);
         props.history.push('/home')
         window.location.reload(false);
        
    }
    }
  return ( <div> <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>)

}


