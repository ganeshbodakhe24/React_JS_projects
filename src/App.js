import P_1_inc_dec_count from './P_1_inc_dec_count/P_1_inc_dec_count';
import P_2_Fetch_api_by_get_method from './P_2_Fetch_api_by_get_method/P_2_Fetch_api_by_get_method';
import { useState } from 'react';
function App() {
  let [count,setCount]=useState(0);
  return (
   <>
   {/* <P_1_inc_dec_count></P_1_inc_dec_count> */}
   <P_2_Fetch_api_by_get_method></P_2_Fetch_api_by_get_method>
   </>
  );
}

export default App;
