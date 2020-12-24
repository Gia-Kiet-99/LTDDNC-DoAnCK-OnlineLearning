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