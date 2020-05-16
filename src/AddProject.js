import graphQLFetch from './graphqlFetch';
import React,{useState} from 'react';
import Alert from './Alert';
import {FormGroup,FormLabel,Form,ButtonToolbar,Modal,Button,FormControl} from 'react-bootstrap'

export default function AddProject(props){
   const[flag,setFlag]=useState(0);
    const handleCancel = () => props.history.push('/home');
    const  handleSave=async (e)=>{
        e.preventDefault();
        const form=document.forms.addProject;

      const project={
           name:form.name.value,
           leadName:form.projmanager.value,
           created:form.created.value
       }
        const query=`mutation addProject($project:ProjectInputs!){
            addProject(project:$project)
        }`
const data=await graphQLFetch(query,{project})
if(data){
 setFlag(1);
//  window.location.reload(false);
 setTimeout(()=>props.history.push('/home'),2001);

}
    }

  return (<div>
   <Form className="add-project" name="addProject">
  <Form.Group >
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="text" name="name"/>
  </Form.Group>
  <Form.Group >
    <Form.Label>Project Manager</Form.Label>
    <Form.Control type="text" name="projmanager" />
  </Form.Group>
  <Form.Group >
    <Form.Label>Created Date</Form.Label>
    <Form.Control type="text" name="created" value={new Date()}/>
  </Form.Group>
  <Form.Group >
  </Form.Group>
  <Button onClick={handleCancel} variant="secondary" type="submit">
          Cancel
        </Button>&nbsp;
        <Button variant="primary" type="submit" onClick={handleSave}>
          Save
        </Button>
</Form>
{flag===1?<Alert show={true} message={"successfully saved"} header={"Success"}/>:''}
    </div>
  );
}