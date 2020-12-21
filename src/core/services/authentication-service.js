import instance from "../configuration/axios-config";

export const requestLogin = async (username, password) => {
  return await instance.post("/user/login", {
    email: "kietdg99@gmail.com",
    password: "123456789"
  });
}

export const requestSendEmail = (email) => {
  return instance.post("/user/forget-pass/send-email", {
    email: email
  })
}
