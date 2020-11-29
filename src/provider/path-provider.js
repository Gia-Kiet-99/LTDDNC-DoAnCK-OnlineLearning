import React, {createContext, useState} from 'react'
import {paths} from "../localize/data";

export const PathContext = createContext()
function PathProvider(props) {
  const [pathList, setPathList] = useState(paths)

  return (
    <PathContext.Provider value={{pathList}}>
      {props.children}
    </PathContext.Provider>
  )
}

export default PathProvider;