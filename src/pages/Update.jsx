import React, { useState ,useEffect } from 'react'
import './Todo.css'
import axios from 'axios'
const Update = ({display,index,task , setTask} ) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const  updateTask = async () =>{
      const response = await axios.put(`${window.location.origin}/user/update/${task[index]._id}` , 
      {title : title , body:body} , { withCredentials: true, });
      
      display("none")
      setTask(response.data.allTasks);
      alert("task updated")
      
  }
  useEffect(() => {
    if(index!= null){
      settitle(task[index].title);
      setbody(task[index].body);
    }
    
  } , [index])
  return (
    
    <div className='p-5 bg-slate-500 flex content-center update items-start flex-col gap-4'>
      <h3  className='text-5xl'>Update Your Task</h3>
      <input onChange={(e)=>{
          console.log(e , e.target , e.target.value);
          settitle(e.target.value);
      }} 
      value={title} type="text"  className='todo-inputs my-4 w-[1000px] p-3'/> 
      <textarea onChange={(e)=>{
          console.log(e , e.target , e.target.value);
          setbody(e.target.value);
      }} 
       value={body} type="text" className='todo-inputs w-[1000px] p-3' ></textarea>
      <div>
        <button className='my-4 btn-dark bg-gray-600 border-black border-2 rounded-md p-2 mx-5' 
          onClick={ updateTask}>
          UPDATE</button>
        <button className='my-4 btn-dark bg-gray-600 border-black border-2 rounded-md p-2' 
          onClick={ () => {
            display("none")
          }}
          >CLOSE</button>
      </div>
    </div>
  )
}

export default Update