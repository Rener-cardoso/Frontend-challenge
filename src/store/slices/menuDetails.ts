import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModifierProps } from "../../Components/SelectModifierBox";

export interface MenuProps {
  sections: {
    description: null;
    id: number;
    images: {
      id: number;
      image: string;
    }[];
    items: {
      alcoholic: number;
      availabilityType: string;
      available: boolean;
      description: string;
      id: number;
      images: {
        id: string;
        image: string;
      }[];
      name: string;
      position: number;
      price: number;
      sku: string;
      modifiers: {
        id: string;
        name: string;
        minChoices: number;
        maxChoices: number;
        items: {
          id: number;
          name: string;
          price: number;
          maxChoices: number;
          position: number;
          visible: number;
          availabilityType: string;
          available: boolean;
        }[];
      }[];
      visible: number;
    }[];
    name: string;
    position: number;
    visible: number;
  }[];
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
  const response = await fetch("/api/challenge/menu");
  const data = await response.json();
  
  return data;
})

const menuSlice = createSlice({
  name: "menuInfo",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<{ name: string; quantity: number; unityPrice: number; modifierItemSelected: any }>) => {
      const newQuantity = action.payload.quantity;      
      const existItem = state.cart.find(item => item.name === action.payload.name);

      if (existItem) {
        existItem.quantity += newQuantity;
      } else {
        state.cart = [...state.cart, action.payload];
      }

    },
    incrementCartItem: (state, action) => {
      const item = state.cart.find(item => item.name === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementCartItem: (state, action) => {
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
  }
})

export const menuDetails = menuSlice.reducer;
export const { addCart } = menuSlice.actions;
export const { incrementCartItem } = menuSlice.actions;
export const { decrementCartItem } = menuSlice.actions;