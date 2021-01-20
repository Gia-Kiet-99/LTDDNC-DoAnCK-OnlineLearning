import instance from "../configuration/axios-config";

export const apiUpdateProfile = async (name, avatar, phone) => {
  return await instance.put('/user/update-profile', {
    name: name,
    avatar: avatar,
    phone: phone
  })
}

export const apiChangePassword = async (userId, oldPassword, newPassword) => {
  return await instance.post('/user/change-password', {
    id: userId,
    oldPass: oldPassword,
    newPass: newPassword
  })
}

export const apiRegisterAccount = async (email, phone, password) => {
  return await instance.post('/user/register', {
    username: "",
    email: email,
    phone: phone,
    password: password
  })
}

export const apiSendActivationEmail = async (email) => {
  return await instance.post('/user/send-activate-email', {
    email: email
  })
}