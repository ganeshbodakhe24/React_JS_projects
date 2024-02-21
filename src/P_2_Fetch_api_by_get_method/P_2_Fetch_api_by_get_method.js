
import { useEffect,useState } from "react";

function P_2_Fetch_api_by_get_method(){
    let[data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000")
        .then((result)=>{
            result.json()
            .then((resp)=>{
                setData(resp);
            })
        })
    })
    return(
        <>
        {
            data.map((item)=>(
                <Users data={item}></Users>
                ))
        }
        </>
    )
}

function Users(props){
    const {data}=props;
    return(
        <>
        <div style={{background:"yellow",margin:"30px", padding:"10px"}}>
       <h1>Name: {data.name} | RollNo :{data.rollno}</h1>
       </div>
        </>
    )
}

export default P_2_Fetch_api_by_get_method;