import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { fetchFlights } from './FlightsSlice';
import { allFlights, getViewFlights ,  viewFlightsChanged } from './FlightsSlice';
import FlightItem from './FlightItem';
import flights from './flights.scss';



const Flights = () => {

    const dispatch = useDispatch();
    const flights = useSelector(getViewFlights);

    useEffect(() => {
        dispatch(fetchFlights());
    }, []);


    const loadArrayFlights = () => {
        dispatch(viewFlightsChanged());
    }
    return (
        <>
            {flights.map(flight =>
                <FlightItem key={flight.id} {...flight} />
            )}
            <button className='button-show' onClick={loadArrayFlights}>Показать еще </button>
        </>

    )
}
export default Flights; 