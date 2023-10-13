import pkg from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = pkg;

const addToCart = createAction("ADD_To_CART");

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    })
})

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});
console.log("Oncreate Store:", store.getState())

store.subscribe(() => {
    console.log("Store Changed:", store.getState())
})

store.dispatch(addToCart({id: 2, qty: 5}))