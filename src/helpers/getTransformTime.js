import {getRussiaDay, getRussiaMounth} from './getRussiaDayAndMounth.js'

export const getTransformTime =(dateData) =>{
   const date = new Date(Date.parse(dateData));
   const time = new Date(dateData).toLocaleTimeString().slice(0,-3)
   const day = date.getDate();
   const mounth = date.getMonth();
   const  dayOfWeek = date.getDay();

   return { 
       time: time,
       day: `${day} ${getRussiaMounth(mounth)}.${getRussiaDay(dayOfWeek)}`}

}
