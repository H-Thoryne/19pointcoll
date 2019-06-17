import {
  PRODUCTS_FETCH,
  PRODUCTS_LOADING,
  WEEKENDPRODUCTS_FETCH
} from "./types"

export const fetchProducts = () => dispatch => {
  dispatch(setProductsLoading())

  if (window.weekendOffer === true) {
    fetch(process.env.REACT_APP_WEEKENDPRODUCT_LIST, { cache: "no-cache" })
      .then(res => res.json())
      .then(data => dispatch({
        type: WEEKENDPRODUCTS_FETCH,
        payload: data
      }))
  }

  fetch(process.env.REACT_APP_PRODUCT_LIST, { cache: "no-cache" })
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
