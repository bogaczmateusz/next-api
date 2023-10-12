"use client"

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectTest, setTest } from "@/redux/slices/common.slice"

const ReduxTest = () => {
  const dispatch = useDispatch()
  const test = useSelector(selectTest)

  const [value, setValue] = React.useState<string>("")

  return (
    <div>
      <h2>Redux value is: {test}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type new Redux value"
        className="block border border-[#000000] border-solid"
      />
      <button onClick={() => dispatch(setTest(value))}>Set redux value</button>
    </div>
  )
}

export default ReduxTest
