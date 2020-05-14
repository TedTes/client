import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import ProjectRows from './ProjectRows';
import {Route} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import Header from './Header';

export default function ProjectList(props){
return(<div className="projectslist container">
          <Row>
            <Col>
            <Table striped hover>
            <thead>
                <tr>
                <th>Projects</th>
                <th>Lead</th>
                <th>created</th>
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
  
