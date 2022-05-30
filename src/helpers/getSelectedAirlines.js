

export const getSelectedAirlines = (flights, airlines) => {
    if (!airlines.length) {
        return [...flights];
    }
    let newArr = [];
    airlines.forEach(airline => {
        flights.forEach(flight => {
            if (flight.arrival.carrier === airline || flight.departure.carrier === airline) {
                newArr.push(flight);
            }
        })
    })
    return newArr;
}