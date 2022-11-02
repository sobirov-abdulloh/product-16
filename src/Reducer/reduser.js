const initialState = {
  product: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state = {
        product: [...state.product, action.payload],
      };
    default:
      return state;
  }
};
export { initialState, reducer };
