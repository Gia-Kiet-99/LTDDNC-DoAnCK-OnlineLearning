import instance from "../configuration/axios-config";

export const apiGetSearchHistory = async () => {
  return await instance.get('/course/search-history')
}