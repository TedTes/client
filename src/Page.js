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
         return res;
        }
export default function Page(props){
    const [data,setData]= useState([]);
    const [bugData,setBugData]=useState({})
 const triggerCall=async()=>{
   const res=await loadData();
    if(res){
        setData([...res.queryProjects.projects])
    }
 }
    useEffect(()=>triggerCall(),[]);

    const reloadData=async()=>triggerCall();
    const deleteData=async()=>triggerCall();

     const useBugData=(bgdata)=>{
        console.log("from bgdata")
        console.log(bgdata)
         setBugData(()=>bgdata)
     }
 return(<div>
     <Header {...props}/>
   <Row >
        <Col>
            <Switch>
             <Route exact={true} path={'/home'} render={(routeProps)=><ProjectList deleteData={deleteData} data={data} {...routeProps}/>} />
             <Route path={'/members'} render={(routeProps)=><Members data={data}/>} />
             <Route  path={'/about'} render={(routeProps)=><About {...routeProps} />} />
             <Route  path="/home/:proname" render={(routeProps)=><BugList useBugData={useBugData} {...routeProps}/>}/>
             <Route path="/edit/:id" render={(routeProps)=><ProjectEdit data={data} {...routeProps}/>}/>
             <Route path='/addproject' render={(routeProps)=><AddProject reloadData={reloadData} data={data} {...routeProps}/>}/>
             <Route path='/login' render={(routeProps)=><Login {...routeProps}/>}/>
             <Route path='/register' render={(routeProps)=><Register {...routeProps}/>}/>
             <Route path='/bugedit/:proname' render={(routeProps)=><BugEdit  bugData={bugData} {...routeProps}/>}/>
             <Redirect to={"/home"}/>
           </Switch>
            </Col> 
     </Row>
</div>)
}