import React ,{useState} from 'react';
import {Route} from 'react-router-dom';
import graphQLFetch from './graphqlFetch';
import {LinkContainer} from 'react-router-bootstrap';

export default function ProjectsRows(props){

  const handleDelete=(e)=>{
    if(e.stopPropagation)e.stopPropagation();
   }

  const handleEdit=(e)=>{
    if(e.stopPropagation)e.stopPropagation();
  }

return <LinkContainer to={`/home/${props.project.name}`}>
 <tr className="project-row" key={props.project.key}>
      <th>{props.project.name}</th>
        <th>{props.project.leadName}</th>
        <th>{props.project.created.toDateString()}</th>
      <th ><a onClick={handleEdit} href={`/edit/${props.project.id}`}><i className="fa  fa-edit"></i></a>&nbsp; &nbsp;
      <a onClick={handleDelete} href={`/home?${props.project.id}`}><i className="fa  fa-trash"></i></a></th>
  </tr>
  </LinkContainer>
}