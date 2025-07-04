import { configureStore } from '@reduxjs/toolkit'

// A simple reducer placeholder for handleCart
const initialState = []

function handleCart(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    handleCart,
  },
})

export default store
