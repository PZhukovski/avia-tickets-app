
 export const getRussiaMounth =(mounthDate)=>{
  switch(mounthDate){
    case 0:
         return 'янв'
    case 1:
        return 'фев'
    case 2:
        return 'мар'
    case 3:
        return 'фпр'
    case 4:
        return 'май'
    case 5:
        return 'июн'
    case 6:
        return 'июл'
    case 7:
        return 'авг'
    case 8:
        return 'сен'
    case 9:
        return 'окт'
    case 10:
        return 'ноя'
    case 11:
        return 'дек'
 }

}
export const getRussiaDay =(dayDate)=>{
    switch(dayDate){
      case 0:
           return 'вс'
      case 1:
          return 'пн'
      case 2:
          return 'вт'
      case 3:
          return 'ср'
      case 4:
          return 'чт'
      case 5:
          return 'пт'
      case 6:
          return 'сб'
   }
}