import pkg from '@reduxjs/toolkit';

const { configureStore, createSlice } = pkg;

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        },
    },
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});
console.log("Oncreate Store:", store.getState())

store.subscribe(() => {
    console.log("Store Changed:", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 5}))