import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from "react";
import { getViewFlights ,  viewFlightsChanged, fetchFlights } from './FlightsSlice.js';
import FlightItem from './FlightItem.js';
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