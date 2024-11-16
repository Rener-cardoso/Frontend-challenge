import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { restaurantDetails } from "./slices/restaurantDetails";
import { menuDetails } from "./slices/menuDetails";

export const store = configureStore({
  reducer: {
    restaurant: restaurantDetails,
    menu: menuDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => appDispatch = useDispatch