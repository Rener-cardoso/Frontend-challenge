import { createSelector } from 'reselect';
import { CartSelectorProps } from '../../types';

const selectCartItem = (state: CartSelectorProps, index: number) => state.menu.cart[index];

export const selectCartItemDetails = createSelector(
  [selectCartItem],
  cartItem => {
    const { name, quantity, unityPrice, modifierItemSelected } = cartItem;
    const totalPrice = (unityPrice + (modifierItemSelected.price || 0)) * quantity;

    return {
      name,
      quantity,
      totalPrice,
      modifier: modifierItemSelected,
    };
  }
);