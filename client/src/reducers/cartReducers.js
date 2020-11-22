export const cartReducer = (state = { cartItems: [] }, action) => {
  // action is an object with type,payload etc..

  switch (action.type) {
    case "CART_ADD_ITEM":
      // New Item
      const newItem = action.payload
      //check if New Item is already in cart
      const doesItemExist = state.cartItems.find(
        (item) => item.product === newItem.product
      )

      if (doesItemExist) {
        // replace the product that exists and return it with the rest items
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === doesItemExist.product ? newItem : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        }
      }

    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      }

    default:
      return state
  }
}
