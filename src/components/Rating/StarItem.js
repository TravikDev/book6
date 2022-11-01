import React from 'react'
import {FaStar} from "react-icons/fa"

function StarItem({rating, index, onRate = f => f}) {
  return (
    <FaStar
        color={rating>index ? "red" : "grey"}
        onClick={() => onRate(index+1)}
    />
  )
}

export default StarItem