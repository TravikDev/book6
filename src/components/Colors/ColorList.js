import { useState, useContext } from "react"
// import colorData from "../../data/color-data.json"
import ColorItem from "./ColorItem"
import AddColor from "./AddColor"
// import { ColorContext } from "../.."

function ColorList() {

    // const {colorData} = useContext(ColorContext)

    // const [colors, setColors] = useState(colorData)

    // const handleDelete = id => {
    //     setColors(colors.filter(color => color.id !== id))
    // }

    // const handleRate = (index, id) => {
    //     setColors(colors.map(color => color.id === id ? {...color, rating: index} : color))
    // }

    // const handleNewColor = (title, color) => {
    //     setColors([...colors, {id: colors[colors.length-1].id+1, title, color, rating: 0}])
    // }
  
  return (
    <div>
    <AddColor 
        // onNewColor={(title, color) => handleNewColor(title, color)}
    />
    {(colorData.length !== 0) ? (
    colorData.map(color =>
    <ColorItem
        key={color.id}
        {...color}
        // onDelete={id => handleDelete(id)}
        // onRate={(index, id) => handleRate(index, id)}
        
    />
    )) : (<h1>No items</h1>)}
    </div>
  )
}

export default ColorList