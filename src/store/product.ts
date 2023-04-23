import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiService from '../utils/services/ApiService';

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
};

interface ProductState {
    products: Array<Product>;
};

const initialState = {
    products: [],
} as ProductState;

export const getProducts = createAsyncThunk<Array<Product>>("product/getProducts", async () => {
  const res = await ApiService.get("/products");
  console.log(res);
  return res;
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log(state, action, action.payload, action.payload.data)
            state.products = action.payload.data;
            console.log(state.products)
        })
    }
})

const { reducer } = productSlice;

export default reducer;