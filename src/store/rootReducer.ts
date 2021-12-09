import { combineReducers } from '@reduxjs/toolkit'
import { productsApi } from './ProductsApi'
import productReducer from './ProductSlice'
import cartReducer from './CartSlice'

const rootReducer = combineReducers({
  Products: productReducer,
  Cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
