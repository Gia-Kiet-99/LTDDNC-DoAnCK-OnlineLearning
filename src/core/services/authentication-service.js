import axios from "axios";
import instance from "../configuration/axios-config";

export const requestLogin = async (username, password) => {
  const response = await instance.post("/user/login", {
    email: username,
    password: password
  })
  return response;
}
