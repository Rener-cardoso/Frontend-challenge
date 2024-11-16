import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface RestaurantProps {
  address1: string;
  address2: string;
  address3: null
  ccy: string;
  ccySymbol: string;
  city: string;
  country: string;
  county: string;
  currency: string;
  demoFlag: number;
  description: null
  id: number;
  internalName: string;
  liveFlag: number
  locale: string;
  name: string;
  postcode: string;
  timeZone: string;
  timezoneOffset: string;
  webSettings: {
    backgroundColour: string;
    bannerImage: string;
    id: number;
    navBackgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    venueId: number;
  }
}

interface InitialStateProps {
  restaurantInfo: null | RestaurantProps;
}

const initialState: InitialStateProps = {
  restaurantInfo: null,
}

export const loadRestaurantDetails = createAsyncThunk('getDetails', async () => {
  const response = await fetch(`/api/challenge/venue/9`);
  const data = await response.json();
  
  return data;
})

const restaurantSlice = createSlice({
  name: 'restaurantInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadRestaurantDetails.fulfilled, (state, action) => {
      state.restaurantInfo = action.payload
    })
  },
})

export const restaurantDetails = restaurantSlice.reducer;