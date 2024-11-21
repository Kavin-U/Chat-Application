import React from 'react'
import { useParams } from 'react-router-dom'

export default function Rooms() {
   const params = useParams()
  return (
    <div>
        <h1>Rooms {params.RoomId}</h1>
    </div>
  )
}
