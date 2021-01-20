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