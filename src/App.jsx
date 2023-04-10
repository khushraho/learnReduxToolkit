import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement} from "./states/reducers/incdecSlice"

const App = () => {
  const curState=useSelector((state)=>state.number);
  const dispatch=useDispatch();
  return (
    <>
    <h1>React Redux Tutorial</h1>
    <div style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
      <h1>{curState}</h1>
      <div>
        <button onClick={()=>dispatch
        (increment(10))}>INC</button>
        <button onClick={()=>dispatch
        (decrement())}>DEC</button>
      </div>
    </div>
    </>
  )
}

export default App