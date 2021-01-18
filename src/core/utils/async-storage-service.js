import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AUTH_STATE_KEY = "@key_authentication_state"
export const TOKEN_KEY = "@key_token"
export const DOWNLOAD_LIST_KEY = "@download_list"

export const saveAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token)
    console.log("Save successfully")
  } catch (e) {
    console.log("AsyncStorageService/saveToken", e)
  }
}

export const getAuthTokenFromStorage = async () => {
  try {
    // console.log("Save successfully")
    return await AsyncStorage.getItem(TOKEN_KEY)
  } catch (e) {
    console.log("AsyncStorageService/saveAuthToken", e)
  }
}

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY)
    console.log("AsyncStorageService/removeAuthToken: successfully")
  } catch (e) {
    console.log("AsyncStorageService/removeAuthToken", e)
  }
}

export const getDownloadedListFromStorage = async () => {
  const jsonData = await AsyncStorage.getItem(DOWNLOAD_LIST_KEY)
  let result = JSON.parse(jsonData)
  if (!result) {
    result = []
  }
  return result
}

export const isCourseDownloaded = async (courseId) => {
  const downloadList = await getDownloadedListFromStorage()
  return downloadList.find(course => course.id === courseId)
}

export const saveDownloadCourse = async (course) => {
  let result = false
  try {
    let downloadList = await getDownloadedListFromStorage()
    if (!downloadList.find(object => object.id === course.id)) {
      downloadList.push(course)
      await AsyncStorage.setItem(DOWNLOAD_LIST_KEY, JSON.stringify(downloadList))
      result = true
    }
    console.log("DownloadList: ", downloadList)
  } catch (e) {
    console.error(e)
  }
  return result
}

export const removeDownloadCourseFromStorage = async (courseId) => {
  try {
    const downloadList = await getDownloadedListFromStorage()
    const newDownloadList = downloadList.filter(object => object.id !== courseId)

    await AsyncStorage.setItem(DOWNLOAD_LIST_KEY, JSON.stringify(newDownloadList))
  } catch (e) {
    console.error(e)
  }
}

export const removeAllDownloadCourseFromStorage = async () => {
  await AsyncStorage.setItem(DOWNLOAD_LIST_KEY, JSON.stringify([]))
}