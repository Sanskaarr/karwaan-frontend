import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    id: number | null;
    name: string | null;
    email: string | null;
    isEmailVerified: boolean;
    password: string | null;
    phoneNumber: string | null;
    isPhoneNumberVerified: boolean | null;
    image: string | null;
    role: 'user' | 'admin' | null;
    resetPasswordTokenExpire: number | null;
    resetPasswordToken: string | null;
    verifyEmailToken: string | null;
    verifyTokenEmailExpire: number | null;
    }

const initialState = {
    user: {
        id: null,
        name: null,
        email: null,
        isEmailVerified: false,
        password: null,
        phoneNumber: null,
        isPhoneNumberVerified: false,
        image: null,
        role: null,
        resetPasswordToken: null,
        resetPasswordTokenExpire: null,
        verifyEmailToken: null,
        verifyTokenEmailExpire: null,
    } as InitialState
} ;

export const user = createSlice({
    name: "USER",
    initialState,
    reducers: {
        update_user_data: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        }
    }
});

export const {update_user_data} = user.actions;

export default user.reducer;
