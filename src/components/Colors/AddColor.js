import React from 'react'
import {useInput} from "../../hooks/useInput"

function AddColor({onNewColor = f => f}) {

    const [newTitle, resetTitle] = useInput("")
    const [newColor, resetColor] = useInput("#000000")

    const submit = e => {
        e.preventDefault()
        onNewColor(newTitle.value, newColor.value)
        resetTitle()
        resetColor()
    }

  return (
    <div>
        <form onSubmit={submit}>
        <input {...newTitle} type="text" placeholder="new color title..." required />
        <input {...newColor} type="color" required />
        <button>add</button>
        </form>
    </div>
  )
}

export default AddColor