import { createSelector } from 'reselect';
import { CartSelectorProps } from '../../types';

const selectCart = (state: CartSelectorProps) => state.menu.cart;

export const selectTotalCartPrice = createSelector(
  [selectCart],
  (cart) => {
    return cart.reduce((acc, item) => {
      const totalByItem = (item.unityPrice + (item.modifierItemSelected.price || 0)) * item.quantity;
      return acc + totalByItem;
    }, 0);
  }
);
