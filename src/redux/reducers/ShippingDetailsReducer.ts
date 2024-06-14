import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    houseNumber: string;
    buildingName: string;
    country: string;
    state: string;
    city: string;
    street: string;
    contactNumber: string;
    pin: string;
}
const initialState = {
    shippingDetails:{
        houseNumber:"",
        buildingName: "",
        country: "",
        state: "",
        city: "",
        street: "",
        contactNumber: "",
        pin: "",
    } as InitialState
} ;

export const shipping = createSlice({
    name: "ShippingDetails",
    initialState,
    reducers: {
        // update_product_data: (state, action) => {
        //     // state.products = { ...state.products, ...action.payload };
        //     state.products = [...action.payload];
        // }
        confirmedShippingDetails: (state, action) => {
            // console.log("payload",action.payload)
            state.shippingDetails = {...state.shippingDetails,...action.payload}
        }
    }
});

export const {confirmedShippingDetails} = shipping.actions;

export default shipping.reducer;
