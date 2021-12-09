import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  items: [],
  status: null,
  error: null,
}

export const getallproducts = createAsyncThunk(
  'products/getallproducts',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const singleproduct = createAsyncThunk(
  'products/getallproducts',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      )
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getallproducts.pending]: (state, action) => {
      state.status = 'pending'
    },
    [getallproducts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [getallproducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export default productsSlice.reducer
