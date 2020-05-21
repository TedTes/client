import React from 'react';
import graphQLFetch from './graphqlFetch';
export default function LoadBugs(proName){

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
console.log("from res");
console.log(res.bugsList.bugs);
 return res.bugsList.bugs;
}}