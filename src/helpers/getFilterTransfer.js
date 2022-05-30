

export const  getFilterTransfer =(flights,  transfer)=>{
    if (transfer.oneTransfer === true  &&  transfer.nonTransfer === true ) {
        return flights.filter(flight => (
            (flight.arrival.transfers === 1  &&  flight.departure.transfers === 0 ) || (flight.arrival.transfers === 0 && flight.departure.transfers === 1 ) 
            ));
    }
    else if (transfer.oneTransfer === true &&  transfer.nonTransfer === false){
      return flights.filter(flight => flight.arrival.transfers === 1  && flight.departure.transfers ===1)
    }
    else if (transfer.oneTransfer === false &&  transfer.nonTransfer === true){
        return flights.filter(flight => flight.arrival.transfers === 0  && flight.departure.transfers === 0)
      }
      else {
        return [...flights]
      }

}