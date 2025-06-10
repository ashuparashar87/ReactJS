import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne(){
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [post,setPost]=useState({})
    
    //replce getdidmount 
    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(response=>{
        setLoading(false)
        setPost(response.data)
        setError('')
     })
     .catch(eror=>{
        setLoading(false)
        setPost('{}')
        setError('something went wrong')
    })
    },[])
    return(
        <div>
        <label>This is the Api call Using useState and useEffect: </label>
       {loading?'loading':post.title}
       {error?error:null}
        </div>
)
}
export default DataFetchingOne