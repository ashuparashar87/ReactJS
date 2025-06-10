import React,{useState,useEffect} from 'react'
import UseUpdateTitle from '../Hooks/UpdateTitle'

function UseCustomHook()
{
 const [count, setCount]=useState(0)
 UseUpdateTitle(count)
 
 // it is side effect
//  useEffect(()=>{
//     document.title= `Count ${count}`
//  },[count])

    return(
        <div>
         <button onClick={()=>setCount(count+1)}>count-{count}</button>
        </div>
    )
}
export default UseCustomHook