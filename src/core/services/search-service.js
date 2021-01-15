import instance from "../configuration/axios-config";
import {getAuthTokenFromStorage} from "../utils/async-storage-service";

export const apiGetSearchHistory = async () => {
  return await instance.get('/course/search-history')
}

export const apiDeleteSearchHistory = async (historyId) => {
  return await instance.delete(`/course/delete-search-history/${historyId}`)
}

export const apiGetSearchResultV2 = async (keyword) => {
  const token = await getAuthTokenFromStorage()
  return await instance.post('/course/searchV2', {
    token: token,
    keyword: keyword,
    limit: 100,
    offset: 1,
    opt: {
      sort: {
        attribute: "price",
        rule: "ASC"
      },
      category: [],
      time: [
        {
          min: 0
        }
      ],
      price: [
        {
          min: 0
        }
      ]
    }
  })
}