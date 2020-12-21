import instance from "../configuration/axios-config";
import axios from "axios";

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

export const apiGetFavoriteCourses = (token) => {
  // axios.create({
  //   method: 'get',
  //   url: 'user/get-favorite-courses',
  //   headers: {
  //     "Authorization": token
  //   }
  // })
  return instance.get(
    "/user/get-favorite-courses",
    {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    },
  )

}
