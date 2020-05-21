import React,{useState} from 'react';
import graphQLFetch from './graphqlFetch';
import Alert from './Alert'
import {Form,Collapse,Button,Accordion,Card,Badge} from 'react-bootstrap';
export default function ProjectEdit(props){
const[show,setShow]=useState(false);
const[flag,setFlag]=useState(0)
    const handleCancel=()=>{
        props.history.push('/home');
    }
    const handleSave=async(e)=>{
        const form=document.forms.projectEdit;
        // e.preventDefault();
        let id=Number(props.match.params.id);
     
         const project={
            id:id,
            name:form.projectname.value,
            leadName:form.leadname.value,
             }
         const query=`mutation updateProject($project:ProjectInputs!){
             updateProject(project:$project)
         }`

      const data=await graphQLFetch(query,{project})
     if(data){
    setFlag(1)
     setTimeout(()=>props.history.push('/home'),1301);
         }
    }
    return<div className="project-editor">
        <h1>EDIT PROJECT</h1>
        {props.data
        .filter((data)=>Number(data.id)===Number(props.match.params.id))
        .map((dta,index)=><Form name="projectEdit" key={index}>
        <Form.Group >
          <Form.Label style={{color:"black",fontWeight:"bold",fontSize:".8em"}}>ProjectName</Form.Label>
          <Form.Control type="text" name="projectname" defaultValue={dta.name}/>
        </Form.Group>
        <Form.Group >
          <Form.Label style={{color:"black",fontWeight:"bold",fontSize:".8em"}}>Project Manager</Form.Label>
          <Form.Control type="text" name="leadname" defaultValue={dta.leadName} />
        </Form.Group>
        <Form.Group >
          <Form.Label style={{color:"black",fontWeight:"bold",fontSize:".8em"}}>Created Date</Form.Label>
          <Form.Control type="text" name="created" defaultValue={dta.created} />
        </Form.Group>
        <Button onClick={handleCancel} variant="secondary" type="submit">
          Cancel
        </Button>&nbsp;
        <Button variant="primary" type="submit" onClick={handleSave}>
          Save
        </Button>
      </Form>)}
    <div className="alert-position"> {flag===1?<Alert show={true} message={"successfully updated!"} header={"Success"}/>:''}</div> 
    </div>
}