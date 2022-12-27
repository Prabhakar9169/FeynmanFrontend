import React,{useEffect, useState} from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
  const[data , setData] = useState([])
  const [singleData , setSingleData]= useState([])
   const navigate = useNavigate()
  const username = localStorage.getItem("name")

  const handleClick = ()=>{
    navigate('/addTopic')  
    
  }
  
 const getData = async()=>{
  await axios.get("http://localhost:8000/api/v1/topic").then(res=>setData(res.data))
 }

 
  const result = data.find(item=>item.name === username)  
  console.log(result , "res");
   
 console.log(singleData);
 
// console.log(  data.find(item=>item.name === username) , "jdshkjs");
console.log(data.find(item=>item.name === username) , "hgfhf");
useEffect(()=>{
  getData()
  setSingleData(result)
},[])
  return (
    <>
   <div  className='user1'>
      <div className='box1' >
        <h1>DASHBOARD</h1>
        <div className='main'>
          <div className='div1'>
          <button type="submit" className=" btn1 " onClick={handleClick}>Add Topic</button>
          </div>
          <div className='div2'>
            <h4>Topic List</h4>
            <div className='topic'>
              {data.map(item=>{
                
                return <ul className='ul'>
                  <li>{item.title } : &nbsp;<span >&nbsp;{item.percentage} %</span></li>
                </ul>
              })}
            </div>
          </div>
        </div>
      </div>

   </div>
   </>
  )
}

export default Dashboard