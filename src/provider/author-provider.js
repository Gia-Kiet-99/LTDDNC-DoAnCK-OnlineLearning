import React, {createContext, useState} from 'react'
import {authors} from "../localize/data";

export const AuthorContext = createContext()

function AuthorProvider(props) {
  const [authorList, setAuthorList] = useState(authors)

  const getAuthorById = (id) => {
    return authorList.find(obj => obj.id === id)
  }

  return (
    <AuthorContext.Provider value={{authorList, getAuthorById}}>
      {props.children}
    </AuthorContext.Provider>
  )
}

export default AuthorProvider;