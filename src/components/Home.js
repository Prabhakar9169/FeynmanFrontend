import React,{useState , useEffect} from 'react'
import './Home.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Home() {
  
  const [data , setData]= useState({name:""})

  const navigate = useNavigate()
  localStorage.setItem('name' , data.name)

const  handleChange = (e)=>{
    e.preventDefault()
    setData({[e.target.name]:e.target.value})
   
}


const createUser  = async(e)=>{
  e.preventDefault()
  if(data.name === "")  alert("Please Enter Name")
    await axios.post("http://localhost:8000/api/v1/user" , data).then(res=>console.log(res.data)).catch(err=>console.log(err.response.data.message))
    navigate(`/dashboard`)
  
}



useEffect(()=>{
    createUser()
  
},[])

  return (
   <>
   <div  className='user'>
      <div className='box' >
        <h1>FEYNMAN BOARD</h1>
      <form >
     
  <div className="form-group">
  <h3>Enter User Name</h3>
    <input type="text" name="name"className="form-control"  placeholder="Enter User name" onChange={handleChange}/>
  </div>
  <div className='button' >
  <button type="submit" className="btn btn-success mt-4" onClick={createUser}>Submit</button>
  </div>
</form>
      </div>

   </div>
   </>
  )
}

export default Home