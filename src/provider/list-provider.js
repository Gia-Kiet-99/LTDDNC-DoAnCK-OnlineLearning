import React, {createContext, useState} from 'react'
import {View} from 'react-native'

export const ListContext = createContext()

function ListProvider(props) {
  /**
   * shouldUpdateList is state of SectionListContext: it tells us whether continue learning list should update
   * */
  const [shouldUpdateList, setShouldUpdateList] = useState(false)

  return (
    <ListContext.Provider value={{shouldUpdateList, setShouldUpdateList}}>
      {props.children}
    </ListContext.Provider>
  )
}

export default ListProvider;