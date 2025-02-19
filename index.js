import React from "react";
import { useEffect,useState } from "react";


function Valid(){

 const [data,setData]=useState({
    first:'',
    last:'',
    email:'',
    password:'',
    confirm:'',
 })

 const[massage, setMessage]=useState('')

 useEffect(()=>{
    if(data.first || data.last || data.email || data.password || data.confirm){
       setMessage("You're updating the form...")
    }
    else{
        setMessage("")
    }
 })

 const handlechange = (event)=>{
    setData(event.target.value)
 }


 const handlesubmit = ((e)=>{
    e.preventDefault();
    console.log("User Registered:", data);
   alert('Sign-up Successful!')
 })


  return(<div>
    <form onSubmit={handlesubmit} style={{maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px"}}>
    <h1>Sign-Up Form</h1>

     {massage && <p style={{color:'blue'}}>{massage}</p>}
  
    
          <div>
          <label>Firstname</label>
            <input type="text" value={data.first} placeholder="enter name" onChange={handlechange} required />
          </div>

          <div>
          <label>Lastname</label>
            <input type="text" value={data.last} placeholder="enter name" onChange={handlechange} required />
          </div>

          <div>
          <label>Email</label>
            <input type="email"  value={data.email} placeholder="enter name" onChange={handlechange}  required/>
          </div>

          <div>
             <label>Password</label>
            <input type="password" value={data.password} placeholder="enter name" onChange={handlechange} required/>
          </div>

          <div>
          <label>Confirm Password</label>
            <input type="password" value={data.confirm} placeholder="enter name" onChange={handlechange}  required/>
          </div>

          <div className="btn">
            <button type="submit"> Sign-Up</button>
          </div>


          </form>
  </div>)














}

export default Valid;