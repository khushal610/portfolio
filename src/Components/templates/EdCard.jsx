import React from 'react'
import { FaSchool } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

function EdCard({title,subTitle,time}) {
  return (
    <>
        <div className='card'>
            <h1 className='text-2xl'>{title}</h1>
            <h4 className='flex items-center gap-1'><FaSchool /> {subTitle}</h4>
            <h4 className='flex items-center gap-1'><FaCalendarAlt /> {time}</h4>
        </div>
    </>
  )
}

export default EdCard
