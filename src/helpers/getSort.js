import { getFlyTimeSort } from "./getFlyTime"


export const getSort = (flights, sort) => {
    switch (sort) {
        case 'low-to-high':
            return [...flights.sort((a, b) => a.price - b.price)]
        case 'high-to-low':
            return [...flights.sort((a, b) => b.price - a.price)]
        case 'fast-time-fly':
            return [...flights].sort((a, b) => {
                const flyThere = ((flight) => getFlyTimeSort(flight.arrival.departureDate, flight.arrival.arrivalDate));
                const flyBack = ((flight) => getFlyTimeSort(flight.departure.departureDate, flight.departure.arrivalDate));
                return (flyThere(a) + flyBack(a)) - (flyThere(b) + flyBack(b))
            })
        default:
            return [...flights]

    }
}