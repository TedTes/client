import React,{useState} from 'react';
import graphQLFetch from './graphqlFetch';
import Alert from './Alert'
import {Form,Collapse,Button,Accordion,Card,Badge} from 'react-bootstrap';
export default function BugEdit(props){
  console.log("from edit props")
  console.log(props);
const[show,setShow]=useState(false);
const[flag,setFlag]=useState(0)
const[bdata,setData]=useState(props.bugdata);

    const handleCancel=()=>{
        props.history.push('/home');
    }
    const handleSave=async(e)=>{
        const form=document.forms.bugEdit;
        // e.preventDefault();
        let id=Number(props.location.search.slice(1));
       console.log(id);
         const project={
            id:id,
            name:form.projectname.value,
            leadName:form.leadname.value,
             }
         const query=`mutation updateProject($bug:BugInputs!){
             updateProject(bug:$bug)
         }`

      const data=await graphQLFetch(query,{project})
     if(data){
    setFlag(1)
     setTimeout(()=>props.history.push('/home'),1001);
         }
    }
    return<div className="project-editor">
        <h1>EDIT BUG</h1>
        {bdata?bdata
        .filter((data)=>Number(data.id)===Number(props.location.search.slice(1)))
        .map((dta,index)=><Form name="bugEdit" key={index}>
        <Form.Group >
          <Form.Label style={{color:"black",fontWeight:"bold",fontSize:".8em"}}>Name</Form.Label>
          <Form.Control type="text" name="projectname" defaultValue={dta.name}/>
        </Form.Group>
        <Form.Group >
          <Form.Label style={{color:"black",fontWeight:"bold",fontSize:".8em"}}>Status</Form.Label>
          <Form.Control type="text" name="status" defaultValue={dta.status} />
        </Form.Group>
        <Form.Group >
          <Form.Label style={{color:"black",fontWeight:"bold",fontSize:".8em"}}>Description</Form.Label>
          <Form.Control type="text" name="description" defaultValue={dta.description} />
        </Form.Group>
        <Button onClick={handleCancel} variant="secondary" type="submit">
          Cancel
        </Button>&nbsp;
        <Button variant="primary" type="submit" onClick={handleSave}>
          Save
        </Button>
      </Form>):""}
    <div className="alert-position"> {flag===1?<Alert show={true} message={"successfully updated!"} header={"Success"}/>:''}</div> 
    </div>
}