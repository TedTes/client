import React,{useState,useEffect} from 'react';
import ProjectList from './ProjectList';
import graphQLFetch from './graphqlFetch';
import {Col,Row} from 'react-bootstrap';
import Header from './Header';
import {Route,Redirect,Switch} from 'react-router-dom';
import ProjectEdit from './ProjectEdit'
import AddProject from './AddProject';
import Members from './Members';
import About from './About.js';
import Login from './Login';
import Register from './Register';
import BugList from './BugList';
import BugEdit from './BugEdit'
import DeleteProject from './DeleteProject';


export default function Page(props){

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
     const deletedSignal=(e)=>{
         e.preventDefault();
         console.log("hey")
         setData(data=>[...data,data]);
        }
      
     
 return(<div>
     <Header {...props}/>
   <Row >
        <Col>
            <Switch>
             <Route exact={true} path={'/home'} render={(routeProps)=><ProjectList deletedSignal={deletedSignal} data={data} {...routeProps}/>} />
             <Route path={'/members'} render={(routeProps)=><Members data={data}/>} />
             <Route  path={'/about'} render={(routeProps)=><About {...routeProps} />} />
             <Route  path="/home/:proname" render={(routeProps)=><BugList {...routeProps}/>}/>
             <Route path="/edit/:id" render={(routeProps)=><ProjectEdit data={data} {...routeProps}/>}/>
             <Route path="/delete/:id" render={(routeProps)=><DeleteProject data={data} {...routeProps}/>}/>
             <Route path='/addproject' render={(routeProps)=><AddProject data={data} {...routeProps}/>}/>
             <Route path='/login' render={(routeProps)=><Login {...routeProps}/>}/>
             <Route path='/register' render={(routeProps)=><Register {...routeProps}/>}/>
             <Route path='/bugedit' render={(routeProps)=><BugEdit {...routeProps}/>}/>
            
             <Redirect to={"/home"}/>
           </Switch>
            </Col> 
     </Row>
</div>)
}