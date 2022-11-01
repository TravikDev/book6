import React from 'react'
import StarList from "../Rating/StarList"
import { FaTrash } from "react-icons/fa"

function ColorItem({id, title, color, rating, onDelete = f => f, onRate = f => f}) {
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={() => onDelete(id)}><FaTrash /></button>
        <div style={{height: "4rem", backgroundColor: color}} />
        <StarList rating={rating} onRate={index => onRate(index, id)} />
    </div>
  )
}

export default ColorItem