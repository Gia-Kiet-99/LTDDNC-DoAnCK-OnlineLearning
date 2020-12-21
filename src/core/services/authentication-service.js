import axios from "axios";
import instance from "../configuration/axios-config";

export const requestLogin = async (username, password) => {
  const response = await instance.post("/user/login", {
    email: "kietdg99@gmail.com",
    password: "123456789"
  })
  return response;
}
