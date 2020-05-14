import React,{useState,useEffect} from 'react';
import ProjectList from './ProjectList';
import graphQLFetch from './graphqlFetch';
import {Col,Row} from 'react-bootstrap';
import Header from './Header';
import {Route,Redirect,Switch} from 'react-router-dom';
import ProjectEdit from './ProjectEdit'
import About from './About.js'
// import AddProject from './AddProject';
import BugList from './BugList';
import {LinkContainer} from 'react-router-bootstrap';


export default function Page(){

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
 return(<div>
     <Header/>
   <Row >
        <Col>
            <Switch>
             <Route exact={true} path={'/home'} render={(routeProps)=><ProjectList data={data}/>} />
             <Route  path="/home/:proname" render={(routeProps)=><BugList {...routeProps}/>}/>
             <Route path="/edit/:id" render={(routeProps)=><ProjectEdit data={data} {...routeProps}/>}/>
             <Redirect to={"/home"}/>
           </Switch>
            </Col> 
     </Row>
</div>)
}