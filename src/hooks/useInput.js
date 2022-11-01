import { useState } from "react"

export const useInput = (initialState) => {

    const [value, setValue] = useState(initialState)

  return [
    {value, onChange: (event) => setValue(event.target.value)},
    () => setValue(initialState)
  ]
}
