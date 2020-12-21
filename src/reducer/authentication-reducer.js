export const reducer = (prevState, action) => {
  console.log("AuthenticationReducer", action)
  switch (action.type) {
    case "LOGIN_SUCCEEDED":
      return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo}
    case "LOGIN_FAILED":
      return {...prevState, isAuthenticated: false}
    default:
      throw new Error();
  }
}