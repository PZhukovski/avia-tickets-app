import axios from 'axios';
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { transformData } from '../../helpers/transformData';
import { getPrice } from '../../helpers/getPrice';
import { getSort } from '../../helpers/getSort';
import { getFilterTransfer } from '../../helpers/getFilterTransfer';
import { getSortedPrice } from '../../helpers/getSortedPrice';
import { getSelectedAirlines } from '../../helpers/getSelectedAirlines';

const _apiBase = "http://localhost:3001/result"

const flightsAdapter = createEntityAdapter({
    sortComparer: (a, b) =>
        a.price - b.price
});

const initialState = flightsAdapter.getInitialState({
    flightsLoadingStatus: 'loading',
    sort: 'low-to-high',
    transfer: {
        oneTransfer: false,
        nonTransfer: false
    },
    sortedPrice: {
        min: '0',
        max: '1000000',
    },
    selectedAirlines: [],
    viewFlights: 2
});

export const fetchFlights = createAsyncThunk(
    'flights/fetchFlights=',
    async () => {
        const res = await axios.get("http://localhost:3001/result");
        const { flights } = res.data;
        const data = flights.map((flight => {
            return {
                id: flight.flightToken,
                carrier: flight.flight.carrier.caption,
                price: getPrice(flight.flight.price.passengerPrices[0].total.amount),
                departure: transformData(flight.flight.legs[1].segments),
                arrival: transformData(flight.flight.legs[0].segments),
            }
        })
        )
        return data;
    }
);
const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        sortFlightsChange: (state, action) => {
            state.sort = action.payload
        },
        filterTansferChange: (state, action) => {
            state.transfer = action.payload
        },

        filterPriceChange: (state, action) => {
            state.sortedPrice = action.payload
        },
        selectedAirlinesChange: (state, action) => {
            state.selectedAirlines = action.payload
        },
        viewFlightsChanged: (state, action) => {
            state.viewFlights += 2
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlights.pending, state => { state.flightsLoadingStatus = 'loading' })
            .addCase(fetchFlights.fulfilled, (state, action) => {
                state.flightsLoadingStatus = 'success'
                flightsAdapter.setAll(state, action.payload);

            })
            .addCase(fetchFlights.rejected, state => {
                state.flightsLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
});
const { actions, reducer } = flightsSlice;

export default reducer;


export const { selectAll: allFlights } = flightsAdapter.getSelectors(state => state.flights)

export const {
    sortFlightsChange,
    filterTansferChange,
    filterPriceChange,
    selectedAirlinesChange,
    viewFlightsChanged

} = actions;

export const sortFligths = createSelector(
    allFlights,
    state => state.flights.sort,
    (flights, sort) => {
        const result = getSort(flights, sort);
        return result;
    }

)
const filterTranfer = createSelector(
    sortFligths,
    state => state.flights.transfer,
    (flights, transfer) => {
        return getFilterTransfer(flights, transfer)
    }
)

const sortedPrice = createSelector(
    filterTranfer,
    state => state.flights.sortedPrice,
    (flights, price) => {
        return getSortedPrice(flights, price);

    }
)
const selectedAirlines = createSelector(
    sortedPrice,
    state => state.flights.selectedAirlines,
    (flights, airlines) => {
        return getSelectedAirlines(flights, airlines)
    }
)
export const getViewFlights = createSelector(
    selectedAirlines,
    state => state.flights.viewFlights,
    (flights, count) => {

        return [...flights].slice(0, count)
    }
)

