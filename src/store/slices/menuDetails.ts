import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModifierProps } from "../../Components/SelectModifierBox";
import { MenuProps } from "../../types";

interface AddCartPayloadProps { 
  name: string; 
  quantity: number; 
  unityPrice: number; 
  modifierItemSelected: {
    name: string;
    price: number;
  };
}

interface InitialStateProps {
  menuInfo: MenuProps | null;
  cart: {
    name: string;
    quantity: number;
    unityPrice: number;
    modifierItemSelected: ModifierProps;
  }[];
}

const initialState: InitialStateProps = {
  menuInfo: null,
  cart: [],
}

export const loadMenuDetails = createAsyncThunk('getMenu', async () => {
  try {
    const response = await fetch(`/api/challenge/menu`);
    const data = await response.json();
    
    return data;
  } catch (err) {
    console.error(err);
  }
})

const menuSlice = createSlice({
  name: "menuInfo",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<AddCartPayloadProps>) => {
      const newQuantity = action.payload.quantity;      
      const existItem = state.cart.find(item => item.name === action.payload.name);

      if (existItem) {
        existItem.quantity += newQuantity;
      } else {
        state.cart = [...state.cart, action.payload];
      }

    },
    incrementCartItem: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.name === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementCartItem: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.name === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadMenuDetails.fulfilled, (state, action) => {
      state.menuInfo = action.payload
    })

    builder.addCase(loadMenuDetails.rejected, () => {
      window.location.href = '/error';
    })
  }
})

export const menuDetails = menuSlice.reducer;
export const { addCart } = menuSlice.actions;
export const { incrementCartItem } = menuSlice.actions;
export const { decrementCartItem } = menuSlice.actions;