export const convertHour = (hours) => {
  // const seconds = hours * 3600
  // const value = new Date(seconds * 1000).toISOString().substr(11, 8)
  //
  // console.log(value)

  let hour = 0
  while ((hours -= 1) >= 0) {
    hour++
  }
  let minute = Math.floor((hours + 1) * 60);
  return (hour > 0) ? `${hour}h${minute}m` : `${minute}m`
}

export const convertHourToHHmmSS = (hours) => {
  const seconds = hours * 3600
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds % 3600) / 60)
  const second = Math.floor((seconds % 3600) % 60)

  return (hour > 0) ? `${hour}:${minute}:${second}` :
    ((minute > 0) ? `${minute}:${second}` : `00:${second}`)
}
