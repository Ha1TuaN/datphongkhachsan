import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../../pages/Home/redux/slice";
import checkInCheckOutReducer from "../../features/SearchHotel/redux/slice"

export const store = configureStore({
    reducer:{
        searchAddress : searchReducer,
        checkInCheckOut : checkInCheckOutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store