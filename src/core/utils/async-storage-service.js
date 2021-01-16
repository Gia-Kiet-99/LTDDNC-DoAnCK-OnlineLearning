import AsyncStorage from '@react-native-async-storage/async-storage';

// export const AUTH_STATE_KEY = "@key_authentication_state"
export const TOKEN_KEY = "@key_token"

export const saveAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token)
    console.log("Save successfully")
  } catch (e) {
    console.log("AsyncStorageService/saveToken", e)
  }
}

export const getAuthTokenFromStorage = async (token) => {
  try {
    // console.log("Save successfully")
    return await AsyncStorage.getItem(TOKEN_KEY, token)
  } catch (e) {
    console.log("AsyncStorageService/saveAuthToken", e)
  }
}

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY)
    console.log("AsyncStorageService/removeAuthToken: successfully")
  } catch(e) {
    console.log("AsyncStorageService/removeAuthToken", e)
  }
}