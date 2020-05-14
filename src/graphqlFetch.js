
const dateRegExp=new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
export default async function graphqlFetch(query,variables={}){
  
    let options={
        method:"POST",
        headers:{"content-type":'application/json'},
        body:JSON.stringify({query,variables})

    }
try{
    
    let response=await fetch("http://localhost:4000/graphql",options);
     response= await response.text();
    let result=JSON.parse(response,(key,value)=>{
     if(dateRegExp.test(value))
     return new Date(value)
        return value;
    })
    return result.data;
}
   catch(e){
       console.log(e);
   }
  
}