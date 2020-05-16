import React,{useState,useEffect} from 'react';
import {Table,Button, Nav,Row,Col} from 'react-bootstrap';
import graphQLFetch from './graphqlFetch';
import AddBug from './AddBug';
import {LinkContainer} from 'react-router-bootstrap';


export default function BugList(props){
const[data,setData]=useState([]);
const proName=props.match.params.proname
// console.log(props.location.search.substr(1));
const handleDelete=(e)=>{
  if(e.stopPropagation)e.stopPropagation();
}
const handleEdit=(e)=>{
  if(e.stopPropagation)e.stopPropagation();
}

useEffect(()=>{
    async function loadBugs(){
    const query=`query bugsList($proName:String!){
        bugsList(proName:$proName){
            bugs{
                name
                status
                created
                description
            }
           }
    }`
const res= await graphQLFetch(query,{proName})
const state=res.bugsList.bugs;
if(res)
{
    setData([...state]);
  
}
}
loadBugs();
},[])
return<div className="container buglist">
  <Row>
  <Col><AddBug projectName={proName} /></Col>
    </Row>  
    <Row>
<Col>
<div>
  <Table striped >
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Created</th>
      <th>Description</th>
      <th></th>
    </tr>
  </thead>
  <tbody >
    {  console.log(data)}
   {data.map((p,index)=><tr key={index}>
      <td>{p.name}</td>
      <td>{p.status}</td>
      <td style={{width:"170px"}}>{p.created.toDateString()}</td>
      <td  style={{width:"450px"}}>{p.description}</td>
      <td style={{width:"70px"}} ><a onClick={handleEdit} href='/bugedit'><i className="fa  fa-edit"></i></a>&nbsp; &nbsp;
      <a onClick={handleDelete} href="/"><i className="fa  fa-trash"></i></a></td>
    </tr>)}  
  </tbody>
</Table>
  </div>
</Col></Row>    
  </div>
}