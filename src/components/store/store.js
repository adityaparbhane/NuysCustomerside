// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../cartcomponent/store/cartsSlice';
// import checkoutReducer from '../checkOut/store/checkoutSlice'

// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//     checkout: checkoutReducer,
//   },
// });



import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cartcomponent/store/cartsSlice';
import checkoutReducer from '../checkOut/store/checkoutSlice';

const localStorageMiddleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('checkoutForm', JSON.stringify(store.getState().checkout.checkoutForm));
    return result;
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout: checkoutReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
