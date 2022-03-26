export const getTimeHHMM = (time: string) => {
  const datetime = new Date(parseInt(time))
  const hours = ('0' + datetime.getHours()).slice(-2),
    minutes = ('0' + datetime.getMinutes()).slice(-2)
  return ` ${hours}:${minutes}`
}
