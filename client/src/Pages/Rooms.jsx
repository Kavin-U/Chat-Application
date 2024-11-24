import React from 'react'
import { useParams } from 'react-router-dom'

export default function Rooms() {
   const params = useParams()
  return (
    <div className='w-full h-[50px] flex items-center px-5 bg-teal-950'>
        <h1 className='text-white'>{params.RoomId}</h1>
    </div>
  )
}
