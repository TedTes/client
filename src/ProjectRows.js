import React from 'react';
import {Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

export default function ProjectsRows(props){
  const handleClick=(e)=>{
    if(e.stopPropagation)e.stopPropagation();
  }
  const handleEdit=(e)=>{
    if(e.stopPropagation)e.stopPropagation();
  }

return <LinkContainer to={`/home/${props.project.name}?${props.project.id}`}>
 
 <tr className="project-row" key={props.project.key}>
        <th>{props.project.name}</th>
        <th>{props.project.leadName}</th>
        <th>{props.project.created.toDateString()}</th>
      <th><a onClick={handleEdit} href={`/edit/${props.project.id}`}><i className="fa  fa-edit"></i></a>&nbsp; &nbsp;
      <a onClick={handleClick} href="/"><i className="fa  fa-trash"></i></a></th>
    </tr>
    
    </LinkContainer>


}