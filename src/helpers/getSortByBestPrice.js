

export const getSortByBestPrice = (arr) => {
    return arr.map((airline => {
        return {
            price: airline.price.amount,
            carrier: airline.carrier.caption
        }
    }))
        .sort((a, b) => a.price.amount - b.price.amount)
        .reduce((a, c) => {
            if (a.map(e => e.carrier).indexOf(c.carrier) === -1){
             a.push(c)
            }
             return a
            
        }, [])
 
}