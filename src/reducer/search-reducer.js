import {SUCCESS} from "../action/search-action";

const searchReducer = (prevState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {...prevState, searchHistory: action.data}
    default:
      throw new Error()
  }
}

export default searchReducer