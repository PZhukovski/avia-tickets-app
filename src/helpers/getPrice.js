

export const getPrice = (str)=>{
    const index = str.indexOf(".")
    return Number(str.slice(0,index))
}