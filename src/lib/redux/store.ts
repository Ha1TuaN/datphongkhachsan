import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../../pages/Home/redux/slice";

export const store = configureStore({
    reducer:{
        searchAddress: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store