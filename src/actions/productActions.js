import {
  PRODUCTS_FETCH,
  PRODUCTS_LOADING
} from "./types"

export const fetchProducts = () => dispatch => {
  dispatch(setProductsLoading())
  fetch(process.env.REACT_APP_PRODUCT_LIST)
    .then(res => res.json())
    .then(data => dispatch({
      type: PRODUCTS_FETCH,
      payload: data
    }))
}

// Set loading state
export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  }
}