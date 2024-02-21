
import { useState } from 'react';
function P_1_inc_dec_count() {
  let [count,setCount]=useState(0);
  return (
   <>
   
   <div style={{textAlign:"center"}}>
   <h1>Increase and Decrease count </h1>
    <h1>count : {count}</h1>
    <br></br><br></br>
    <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
    <br></br><br></br>
    <button onClick={()=>{setCount(count-1)}}>Decrease Count</button>
   </div>
   
   </>
  );
}

export default P_1_inc_dec_count;
