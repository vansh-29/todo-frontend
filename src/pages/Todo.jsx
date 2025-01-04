import Todocards from './Todocards';
import React, { useState , useEffect} from 'react'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; 
import './Todo.css'
import Update from './Update';

// let id = cookies;
import { ToastContainer, toast } from 'react-toastify';
const Todo = () => {
   const [indexToBeUpdated, setindexToBeUpdated] = useState(null)
    const [Inputs, setInputs] = useState({title:"" , body :""});
    const [Array, setArray] = useState([]);
    const [userId, setUserId] = useState(null);
    const show =()=>{
      document.getElementById("textarea").style.display="block"
    }
    useEffect(() => {
      console.log("cookie is")
      console.log(document.cookie)
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
          const [key, value] = cookie.trim().split('=');
          acc[key] = value;
          return acc;
      }, {});
      console.log(cookies);
      const token = cookies['login'];
      console.log(token);
      if (token) {
          const decoded = jwtDecode(token); // Decode the JWT to get user details
          setUserId(decoded.payload); // Assuming `payload` contains the user ID
          console.log("decoded is" , decoded);
          console.log("decoded.payload is" , decoded.payload);
          console.log("user id is" , userId);
      } else {
          toast.error("No login cookie found!");
      }
    }, []);

    // Fetch tasks when userId is set
    useEffect(() => {
        if (userId) {
            axios
                .get(`${window.location.origin}/user/get/${userId}` ,  {
                  withCredentials: true, // Enables cookies to be sent
                }) // Use the full URL for the API
                .then((response) => {
                  console.log("response is" , response);
                    if (response.data.success) {
                        setArray(response.data.tasks); // Assuming tasks are in the response
                        toast.success("Tasks loaded successfully!");
                    } else {
                        toast.error(response.data.message || "Failed to load tasks.");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                    toast.error("Error fetching tasks.");
                });
        }
    }, [userId]);
    const change = (e) => {
        const { name , value} = e.target;
        setInputs({...Inputs, [name]:value });
    }

    const submit = async () => {
    //   console.log(Inputs);

        const response = await axios.post( `${window.location.origin}/user/add/${userId}` , {title : Inputs.title ,body: Inputs.body} ,
          {
            withCredentials:true,
          }
        );
        console.log(response);
        setArray(response.data.allTasks);
        setInputs({title:"" , body :""})
        console.log(Array)
        toast.success("task added");

    }
    const del = async (id) => {
      // id = taask id
      console.log(id);
      const response = await axios.delete(`${window.location.origin}/user/delete/${id}` , {withCredentials:true})
      
      setArray(response.data.allTasks);
      toast("task deleted");
    }

    const dis = (index) => {
      console.log(index)
      document.getElementById("todo-update").style.display = index;
    }
  return (
    <>
      <div className='todo w-full h-screen '>
      <ToastContainer />
        <div className='todo-main container flex flex-col justify-center items-center  '>
            <div className='todo-inputs-div flex flex-col my-4 items-center p-1 border-solid'>
              <input onChange={change}  type="text" name='title' placeholder='TITLE ' value={Inputs.title}
              className='todo-inputs my-4 w-72 border-r-2  border-none outline-none  p-2'  onClick={show}/>

              <textarea onChange={change} id='textarea' type="text" name='body' placeholder='BODY' value={Inputs.body}
               className='todo-inputs w-72 p-2 border-none outline-none hidden'/>
            </div>

            <div className='flex justify-start'>
              <button className='home-btn  px-2 py-1 -mx-36 border-red-400 bg-slate-400' onClick={submit}> Add</button>
            </div>
        </div>
        <div className="todo-body">
            <div className='container-fluid'>
              <div className=" grid grid-cols-4 gap-4 mx-5 my-3">
                  {Array 
                  && Array.map((item,index) => (
                    <div className=' ' key={index}>
                      <Todocards  title={item.title} body={item.body} task={Array}  setindexToBeUpdated={setindexToBeUpdated} id={index} delid={del} display={dis}/>
                    </div>
                  ))}
              </div>
            </div>
        </div>
      </div>
      <div className="todo-update" id='todo-update'>
        <div className="container h-full w-full mx-auto">
          <Update display={dis} index={indexToBeUpdated} task={Array} setTask={setArray} />
        </div>
      </div>
    </>
  )
}

export default Todo;