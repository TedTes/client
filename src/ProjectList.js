import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import ProjectRows from './ProjectRows';
import {Route} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import Header from './Header';
import DeleteProject from './DeleteProject';
import './styles.css';
export default function ProjectList(props){
    console.log(props.location.search.slice(1));
    const handleClick=()=>{
        props.history.push('/addproject')
        
        }
return(<div className="projectslist container">
    <Row className="company-projects"><Col>Company Projects</Col><Col><div className="add-project-button" onClick={handleClick}>
  Add Project</div></Col></Row>
          <Row>
            <Col>
            <Table striped hover>
            <thead >
                <tr>
                <th>Projects</th>
                <th>Project Manager</th>
                <th>Created Date</th>
                </tr>
            </thead>
     <tbody>
          {props.data.map((p,index)=><ProjectRows project={p} key={index}/>
        )}
    </tbody>       
        </Table>
            </Col>
        </Row>
       { props.location.search.slice(1)?<DeleteProject id={props.location.search.slice(1)} deletedSignal={props.deletedSignal} {...props}/>:''}
     </div>)
}
  
