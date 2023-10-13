import { legacy_createStore } from "redux";

// Reducer
const cartReducer  = (state = {
    cart: [],
}, 
action
) => {   
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
}
// Store
const store = legacy_createStore(cartReducer)
console.log("oncreate store:", store.getState())
// Subscibe
store.subscribe(() => {
    console.log("Store Changed:", store.getState())
})
// Dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {id: 1, qty: 20}
}
store.dispatch(action1)