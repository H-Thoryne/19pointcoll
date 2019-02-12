import {
  FETCH_PRODUCTS,
  PRODUCTS_LOADING
} from "./types"

export const fetchProducts = () => dispatch => {
  dispatch(setProductsLoading())
  fetch(process.env.REACT_APP_PRODUCT_LIST)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    }))
}

// Set loading state
export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};

// // Clear errors
// export const clearErrors = () => {
//   return {
//     type: CLEAR_ERRORS
//   };
// };

