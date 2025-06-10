import {useEffect} from 'react'
function UseUpdateTitle(count)
{
 useEffect(()=>{
    document.title= `Count ${count}`
 },[count])
    
}
export default UseUpdateTitle