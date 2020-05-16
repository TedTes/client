import React,{useState,useEffect} from 'react';
import {Table,Button, Nav} from 'react-bootstrap';
import graphQLFetch from './graphqlFetch';
import AddBug from './AddBug';

export default function BugList(props){
const[data,setData]=useState([]);
const proName=props.match.params.proname
// console.log(props.location.search.substr(1));
const handleEdit=(p)=>{
 console.log(p)
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
        
  <AddBug projectName={proName} />
  <div>
  <Table responsive striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Created</th>
      <th>Description</th>
      <th></th>
    </tr>
  </thead>
  <tbody hover>
   {data.map((p,index)=><tr key={index}>
      <td>{p.name}</td>
      <td>{p.status}</td>
      <td>{p.created.toDateString()}</td>
      <td >{p.description}</td>
      <td><a href="/" onClick={handleEdit(p)}><i className="fa fa-edit"></i></a>&nbsp; &nbsp;
      <a href="/"><i className="fa fa-trash"></i></a></td>
    </tr>)}  
  </tbody>
</Table>
  </div>
  </div>
}