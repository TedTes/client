import graphQLFetch from './graphqlFetch';
import React,{useState} from 'react';
import {FormGroup,FormLabel,Form,ButtonToolbar,Modal,Button,FormControl} from 'react-bootstrap'

export default function AddProject(){
let id;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => setShow(true);
    const  handleSubmit=async ()=>{
        
        const form=document.forms.addProject;
    //   const counter=`query getCounter{
    //       getCounter
    //   }`
    // const res=await graphQLFetch(counter);
      const id=Math.floor(Math.random()*10000)

      const project={
           id:id,
           name:form.name.value,
           leadName:form.leadName.value,
          
       }
        const query=`mutation addProject($project:ProjectInputs!){
            addProject(project:$project){
                _id
            }
        }`
const data=await graphQLFetch(query,{project})

setShow(false);
    }

  return (<div>
    <Modal style={{opacity:1}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title >Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form name="addProject">
        <FormGroup>
        <FormLabel>Name:</FormLabel>
        <FormControl name="name" autoFocus/>
        </FormGroup>
        <FormGroup>
        <FormLabel>LeadProject:</FormLabel>
        <FormControl name="leadName" />
        </FormGroup>
        </Form>
     </Modal.Body>
     <Modal.Footer>
    <ButtonToolbar>
    <Button type="submit" onClick={handleSubmit}>Submit</Button>
    &nbsp;
    <Button onClick={handleClose}>Cancel</Button>
    </ButtonToolbar>
   </Modal.Footer>
      </Modal>
    </div>
  );
}