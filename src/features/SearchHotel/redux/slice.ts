import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the state object
interface CheckInCheckOutState {
  dateInDateOut: [any, any];
  searchAddress: string;
}

// Define the initial state conforming to the CheckInCheckOutState interface
const initialState: CheckInCheckOutState = {
  dateInDateOut: [null,null ],
  searchAddress: ''
};

const checkInChechOutSlice = createSlice({
  name: 'checkInCheckOut',
  initialState,
  reducers: {
    setDate(state, action) {
      const [startDate, endDate] = action.payload
      state.dateInDateOut = [startDate, endDate];
    },
    setSearchVal(state, action: PayloadAction<string>) {
      state.searchAddress = action.payload;
    }
  },
});

export const { setDate, setSearchVal } = checkInChechOutSlice.actions;
export default checkInChechOutSlice.reducer;
