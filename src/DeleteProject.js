import React,{useState, useEffect} from 'react';
import graphQLFetch from './graphqlFetch';
import Modal from './Modal';
export default function DeleteProject(props){
    const [show, setShow] = useState(true);

   
  const handleCancel = () => {
      setShow(false);
      props.history.push('/home')
    }
  const handleDelete = async() => {
      const id=Number(props.id);
    
    const query=`mutation deleteProject($id:Int!){
        deleteProject(id:$id)
      }`
      const data=await graphQLFetch(query,{id});  
    if(data){
        setShow(false);
         props.history.push('/home')
        props.deleteData();
      }
    }
  return ( <div> 
    <Modal show={show} handleCancel={handleCancel} handleDelete={handleDelete}/>
    </div>)

}


