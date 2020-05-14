import React,{useEffect,useState} from 'react';
import ProjectList from './ProjectList';
import {Route,Redirect} from 'react-router-dom';
import graphQLFetch from './graphqlFetch';
import BugList from './BugList';
export default function Connector(props){

 const [data,setData]= useState([]);
    useEffect(()=>{
        async function loadData(){
          const query=`query queryProjects{
                queryProjects{
                    projects{
                        id
                        name
                        leadName
                        created
                }
                }
                }`
             
               const res=await graphQLFetch(query)
         if(res){
                setData([...data,...res.queryProjects.projects])
            }
            
        }
        
  loadData();
     },[])

     return<div>
        <Route path='/projectlist' render={(routeProps)=><ProjectList data={data} {...routeProps}/>}/>
          </div>
}