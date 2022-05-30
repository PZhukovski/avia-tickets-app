
export const getFlyTime = (departure, arrival) => {
    const travelTime = Date.parse(arrival) - Date.parse(departure);
    const hours = zeroBeforeNumber(Math.floor((travelTime / (1000 * 60 * 60))))
    const minutes = zeroBeforeNumber(Math.floor((travelTime / (1000 * 60)) % 60))
   
    return {
        hours,
        minutes
    }
}
export const getFlyTimeSort = (departure, arrival) => {
  const travelTime = Date.parse(arrival) - Date.parse(departure);
  const hours = Math.floor((travelTime / (1000 * 60 * 60)))
  const minutes =Math.floor((travelTime / (1000 * 60)) % 60)
 
  return (hours, minutes)
}
const zeroBeforeNumber =(number) =>{
    if (number >= 0 && number < 10) {
        return `0${number}`
      } else {
        return number
      }
}

