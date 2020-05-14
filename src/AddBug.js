import React ,{useState} from 'react';
import {Form,Collapse,Button,Accordion,Card,Badge} from 'react-bootstrap'
import Header from './Header';
import AddProject from './AddProject'
import graphqlFetch from './graphqlFetch';
import './styles.css'

export default function AddBug(props){
    const [open,setOpen]=useState(false)
  // const projectName=props.location.search.slice(1);
    const handleInput=async(e)=>{
e.preventDefault();
      const query=`mutation addBug($bug:BugInputs){
        addBug(bug:$bug){
         bugs{
           _id
         }
        }
      }`
      const created=new Date();
    const form=document.forms.addBug;
    const bug={
      name:form.name.value,
      projectName:props.projectName,
      status:form.status.value,
      description:form.description.value,
      created:created
    }
    await graphqlFetch(query,{bug});
    alert("succefully updated")
    }
 
return(<div>
 <div className="addbug">
  {/* <Button  onClick={() => setOpen(!open)} >Add Bugs</Button> */}
  <Button variant="outline-primary" onClick={() => setOpen(!open)}>
  Add Bugs <Badge variant="light">+</Badge>
</Button>
  <Collapse in={open} style={{marginTop:"-1px",border:".6px solid blue",padding:"20px" }} >
  <Form name="addBug">
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control name="name" type="text" placeholder="" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Status</Form.Label>
    <Form.Control as="select" name="status">
      <option>Fixed</option>
      <option>Assigned</option>
      <option>New</option>
      <option>Closed</option>
  
    </Form.Control>
  </Form.Group>
  
  <Form.Group>
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows="3" name="description" />
  </Form.Group>
  <Button onClick={handleInput}>Add</Button>&nbsp;
  <Button>Cancel</Button>
</Form>

</Collapse>
  </div>
  
    </div>
)
}