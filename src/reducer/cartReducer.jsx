const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
      };

    case "SET_QUANTITY":
      let { quantity, condition, stock } = action.payload;
      console.log(action.payload);
      if (condition === "increase") {
        if (quantity < stock) quantity = quantity += 1;
      } else {
        if (quantity > 1) {
          quantity -= 1;
        }
      }
      return {
        ...state,
        quantity: quantity,
      };

    case "SET_COLOR":
      console.table(action.payload);
      return {
        ...state,
        color: action.payload,
      };

    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

    case "DELETE_ITEM":
      const updatedCart = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartProducts: updatedCart,
      };

    case "DELETE_ALL_ITEMS":
      return {
        ...state,
        cartProducts: [],
      };

    case "UPDATE_QUANTITY":
      const { productId, amount } = action.payload;

      const updatedCartProducts = state.cartProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, amount: amount };
        }
        return product;
      });
      console.log(updatedCartProducts);

      return {
        ...state,
        cartProducts: updatedCartProducts,
      };

    case "CALCULATE_TOTAL_PRICE":
      const total = state.cartProducts.reduce((acc, product) => {
        return acc + product.price * product.amount;
      }, 0);

      let tempTotalItem = 0;
      const totalItem = state.cartProducts.reduce((acc, product) => {
        return acc + tempTotalItem + product.amount;
      }, 0);


      return {
        ...state,
        total,
        totalItem: totalItem
      };
  }
};
export default cartReducer;
