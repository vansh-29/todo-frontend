import Cookie from 'js-cookie';
import React, { useState, useEffect } from "react";
import { decodeToken, useJwt } from "react-jwt";
import axios from 'axios'
// Styles
const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#f3f4f6',
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer'
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  padding: '1.5rem'
};

export default function Dashboard({ username = "User" }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedTasks, setExpandedTasks] = useState([]);

  
  const token = localStorage.getItem('token');
  const { decodedToken } = useJwt(token);
  const fetchTasks = async () => {
    try {
      // setLoading(true);
      // Retrieve userId from localStorage
    

     
      console.log("first")
     // Fetch tasks from the backend using the userId
      const response = await axios.get(`${window.location.origin}/user/get`,{
        withCredentials : true
      }); // Adjust URL as per your backend
      const data = await response.json();
      console.log(data);
      console.log(response)
      // if (response.ok) {
      //   console.log(data)
      //   setTasks(data.tasks); // Assuming tasks come in a `tasks` array
      // } else {
      //   setError(data.message || 'Failed to fetch tasks.');
      // }
    }
    catch (err) {
      setError('Error fetching tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };
fetchTasks();
  // useEffect(() => {
  //   if (!token) {
  //     setError('Token not found! Please login again.');
  //     setLoading(false);
  //     return;
  //   }
    
  //   fetchTasks();
  // }, []);

  // Fetch tasks based on the userId stored in localStorage

  // Toggle task completion status (simulated update)
  // const toggleTaskCompletion = async (taskId) => {
  //   try {
  //     // Simulate API call to update task completion
  //     await new Promise(resolve => setTimeout(resolve, 500));
  //     setTasks(tasks.map(task =>
  //       task.id === taskId ? { ...task, completed: !task.completed } : task
  //     ));
  //   } catch (err) {
  //     setError('Error updating task. Please try again.');
  //   }
  // };

  // // Toggle task expansion for additional details
  // const toggleTaskExpansion = (taskId) => {
  //   setExpandedTasks(prev =>
  //     prev.includes(taskId)
  //       ? prev.filter(id => id !== taskId)
  //       : [...prev, taskId]
  //   );
  // };

  // If loading, show loading spinner or message
  // if (loading) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <div>Loading...</div>
  //     </div>
  //   );
  // }

  // If there's an error, show error message and retry button
  // if (error) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <div style={cardStyle}>
  //         <p style={{ color: 'red' }}>{error}</p>
  //         <button onClick={fetchTasks} style={{ ...buttonStyle, marginTop: '1rem' }}>Retry</button>
  //       </div>
  //     </div>
  //   );
  // }
  console.log(tasks)

  // Render tasks list
  return (
    // <div style={{ maxWidth: '42rem', margin: '0 auto', padding: '1rem' }}>
    //   <div style={cardStyle}>
    //     <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, {username}!</h1>
    //     <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '1rem' }}>Your Tasks</h2>
    //     {tasks?.length == 0 ? (
    //       <p>You have no tasks. Enjoy your free time!</p>
    //     ) : (
    //       <ul style={{ listStyle: 'none', padding: 0 }}>
    //         {tasks.map(task => (
    //           <li key={task.id} style={{ backgroundColor: '#f3f4f6', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
    //             <div style={{ display: 'flex', alignItems: 'center' }}>
    //               <input
    //                 type="checkbox"
    //                 id={`task-${task.id}`}
    //                 checked={task.completed}
    //                 onChange={() => toggleTaskCompletion(task.id)}
    //                 style={{ marginRight: '0.5rem' }}
    //               />
    //               <label
    //                 htmlFor={`task-${task.id}`}
    //                 style={{
    //                   flexGrow: 1,
    //                   cursor: 'pointer',
    //                   textDecoration: task.completed ? 'line-through' : 'none',
    //                   color: task.completed ? '#6b7280' : 'inherit'
    //                 }}
    //               >
    //                 {task.title}
    //               </label>
    //               <button
    //                 onClick={() => toggleTaskExpansion(task.id)}
    //                 aria-expanded={expandedTasks.includes(task.id)}
    //                 aria-controls={`task-body-${task.id}`}
    //                 style={{ ...buttonStyle, padding: '0.25rem 0.5rem' }}
    //               >
    //                 {expandedTasks.includes(task.id) ? '▲' : '▼'}
    //               </button>
    //             </div>
    //             {expandedTasks.includes(task.id) && (
    //               <div
    //                 id={`task-body-${task.id}`}
    //                 style={{ marginTop: '0.5rem', marginLeft: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}
    //               >
    //                 {task.body}
    //               </div>
    //             )}
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </div>
    <div>
      <h1>{tasks}</h1>
    </div>
  );
}
