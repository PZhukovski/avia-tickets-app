import { configureStore } from '@reduxjs/toolkit';
import flights from '../components/fligths/FlightsSlice';
import airlines from '../components/airlines/AirlinesSlice'


export const store = configureStore({
    reducer: {flights, airlines},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
    
})
export default store;