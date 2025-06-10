import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const  initialstate={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
        case'FETCH_SUCCESS':
        return {
            loading:false,
            error:'',
            post:action.payload
        }
        case'FETCH_ERROR':
        return {
            loading:false,
            error:'something went wrong',
            post:{}
        }
        default:
            return state
        }
}

function DataFetchingTwo(){

  const [state,dispatch] = useReducer(reducer,initialstate)
    //replce getdidmount 
    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts/2')
     .then(response=>{
       dispatch({type:'FETCH_SUCCESS',payload:response.data})
     })
     .catch(eror=>{
        dispatch({type:'FETCH_ERROR'})

    })
    },[])
    return(
        <div>
        <label>This is the Api call Using useReducer and useEffect: </label>
       {state.loading?'loading':state.post.title}
       {state.error?state.error:null}
        </div>
)
}
export default DataFetchingTwo