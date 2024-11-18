import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { RestaurantProps } from "../../types";

interface InitialStateProps {
  restaurantInfo: null | RestaurantProps;
}

const initialState: InitialStateProps = {
  restaurantInfo: null,
}

export const loadRestaurantDetails = createAsyncThunk('getDetails', async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/restaurant-info`);
    const data = await response.json();
    
    return data;
  } catch (err) {
    console.error(err);
  }
})

const restaurantSlice = createSlice({
  name: 'restaurantInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadRestaurantDetails.fulfilled, (state, action) => {
      state.restaurantInfo = action.payload
    })

    builder.addCase(loadRestaurantDetails.rejected, () => {
      window.location.href = '/error';
    })
  },
})

export const restaurantDetails = restaurantSlice.reducer;

export const useRestaurantTheme = () => {
  return useAppSelector(store => {
    const { restaurantInfo } = store.restaurant;

    return restaurantInfo;
  })
}