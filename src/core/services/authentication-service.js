import instance from "../configuration/axios-config";

export const apiLogin = async (username, password) => {
  return await instance.post("/user/login", {
    email: username,
    password: password
  });
}

export const apiSendEmail = (email) => {
  return instance.post("/user/forget-pass/send-email", {
    email: email
  })
}

export const apiGetUserInfo = async (token) => {
  // console.log("apiGetUserInfo")
  return await instance.get("/user/me",{
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
}
