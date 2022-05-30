import axios from 'axios';
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { getSortByBestPrice } from '../../helpers/getSortByBestPrice';


const _apiBase = "http://localhost:3001/result"

const airlinesAdapter = createEntityAdapter({
    selectId: (airline) => airline.carrier
});

const initialState = airlinesAdapter.getInitialState({
    airlinesLoadingStatus: 'loading',

});

export const fetchAirlines = createAsyncThunk(
    'airlines/fetchAirlines=',
    async () => {
        const res = await axios.get("http://localhost:3001/result");
        const { bestPrices } = res.data;
        const airlines = bestPrices.ONE_CONNECTION.bestFlights;
        const result =  getSortByBestPrice(airlines);
        return result;
        
    }
);
const airlinesSlice = createSlice({
    name: 'airlines',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAirlines.pending, state => { state.airlinesLoadingStatus = 'loading' })
            .addCase(fetchAirlines.fulfilled, (state, action) => {
                state.airlinesLoadingStatus = 'success'
                airlinesAdapter.setAll(state, action.payload);

            })
            .addCase(fetchAirlines.rejected, state => {
                state.airlinesLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
});
const { reducer } = airlinesSlice;

export default reducer;


export const { selectAll: allAirlines } = airlinesAdapter.getSelectors(state => state.airlines)




