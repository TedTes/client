import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import ProjectRows from './ProjectRows';
import {Route} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import Header from './Header';
import './styles.css';
export default function ProjectList(props){
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
     </div>)
}
  
