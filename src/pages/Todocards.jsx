import React, { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './Todo.css'
const Todocards = ({title,body,id , setindexToBeUpdated,task, delid , display}) => {

  return (
    <div className='p-3 flex flex-col todo-card border-2 border-black rounded-[3px]'>
        <div>
            <h1 className='text-40xl mb-2'>{title}</h1>
            <p className='todo-card-p  text-xl text-justify  '> {body.split("",16)}...</p>
        </div>
        <div className='flex place-content-between text-left'>
          <div className='flex text-lg cursor-pointer content-center items-center card-icon-head px-2 py-1' 
            onClick={() => {
              display("block");
              setindexToBeUpdated(id);
            }}
          >
            <FaEdit /> 
            Update
          </div>
          <div className='flex text-lg text-red-700 cursor-pointer content-center items-center card-icon-head px-2 py-1' 
          onClick={() => {
            console.log(id)
            delid(task[id]._id); 
          }}>
            <MdDeleteOutline />Delete
          </div>
        </div>
    </div>
  )
}

export default Todocards