// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     checkoutForm: {},
// };

// const checkoutSlice = createSlice({
//     name: 'checkout',
//     initialState,
//     reducers: {
//         setCheckoutForm(state, action) {
//             state.checkoutForm = action.payload;
//         },
//     },
// });

// export const { setCheckoutForm } = checkoutSlice.actions;

// export const selectCheckoutForm = (state) => state.checkout.checkoutForm;

// export default checkoutSlice.reducer;




// checkoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checkoutForm: {},
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setCheckoutForm(state, action) {
            state.checkoutForm = action.payload;
        },
    },
});

export const { setCheckoutForm } = checkoutSlice.actions;

export const selectCheckoutForm = (state) => state.checkout.checkoutForm;

export default checkoutSlice.reducer;
