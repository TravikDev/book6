import {createContext, useState} from 'react'
import colorData from "../../data/color-data.json"

const ColorContext = createContext()

function ColorProvider({children}) {

    const [colors, setColors] = useState(colorData)

  return (
    <ColorContext.Provider value={{colors, setColors}}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider