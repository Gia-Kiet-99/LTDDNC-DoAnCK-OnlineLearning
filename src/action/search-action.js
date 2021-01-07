import {apiGetSearchHistory} from "../core/services/search-service";

export const SUCCESS = "SUCCESS"
export const FAILED = "FAILED"

export const getSearchHistory = async (dispatch) => {
  try {
    const response = await apiGetSearchHistory()
    if (response.status === 200) {
      console.log(response.data.payload)
      dispatch({type: SUCCESS, data: response.data.payload})
    }
  } catch (e) {
    console.log("Error getSearchHistory: ", e)
  }
}