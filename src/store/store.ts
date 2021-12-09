import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { useDispatch } from 'react-redux'
import { productsApi } from './ProductsApi'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store
