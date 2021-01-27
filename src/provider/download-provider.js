import React, {createContext, useState} from 'react'

export const DownloadContext = createContext()

const DownloadProvider = (props) => {
  const [shouldUpdateDownloadList, setShouldUpdateDownloadList] = useState(false)

  return (
    <DownloadContext.Provider
      value={{shouldUpdateDownloadList, setShouldUpdateDownloadList}}>
      {props.children}
    </DownloadContext.Provider>
  )
}

export default DownloadProvider;