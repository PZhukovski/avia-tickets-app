export const transformData = (arr) => {
    if (arr.length === 1) {
        return {
            departureCity: arr[0].departureCity,
            departureAirport: arr[0].departureAirport,
            departureDate: arr[0].departureDate,
            arrivalAirport: arr[0].arrivalAirport,
            arrivalCity: arr[0].arrivalCity,
            arrivalDate: arr[0].arrivalDate,
            travelDuration: arr[0].travelDuration,
            carrier: arr[0].airline.caption,
            transfers: 0

        }
    } else {
        return {
            departureCity: arr[0].departureCity,
            departureAirport: arr[0].departureAirport,
            departureDate: arr[0].departureDate,
            arrivalAirport: arr[1].arrivalAirport,
            arrivalCity: arr[1].arrivalCity,
            arrivalDate: arr[1].arrivalDate,
            travelDuration: arr[0].travelDuration + arr[1].travelDuration,
            carrier: arr[1].airline.caption,
            transfers: 1
        }
    }

}
