import React,{useState,useEffect} from 'react';
import {Table,Button, Nav,Row,Col} from 'react-bootstrap';
import graphQLFetch from './graphqlFetch';
import AddBug from './AddBug';
import DeleteBug from './DeleteBug';
import {LinkContainer} from 'react-router-bootstrap';
// import oadBugs from './LoadBugs'

export default function BugList(props){
const[data,setData]=useState([]);
const proName=props.match.params.proname


const handleEdit=(e)=>{
  // if(e.stopPropagation)e.stopPropagation();
  // e.preventDefault();
  console.log("from hanadle edit");
  console.log(data)
     props.useBugData(data)
}
// const handleDelete=(e)=>{
//   if(e.stopPropagation)e.stopPropagation();
// }

useEffect(()=>loadBugs(),[])

const loadBugs=async()=>{
  const query=`query bugsList($proName:String!){
      bugsList(proName:$proName){
          bugs{
              id
              name
              projectName
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
 
   {data.map((p,index)=><tr key={index}>
  
      <td>{p.name}</td>
      <td>{p.status}</td>
      <td style={{width:"170px"}}>{p.created.toDateString()}</td>
      <td  style={{width:"450px"}}>{p.description}</td>
      <td style={{width:"70px"}} ><a onClick={handleEdit()} href={`/bugedit/${p.projectName}?${p.id}`}><i className="fa  fa-edit"></i></a>&nbsp; &nbsp;
      <a  href={`/home/${p.projectName}?${p.id}`}><i className="fa  fa-trash"></i></a></td>
    </tr>)}  
  </tbody>
</Table>
  </div>
</Col></Row>  
     {props.location.search.slice(1)? <DeleteBug loadBugs={loadBugs} id={props.location.search.slice(1)}/>:''}
  </div>
}