import { describe, it, expect } from "vitest";
import { addCart, decrementCartItem, incrementCartItem, menuDetails } from "../slices/menuDetails";

describe("menuSlice", () => {
  const initialState = {
    menuInfo: null,
    cart: [],
  };

  it("deve adicionar um item ao carrinho se não existir", () => {
    const payload = {
      name: "Burger",
      quantity: 1,
      unityPrice: 10,
      modifierItemSelected: { name: "1 meat", price: 2 },
    };

    const nextState = menuDetails(initialState, addCart(payload));

    expect(nextState.cart).toHaveLength(1);
    expect(nextState.cart[0]).toMatchObject(payload);
  });

  it("deve incrementar a quantidade de um item já existente no carrinho", () => {
    const initialCartState = {
      menuInfo: null,
      cart: [
        {
          name: "Burger",
          quantity: 2,
          unityPrice: 10,
          modifierItemSelected: { name: "1 meat", price: 2 },
        },
      ],
    };

    const payload = {
      name: "Burger",
      quantity: 1,
      unityPrice: 10,
      modifierItemSelected: { name: "1 meat", price: 2 },
    };

    const nextState = menuDetails(initialCartState, addCart(payload));

    expect(nextState.cart).toHaveLength(1);
    expect(nextState.cart[0].quantity).toBe(3);
  });

  it("deve incrementar a quantidade de um item com incrementCartItem", () => {
    const initialCartState = {
      menuInfo: null,
      cart: [
        {
          name: "Burger",
          quantity: 2,
          unityPrice: 10,
          modifierItemSelected: { name: "1 meat", price: 2 },
        },
      ],
    };

    const nextState = menuDetails(
      initialCartState,
      incrementCartItem("Burger")
    );

    expect(nextState.cart[0].quantity).toBe(3);
  });

  it("deve decrementar a quantidade de um item com decrementCartItem", () => {
    const initialCartState = {
      menuInfo: null,
      cart: [
        {
          name: "Burger",
          quantity: 2,
          unityPrice: 10,
          modifierItemSelected: { name: "1 meat", price: 2 },
        },
      ],
    };

    const nextState = menuDetails(
      initialCartState,
      decrementCartItem("Burger")
    );

    expect(nextState.cart[0].quantity).toBe(1);
  });

  it("não deve permitir que a quantidade de um item seja menor que 1", () => {
    const initialCartState = {
      menuInfo: null,
      cart: [
        {
          name: "Burger",
          quantity: 1,
          unityPrice: 10,
          modifierItemSelected: { name: "1 meat", price: 2 },
        },
      ],
    };

    const nextState = menuDetails(
      initialCartState,
      decrementCartItem("Burger")
    );

    expect(nextState.cart[0].quantity).toBe(1);
  });
});
