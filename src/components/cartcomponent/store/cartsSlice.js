

import { createSlice } from '@reduxjs/toolkit';

// Function to save cart to localStorage
const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Function to load cart from localStorage
export const loadCartFromLocalStorage = () => {
    try {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
    }
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromLocalStorage(), // Initialize with items from localStorage if available
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, ProductName, Price, Discount, ProductImage, selectedImage, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity || 1;
            } else {
                state.items.push({
                    id,
                    ProductName,
                    Price,
                    Discount,
                    ProductImage,
                    selectedImage,
                    quantity: quantity || 1
                });
            }

            saveCartToLocalStorage(state.items);
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
            saveCartToLocalStorage(state.items);
        },
        updateCartItemQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity = quantity;
            }

            saveCartToLocalStorage(state.items);
        },
    },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;
