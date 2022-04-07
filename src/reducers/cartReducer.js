// {
//     id:'',
//     title:'',
//     price:2,
//     quantity
// }
import {ADD_TO_CART, CLEAR_CART, DELETE_TO_CART} from "../actions/cartAction";

const initialState = []


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updateCart;
            const foundItem = state.find(item => item.id === action.payload.id)
            if (!foundItem) {
                updateCart = [...state, action.payload]
            } else {
                updateCart = state.map(item => ({
                    ...item,
                    quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity
                }))
            }
            return updateCart
        case DELETE_TO_CART:
            return state.filter(item => item.id !== action.payload)
        case CLEAR_CART:
            return state.filter(item => item.id === null)
        default:
            return state;
    }
}


