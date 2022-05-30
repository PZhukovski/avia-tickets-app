

export const getSortedPrice =(flights, {min, max}) =>{
    const minNumber = Number(min);
    const maxNumber = Number(max);
    const result = flights.filter(flight => flight.price > minNumber && flight.price < maxNumber )
    return result;

}