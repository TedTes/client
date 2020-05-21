import React ,{useState} from 'react';
import Modal from './Modal';
import graphQLFetch from './graphqlFetch';


export default function DeleteBug(props){
  const[show,setShow]=useState(true); 

  
const handleCancel=()=>{
    setShow(false);
}
const handleDelete=async(e)=>{

    if(e.stopPropagation)e.stopPropagation();
    const query=`mutation deleteBug($id:Int!){
      deleteBug(id:$id)
    }`
   const id=Number(props.id);
    const res=await graphQLFetch(query,{id})
    if(res){
        setShow(false)
        props.loadBugs();
    } 
    }
    return(<Modal show={show} handleCancel={handleCancel} handleDelete={handleDelete}/>)
}